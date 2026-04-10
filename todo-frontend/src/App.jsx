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
  //FETCH TASKS
  const fetchTasks = async () => {
    setLoading(true);

    try {
      const response = await axios.get(API);
      if (response.data.success) {
        setTasks(response.data.data);
      } else {
        console.log("Unexpected response format");
        setTasks([]);
      }

    } catch (error) {
      if (error.response) {
        alert("Failed to load tasks: " + error.response.data.message);
      } else {
        alert("Network error while fetching tasks");
      }
      setTasks([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  //ADD TASK
  const addTask = async (title) => {
    if (!title || title.trim() === "") {
      alert("Please enter a valid task");
      return;
    }

    try {
      const response = await axios.post(API, { title });

      if (response.data.success) {
        fetchTasks();
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      if (error.response) {
        alert("Create failed: " + error.response.data.message);
      } else {
        alert("Network error while adding task");
      }
    }
  };


  //DELETE TASK
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);

      if (response.data.success) {
        fetchTasks();
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      alert("Error deleting task");
    }
  };


  //TOGGLE STATUS
  const toggleTask = async (id) => {
    try {
      const response = await axios.patch(`${API}/${id}`);

      if (response.data.success) {
        fetchTasks();
      }

    } catch (error) {
      alert("Failed to update task status");
    }
  };


  // SEARCH TASK
  const searchTask = async () => {
    if (search.trim() === "") {
      fetchTasks();
      return;
    }

    try {
      const response = await axios.get(`${API}/search/${search}`);

      if (response.data.success) {
        setTasks(response.data.data);
      } else {
        setTasks([]);
      }

    } catch (error) {
      alert("Search failed");
      setTasks([]);
    }
  };


  return (
    <div className="app">
      <h1>To-Do App 📝</h1>

      {/* ADD TASK */}
      <TaskForm addTask={addTask} />

      {/* SEARCH */}
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

      {/* LOADING */}
      {loading && <p>Loading tasks...</p>}

      {/* EMPTY */}
      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      {/* TASK LIST */}
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