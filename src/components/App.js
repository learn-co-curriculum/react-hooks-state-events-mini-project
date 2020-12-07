import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
    </div>
  );
}

export default App;
