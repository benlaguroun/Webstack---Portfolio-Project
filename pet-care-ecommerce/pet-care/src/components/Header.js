import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>
        <span className="navicon"></span>
      </label>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/order-history">Order History</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
