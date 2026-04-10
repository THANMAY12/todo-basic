import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // GET TASKS
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API);
      setTasks(res.data.data || []);
    } catch (err) {
      alert("Failed to load tasks");
      setTasks([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  const addTask = async (title) => {
    if (!title.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      await axios.post(API, { title });
      fetchTasks();
    } catch (err) {
      alert("Could not add task");
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  // TOGGLE TASK
  const toggleTask = async (id) => {
    try {
      await axios.patch(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Update failed");
    }
  };

  // SEARCH TASK
  const searchTask = async () => {
    if (search.trim() === "") {
      fetchTasks();
      return;
    }

    try {
      const res = await axios.get(`${API}/search/${search}`);
      setTasks(res.data.data || []);
    } catch (err) {
      alert("Search failed");
      setTasks([]);
    }
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>

      <TaskForm addTask={addTask} />

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchTask}>Search</button>

      {loading && <p>Loading...</p>}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      {!loading && tasks.length > 0 && (
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