import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;