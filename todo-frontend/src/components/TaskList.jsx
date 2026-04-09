function TaskList({ tasks, deleteTask, toggleTask }) {

  // ✅ Safety check
  if (!Array.isArray(tasks)) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div className="task" key={task._id}>

          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </span>

          <div>
            <button
              className="done-btn"
              onClick={() => toggleTask(task._id)}
            >
              {task.completed ? "Undo" : "Done"}
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default TaskList;