import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: info@petcare.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Pet Street, Pet City</li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><button className="link-button" onClick={() => window.location.href='#'}>Facebook</button></li>
            <li><button className="link-button" onClick={() => window.location.href='#'}>Twitter</button></li>
            <li><button className="link-button" onClick={() => window.location.href='#'}>Instagram</button></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Pet Care. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
