// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order-history">Order History</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
);

export default Header;
