import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <ul className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;