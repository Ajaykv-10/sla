import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page">
      <h1>Users</h1>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <p>🌐 {user.website}</p>
          <span>{user.company.name}</span>
        </div>
      ))}
    </div>
  );
}
