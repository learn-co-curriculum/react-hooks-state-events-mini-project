import React from "react";

function Task({ task, onDelete }) {
  if(!task){
    return null;
  }
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(task)}>
        X
      </button>
    </div>
  );
}

export default Task;