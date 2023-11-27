import React from "react";
import "./App.css";

import Addtodo from "./components/Addtodo";
import AllToDos from "./components/AllToDos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <h1>List Your Daily Task</h1>
        <Navbar />
        <Addtodo />
        <AllToDos />
    </main>
  );
}

export default App;
