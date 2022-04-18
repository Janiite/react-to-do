import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Axios from "axios"; //Server API
import{BrowserRouter as Router, Routes, Route,} from 'react-router-dom'


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  Axios.get("http://localhost:3001/todos", {}).then((response) => { //Get all data from database
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
    Axios.post("http://localhost:3001/delete", { // Delete data from database where id is true
      id: id,
    }).then(() => {
      console.log("Done");
    });
  };

  //Toggle Remainder
  const toggleReminder = (id) => {
    console.log(id);

    Axios.post("http://localhost:3001/get", { //Get task reminders status
      id: id,
    }).then((response) => {
      Axios.post("http://localhost:3001/update", { //Updates task reminder status to opposite 
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
