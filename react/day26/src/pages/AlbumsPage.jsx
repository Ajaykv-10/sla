import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/albums`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch albums");
        return res.json();
      })
      .then((data) => setAlbums(data.slice(0, 10)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading albums...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page">
      <h1>Albums</h1>
      {albums.map((album) => (
        <div className="card" key={album.id}>
          <h3>{album.title}</h3>
          <span>User #{album.userId}</span>
        </div>
      ))}
    </div>
  );
}
