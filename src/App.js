// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Projects from './components/Projects';
import Adventures from './components/Adventures';
import AdventurePost from './components/AdventurePost';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/adventures/:slug" element={<AdventurePost />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Banner />
    <div>
    </div>
  </div>
);

export default App;