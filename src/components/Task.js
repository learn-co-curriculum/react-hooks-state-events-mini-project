import React from "react";
import TaskList from "./TaskList";

function Task({category,text}) {
  function deleteitem(id){
    console.log(id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteitem}>X</button>
    </div>
  );
}

export default Task;
