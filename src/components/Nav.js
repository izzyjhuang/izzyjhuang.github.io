// src/components/Nav.js
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Lavinia Lee Music Studio</h1>
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
