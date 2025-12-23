import { useState } from "react";
import "./TaskForm.css";

function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [prio, setPrio] = useState("Low");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") return; // Forbid empty strings in title

    props.onAdd(title, prio); // call the onAdd callable function passed as a prop from App

    setTitle(""); //reset title input field
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input the title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={prio} onChange={(e) => setPrio(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
