// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AccaLevels from './components/AccaLevels';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/acca-levels" element={<AccaLevels />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
