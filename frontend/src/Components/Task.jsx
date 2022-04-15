import { FaTimes } from "react-icons/fa";

import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id, task.reminder)}
    >
    
      <h3>
        {task.task}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => onDelete(task.id)}
        />{" "}
      </h3>
      
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
