import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, onDelete } = props;
  return (
    <ul className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </ul>
  );
}

export default TaskList;