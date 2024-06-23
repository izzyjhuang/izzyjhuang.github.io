// src/App.js
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;
