import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>(
    []
  );
  const [inputTask, setInputTask] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "remaining">(
    "all"
  );

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, { task: inputTask, completed: false }]);
      setInputTask("");
    }
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "remaining":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="mx-4 mt-5">
      <div className="flex justify-between items-center text-yellow-500 font-bold">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("remaining")}>Remaining</button>
      </div>
      {/* <div className="w-full bg-yellow-600 h-1"></div> */}

      <div className="flex justify-between items-center mt-5">
        <input
          type="text"
          placeholder="Add a task..."
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          className="w-[450px] px-4 py-2 rounded-md"
        />
        <button
          className="bg-yellow-500 px-2 py-2 rounded-lg  font-bold"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("remaining")}>Remaining</button>
      </div> */}

      {/* Make sure to pass the 'onDelete' prop */}
      <TaskList
        tasks={filteredTasks()}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default TaskManager;
