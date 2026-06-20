import { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo Application</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <li key={index}>
              {index + 1}. {todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoApp;