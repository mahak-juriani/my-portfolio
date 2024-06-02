import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import TypeWriter from './components/Typewriter/Typewriter.js';
import Tile from './components/Tile/Tile';
import Banner from './components/Banner';
import Progress from './components/Progress';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SkillsPage from './Pages/Skills';
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';
import Projects from './Pages/Projects';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect, useImperativeHandle, useState } from 'react';
function App() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="education" element={<Education />} />
        <Route path="certification" element={<Certifications />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </Router>
    
  );
}

export default App;