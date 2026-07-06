import { useState } from "react";

const initialForm = { name: "", age: "", company: "" };

export default function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.company) return;

    if (editId !== null) {
      setTodos(todos.map((t) => (t.id === editId ? { ...form, id: editId } : t)));
      setEditId(null);
    } else {
      setTodos([...todos, { ...form, id: Date.now() }]);
    }
    setForm(initialForm);
  };

  const handleEdit = (todo) => {
    setForm({ name: todo.name, age: todo.age, company: todo.company });
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditId(null);
  };

  return (
    <div style={{ maxWidth: 700, margin: "30px auto", fontFamily: "Arial, sans-serif", padding: "0 16px" }}>
      <h2>Todo List</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ padding: "6px 10px", flex: "1 1 150px" }}
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          style={{ padding: "6px 10px", width: 80 }}
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          style={{ padding: "6px 10px", flex: "1 1 150px" }}
        />
        <button type="submit" style={{ padding: "6px 14px" }}>
          {editId !== null ? "Update" : "Add"}
        </button>
        {editId !== null && (
          <button type="button" onClick={handleCancel} style={{ padding: "6px 14px" }}>
            Cancel
          </button>
        )}
      </form>

      {/* Table */}
      {todos.length === 0 ? (
        <p>No entries yet. Add one above!</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id} style={{ background: editId === todo.id ? "#fffde7" : "white" }}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.age}</td>
                <td>{todo.company}</td>
                <td>
                  <button onClick={() => handleEdit(todo)} style={{ marginRight: 6 }}>Edit</button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}