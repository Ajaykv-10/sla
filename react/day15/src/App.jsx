import React, { useState, useEffect, useMemo } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceSort, setPriceSort] = useState('default'); // 'default', 'asc', 'desc'

  // Fetch products on component mount
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Compute unique categories from fetched products
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category).filter(Boolean);
    return ['all', ...new Set(cats)];
  }, [products]);

  // Process sorting and filtering
  const processedProducts = useMemo(() => {
    let result = [...products];

    // 1. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(
        (product) => product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Search Query Filter (Checks title, description, brand, and category)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (product) =>
          product.title?.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.brand?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query)
      );
    }

    // 3. Price Sorting Only
    if (priceSort === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, searchQuery, priceSort]);

  if (loading) {
    return <div className="loading">Loading products list...</div>;
  }

  if (error) {
    return <div className="error">Error loading products: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <p className="">Search, category filter, and sort by price</p>

      {/* Inputs controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Filter by Category"
        >
          <option value="all">All Categories</option>
          {categories.filter((cat) => cat !== 'all').map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          aria-label="Sort by Price"
        >
          <option value="default">Sort by Price: Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="stats">
        Showing {processedProducts.length} of {products.length} products
      </div>

      {processedProducts.length === 0 ? (
        <div className="empty">No products match your criteria.</div>
      ) : (
        <div className="product-grid">
          {processedProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                onError={(e) => {
                  // Fallback standard visual when thumbnail fails to load
                  e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&auto=format&fit=crop&q=60';
                }}
              />
              <span className="product-category">{product.category}</span>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price?.toFixed(2)}</span>
                <span className="product-rating">★ {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;