import React, { useState } from "react";

function NewTaskForm({ categories, tasks, setTasks }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text && category) {
      const newTask = {
        text,
        category,
      };

      setTasks([...tasks, newTask]);
      setText("");
      setCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;