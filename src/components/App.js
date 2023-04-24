import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory}/>
      <NewTaskForm />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;