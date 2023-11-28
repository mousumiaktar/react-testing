import React from 'react';

interface TaskProps {
  task: string;
  completed: boolean;
  onComplete: () => void;
  onDelete?: () => void; // Make onDelete optional
}

const Task: React.FC<TaskProps> = ({ task, completed, onComplete, onDelete }) => {
  return (
    <div className='flex justify-between items-center mt-4 bg-yellow-200 py-2 px-2 rounded-md'>
      <span className='bg-gray-800 text-white px-2 py-1 rounded-md col-span-2' style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      
      <button className='bg-green-600 text-white px-2 py-1 rounded-md' onClick={onComplete}>Complete</button>
      {onDelete && <button className='bg-red-600 text-white px-2 py-1 rounded-md' onClick={onDelete}>Delete</button>}
      
    </div>
  );
};

export default Task;