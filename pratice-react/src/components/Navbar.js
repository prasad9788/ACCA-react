// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Inidigo.exam</div>
      <div className="navbar-links">
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Programs</a></li>
          <li><a href="#services">Why Choose us?</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
