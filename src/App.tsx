import React from "react";
import TaskManager from "./pages/TaskManager";

const App: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-center items-center mt-5">
      <div className="w-[600px] bg-gray-800 p-4 rounded-md">
        <h1 className="text-4xl font-bold text-center text-yellow-500">Task Management</h1>
        <TaskManager />
      </div>
    </div>
  );
};

export default App;
