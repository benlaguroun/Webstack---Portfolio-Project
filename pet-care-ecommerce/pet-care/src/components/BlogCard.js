// src/components/BlogCard.js
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={post.link} className="read-more">Read More</a>
    </div>
  );
};

export default BlogCard;
