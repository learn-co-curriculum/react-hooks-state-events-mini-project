import React from "react";
import { CATEGORIES } from "../data";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <input placeholder="New task details" type="text" name="text" />
      <select name="category">
        {CATEGORIES.filter((cat) => cat !== "All").map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
