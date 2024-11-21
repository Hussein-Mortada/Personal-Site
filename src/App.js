import React from 'react';
import LeftColumn from './components/LeftColumn.js';
import RightColumn from './components/RightColumn.js';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground.js';
function App() {
  
  return (
    <div className="app-container">
      <ParticlesBackground />
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;
