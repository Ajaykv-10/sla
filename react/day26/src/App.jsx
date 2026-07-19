import { lazy, Suspense, useState } from "react";

// Lazy load all 3 pages
const PostsPage  = lazy(() => import("./pages/PostsPage"));
const UsersPage  = lazy(() => import("./pages/UsersPage"));
const AlbumsPage = lazy(() => import("./pages/AlbumsPage"));

const PAGES = ["Posts", "Users", "Albums"];

export default function App() {
  const [activePage, setActivePage] = useState("Posts");

  function renderPage() {
    if (activePage === "Posts")  return <PostsPage />;
    if (activePage === "Users")  return <UsersPage />;
    if (activePage === "Albums") return <AlbumsPage />;
  }

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav>
        {PAGES.map((page) => (
          <button
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        ))}
      </nav>

      {/* ===== Lazy-loaded page with Suspense fallback ===== */}
      <Suspense fallback={<div className="loading">Loading page...</div>}>
        {renderPage()}
      </Suspense>
    </>
  );
}