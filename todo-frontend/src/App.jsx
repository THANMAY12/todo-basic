import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // 🔁 GET TASKS
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      alert("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ➕ ADD TASK
  const addTask = async (title) => {
    try {
      await axios.post(API, { title });
      fetchTasks();
    } catch (err) {
      alert("Error adding task");
    }
  };

  // ❌ DELETE TASK
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Error deleting task");
    }
  };

  // ✔️ TOGGLE COMPLETE
  const toggleTask = async (id) => {
    try {
      await axios.patch(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Error updating task");
    }
  };

  // 🔍 SEARCH TASK
  const searchTask = async () => {
    try {
      if (search === "") {
        return fetchTasks();
      }

      const res = await axios.get(`${API}/search/${search}`);
      setTasks(res.data);
    } catch (err) {
      alert("Error searching tasks");
    }
  };

  return (
    <div className="app">
      <h1>To-Do App 📝</h1>

      <TaskForm addTask={addTask} />

      {/* 🔍 SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchTask}>Search</button>
      </div>

      {/* 📋 TASK LIST */}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;