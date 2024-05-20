import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>
        <span className="navicon"></span>
      </label>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        <Link to="/order-history" onClick={() => setMenuOpen(false)}>Order History</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;

