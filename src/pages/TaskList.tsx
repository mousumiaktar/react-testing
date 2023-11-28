// import React from 'react';
// import Task from './Task';

// interface TaskListProps {
//   tasks: { task: string; completed: boolean }[];
//   onComplete: (index: number) => void;
// }

// const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete }) => {
//   return (
//     <div>
//       {tasks.map((task, index) => (
//         <Task key={index} task={task.task} completed={task.completed} onComplete={() => onComplete(index)} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;

import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: { task: string; completed: boolean }[];
  onComplete: (index: number) => void;
  onDelete?: (index: number) => void; // Make onDelete optional
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
          onDelete={onDelete ? () => onDelete(index) : undefined} // Check if onDelete is defined
        />
      ))}
    </div>
  );
};

export default TaskList;