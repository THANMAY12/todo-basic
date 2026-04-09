import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Enter task..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <button className="add-btn">Add</button>
</form>
  );
}

export default TaskForm;