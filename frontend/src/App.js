import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Axios from "axios"; //Server API


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState();

  Axios.get("http://localhost:3001/todos", {}).then((response) => {
    setTasks(response.data);
  });

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete Task
  const deleteTask = (id) => {
    console.log(id);
    Axios.post("http://localhost:3001/delete", {
      id: id,
    }).then(() => {
      console.log("Done");
    });
  };

  //Toggle Remainder
  const toggleReminder = (id) => {
    console.log(id);

    Axios.post("http://localhost:3001/get", {
      id: id,
    }).then((response) => {
      Axios.post("http://localhost:3001/update", {
        id: id,
        reminder: response.data[0].reminder,
      }).then((result) => {
        console.log("Reminder toggled");
      });
    });
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
