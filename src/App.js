import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Projects from './components/Projects';
import ProjectPost from './components/ProjectPost';
import Adventures from './components/Adventures';
import AdventurePost from './components/AdventurePost';
import Experience from './components/Experience';
import Notes from './components/Notes';
import Footer from './components/Footer';
import LeafletMap from './components/LeafletMap'; // Import the new LeafletMap component
import KmfMap from './components/KMF_Map'; // Import the new LeafletMap component
import './App.css';

function App() { 
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <Router>
      <div className="App">
        <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        
        <Routes>
          <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} />
          <Route path="/projects" element={<Projects selectedLanguage={selectedLanguage}/>} />
          <Route path="/projects/:slug" element={<ProjectPost selectedLanguage={selectedLanguage}/>} />
          <Route path="/adventures" element={<Adventures selectedLanguage={selectedLanguage} />} />
          <Route path="/adventures/:slug" element={<AdventurePost selectedLanguage={selectedLanguage}/>} />
          <Route path="/notes" element={<Notes selectedLanguage={selectedLanguage} />} />
          <Route path="/experience" element={<Experience selectedLanguage={selectedLanguage} />}/>
          <Route path="/map" element={<LeafletMap />} /> {/* New route for the Leaflet map */}
          <Route path="/kmfmap" element={<KmfMap />} /> {/* New route for the Leaflet map */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const Home = ({ selectedLanguage }) => (
  <div>
    <Banner selectedLanguage={selectedLanguage} />
  </div>
);

export default App;
