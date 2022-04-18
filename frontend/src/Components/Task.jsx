import { FaTimes, FaEdit } from "react-icons/fa";

import React from "react";

const Task = ({ task, onDelete, onToggle, edit }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id, task.reminder)}
    >
      <h3>
        {task.task}
        <div>
          {" "}
          <FaEdit
            style={{ color: "green" }}
            onClick={() => edit(task.id)}
          />
          <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
        </div>
      </h3>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
