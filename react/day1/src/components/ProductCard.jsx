function ProductCard() {
  const product = {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    description: "A comfortable and responsive wireless mouse with long battery life.",
  };

  return (
    <div className="border p-3">
      <h2>Product Details</h2>
      <hr></hr>
      <p><strong>Product Name:</strong> {product.name}</p>
      <p><strong>Product Price:</strong> ₹{product.price}</p>
      <p><strong>Product Category:</strong> {product.category}</p>
      <p><strong>Product Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductCard;