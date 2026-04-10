import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // GET TASKS
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data || []); // simple fix
    } catch (err) {
      console.log("Error fetching tasks");
      setTasks([]); // fallback
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  const addTask = async (title) => {
    try {
      await axios.post(API, { title });
      fetchTasks();
    } catch (err) {
      console.log("Error adding task");
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.log("Error deleting task");
    }
  };

  // TOGGLE TASK
  const toggleTask = async (id) => {
    try {
      await axios.patch(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.log("Error updating task");
    }
  };

  // SEARCH
  const searchTask = async () => {
    try {
      if (search === "") {
        fetchTasks();
        return;
      }

      const res = await axios.get(`${API}/search/${search}`);
      setTasks(res.data || []); // simple fix

    } catch (err) {
      console.log("Search error");
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

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;