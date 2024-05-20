// src/components/BlogSection.js
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import './BlogSection.css';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPosts(data.blogPosts))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <section className="blog-section">
      <h2>From Our Blog</h2>
      <div className="blog-posts">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
