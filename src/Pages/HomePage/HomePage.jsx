import NavBar from '../../components/NavBar/NavBar.js';
import TypeWriter from '../../components/Typewriter/Typewriter.js';
import SkillsPage from '../Skills';
import Certifications from '../Certifications';
import AboutPage from '../AboutPage/AboutPage.jsx';


function HomePage() {
    return (
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
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mahak-juriani" target="_blank" rel="noopener noreferrer" className='icon'>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className='icon'>
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                </div>
            </header>
            <AboutPage />
            <SkillsPage />
            <Certifications />
            {/* <Banner />
            <Progress percentage={30}/> */}
      </div>
    )

}
export default HomePage;