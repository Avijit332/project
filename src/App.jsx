import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <header className="navbar">
        <h1>ShopEase</h1>
        <div className="cart-info">🛒 {cart.length} Items | ₹{total}</div>
      </header>

      <section className="hero">
        <h2>Modern E-Commerce Store</h2>
        <p>Discover amazing products at great prices.</p>
      </section>

      <div className="container">
        <div className="products-section">
          <h2>Products</h2>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <h3>Total: ₹{total}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
