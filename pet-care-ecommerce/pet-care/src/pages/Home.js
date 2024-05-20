// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import BlogSection from '../components/BlogSection';
import './Home.css';

const Home = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Hero />
        <ProductList />
        <BlogSection />
      </div>
     
    </div>
  );
};

export default Home;
