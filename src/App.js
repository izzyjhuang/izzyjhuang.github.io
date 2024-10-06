import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed to HashRouter
import Banner from './components/Banner';
import Header from './components/Header';
import Projects from './components/Projects';
import Adventures from './components/Adventures';
import AdventurePost from './components/AdventurePost';
import Notes from './components/Notes';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State for managing the selected language
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <Router>
      <div className="App">
        {/* Pass selectedLanguage and setSelectedLanguage to the Header component */}
        <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        
        <Routes>
          <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/adventures" element={<Adventures selectedLanguage={selectedLanguage} />} />
          <Route path="/adventures/:slug" element={<AdventurePost />} />
          <Route path="/notes" element={<Notes selectedLanguage={selectedLanguage} />} />
          {/* Add other routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

// Pass selectedLanguage to the Banner component in the Home route
const Home = ({ selectedLanguage }) => (
  <div>
    <Banner selectedLanguage={selectedLanguage} />
    <div></div>
  </div>
);

export default App;