import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: { task: string; completed: boolean }[];
  onComplete: (index: number) => void;
  onDelete?: (index: number) => void; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.task}
          completed={task.completed}
          onComplete={() => onComplete(index)}
          onDelete={onDelete ? () => onDelete(index) : undefined}
        />
      ))}
    </div>
  );
};

export default TaskList;