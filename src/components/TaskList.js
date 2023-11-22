import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;