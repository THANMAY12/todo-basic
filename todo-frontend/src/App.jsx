import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = import.meta.env.VITE_API_URL;

function App() {
  // state
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔁 GET TASKS
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);

      // make sure it's always array
      if (Array.isArray(res.data)) {
        setTasks(res.data);
      } else {
        setTasks([]);
      }

    } catch (err) {
      alert("Error fetching tasks");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  // run on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  // ➕ ADD TASK
  const addTask = async (title) => {
    if (!title.trim()) return; // prevent empty input

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
        fetchTasks();
        return;
      }

      const res = await axios.get(`${API}/search/${search}`);

      if (Array.isArray(res.data)) {
        setTasks(res.data);
      } else {
        setTasks([]);
      }

    } catch (err) {
      alert("Error searching tasks");
      setTasks([]);
    }
  };

  return (
    <div className="app">
      <h1>To-Do App 📝</h1>

      {/* add task */}
      <TaskForm addTask={addTask} />

      {/* search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchTask();
          }}
        />
        <button onClick={searchTask}>Search</button>
      </div>

      {/* loading */}
      {loading && <p>Loading...</p>}

      {/* empty state */}
      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      {/* task list */}
      {!loading && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;