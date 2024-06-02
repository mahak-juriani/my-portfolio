import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import TypeWriter from './components/Typewriter/Typewriter.js';
import Tile from './components/Tile/Tile';
import Banner from './components/Banner';
import Progress from './components/Progress';
import HomePage from './Pages/AboutPage';
import AboutPage from './Pages/HomePage';
import SkillsPage from './Pages/Skills';
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    // <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="static-container">
          <h1 className="nameElement">Mahak Juriani</h1>
          <TypeWriter
            text={[
              "Hello, I'm Mahak Juriani.",
              "I'm a Software Developer.",
              "This is my portfolio."
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
          />

          <div className='icon-container'>
            <a href="https://www.linkedin.com/in/mahak-juriani-92002827a/" target="_blank" rel="noopener noreferrer" className='icon'>
                  <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/mahak-juriani" target="_blank" rel="noopener noreferrer" className='icon'>
                  <i class="fab fa-github"></i>
            </a>
            <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className='icon'>
                  <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>
      <div className='About'>
        <Tile
          header={"About"}
          subHeader={"This is where you can describe about yourself. The more you describe about yourself, the better it is!"}
          img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          text={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
          position={"img-right"}
          bgColor={"red"}
        />
      </div>
      <SkillsPage />
      <Certifications />
      <Education />
      {/* <Banner />
      <Progress percentage={30}/> */}
      {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div> */}
      {/* // </Router> */}
      </div>
  );
}

export default App;