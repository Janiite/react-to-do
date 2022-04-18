import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, setTasks, onDelete, onToggle, edit }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          reminder={task.reminder}
          onDelete={onDelete}
          onToggle={onToggle}
          edit={edit}
        />
      ))}
    </>
  );
};

export default Tasks;
