import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="product-list-section">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
