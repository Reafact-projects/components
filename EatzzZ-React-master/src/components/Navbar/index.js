import React from 'react';
import "../Navbar/Navbar.css" // Assuming you use a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">

        <span className="navbar-brand">George's 🌭</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home </a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Place Order</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;