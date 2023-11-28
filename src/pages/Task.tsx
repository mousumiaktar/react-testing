// interface TaskProps {
//     task: string;
//     completed: boolean;
//     onComplete: () => void;
//   }

//   const Task: React.FC<TaskProps> = ({ task, completed, onComplete }) => {
//     return (
//       <div>
//         <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
//         <button onClick={onComplete}>Complete</button>
//       </div>
//     );
//   };

// export default Task;

import React from 'react';

interface TaskProps {
  task: string;
  completed: boolean;
  onComplete: () => void;
  onDelete?: () => void; // Make onDelete optional
}

const Task: React.FC<TaskProps> = ({ task, completed, onComplete, onDelete }) => {
  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      <button onClick={onComplete}>Complete</button>
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
};

export default Task;