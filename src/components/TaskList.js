import React from "react";
//import { TASKS } from "../data";
import Task from "./Task";
function TaskList({tasks,onDeleteTask}) {
  
  
  const displayTask=tasks.map((task)=>{
  return ( <Task
    key={task.text}
    text={task.text}
    category={task.category}
    onDeleteTask={onDeleteTask}
    />)
  })
  

  return (
    <div className="tasks">
      {displayTask/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
