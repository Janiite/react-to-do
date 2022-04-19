import React from 'react'
import { useState } from "react";
import Axios from "axios";

const EditTask = ({editTask, id}) => {
    const [newText, setNewText] = useState("");
  const [newDay, setNewDay] = useState("");
  const [newReminder, setNewReminder] = useState(false);

  const edit = (e) => {
    e.preventDefault();

    if (!newText) {
      alert("Please add a task ");
      return;
    } else {
      Axios.post("http://localhost:3001/edit", { // send data to db
        task: newText,
        day: newDay,
        reminder: newReminder,
      }).then((result) => {
        console.log(result);
      });
    }

    

}
  
  
  
  return (
    <form className="add-form" onSubmit={edit}>
      <div className="form-control">
        <label htmlFor="">Edit Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Edit Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Edit remainder</label>
        <input
          type="checkbox"
          checked={newReminder}
          value={newReminder}
          onChange={(e) => setNewReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Edit Task" className="btn" />
    </form>
  )
}

export default EditTask