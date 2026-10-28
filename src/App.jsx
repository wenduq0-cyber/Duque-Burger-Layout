import React, { useState } from 'react';
import { burgerList } from './burgerData';
import './App.css';

function App() {
  const [totalCartCount, setTotalCartCount] = useState(0);

  const [quantities, setQuantities] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const handleIncrease = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const handleDecrease = (id) => {
    if (quantities[id] > 0) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const handleAddToCart = (id) => {
    const qtyToAdd = quantities[id];
    if (qtyToAdd > 0) {
      setTotalCartCount(totalCartCount + qtyToAdd);
      setQuantities({ ...quantities, [id]: 0 });
    }
  };

  return (
    <div>
      {/* Navbar with Dell Burger Logo and Cart Counter */}
      <nav className="navbar">
        <div className="logo-container">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80" 
            alt="Dell Burger Logo" 
            className="brand-logo" 
          />
          <span className="brand-name">Dell Burger</span>
        </div>
        <div className="nav-links">
          <span>ABOUT</span>
          <span>OUR MENU</span>
          <span>SHOP</span>
          <span>CONTACT</span>
          <span className="cart-button">🛒 {totalCartCount}</span>
        </div>
      </nav>

      {/* Main Menu Layout */}
      <div className="menu-section">
        <h1 className="menu-title">DELL'S SIGNATURE CRAZY BURGERS</h1>
        <p className="menu-subtitle">
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy 
          patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted 
          bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!
        </p>

        {/* React Map Loop */}
        <div className="burger-grid">
          {burgerList.map((burger) => (
            <div className="burger-card" key={burger.id}>
              <img src={burger.image} alt={burger.name} className="burger-img" />
              
              <div className="burger-info">
                <div className="burger-rating">{burger.rating}</div>
                <h3 className="burger-name">{burger.name}</h3>
                <p className="burger-desc">{burger.description}</p>
              </div>

              {/* Price Row with + and - Controls */}
              <div className="price-qty-row">
                <span className="burger-price">₱{burger.price.toFixed(2)}</span>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => handleDecrease(burger.id)}>-</button>
                  <span className="qty-count">{quantities[burger.id]}</span>
                  <button className="qty-btn" onClick={() => handleIncrease(burger.id)}>+</button>
                </div>
              </div>

              {/* Add to Cart Button at the Bottom */}
              <div className="card-action">
                <button className="add-btn" onClick={() => handleAddToCart(burger.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;