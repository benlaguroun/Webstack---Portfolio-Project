import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

