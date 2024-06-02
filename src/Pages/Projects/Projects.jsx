import './Projects.css';
import portfolio from './images/portfolio.png';
import spellchecker from './images/Screenshot from 2024-06-02 23-25-39.png';
import peoplecounter from './images/peoplecounter.png';
import blackjack from './images/Blackjack.png';
import calculator from './images/Calculator.png';
import musicplayer from './images/musicplayer.png';

import Card from '../../components/Card'
function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className="card-container">
                <div className="item">
                <Card
                    imgSrc={portfolio}
                    title={"My Portfolio"}
                    description={"This project serves as my personal portfolio, showcasing my skills and projects, all meticulously crafted using the powerful and versatile React framework."}
                    githubLink={"blahblah"}
                /> 
                </div>
            
                <div className="item">
                <Card
                    imgSrc={spellchecker}
                    title={"Spell Checker"}
                    description={"This project is a Spell Checker application developed in Python, designed to identify and correct spelling errors in text efficiently."}
                    githubLink={"https://github.com/mahak-juriani/Spell-Checker"}
                />
                </div>
                <div className="item">

                <Card
                    imgSrc={musicplayer}
                    title={"Music Player"}
                    description={"This project is a Music Player application built using JavaScript, HTML, and CSS, offering a sleek interface and seamless audio playback experience."}
                    githubLink={"https://github.com/mahak-juriani/Music-player"}
                />
                </div>
                <div className="item">

                <Card
                    imgSrc={calculator}
                    title={"Calculator"}
                    description={"This project is a Calculator application created using JavaScript, HTML, and CSS, providing a user-friendly interface for basic arithmetic operations."}
                    githubLink={"https://github.com/mahak-juriani/js-basics/tree/main/Calculator"}
                />
                </div>
                <div className="item">

                <Card
                    imgSrc={blackjack}
                    title={"Black Jack Game"}
                    description={"This project is a Black Jack game developed using JavaScript, HTML, and CSS, delivering an interactive and engaging card game experience."}
                    githubLink={"https://github.com/mahak-juriani/js-basics/tree/main/Black%20Jack"}
                />
                </div>
                <div className="item">

                <Card
                    imgSrc={peoplecounter}
                    title={"People Counter"}
                    description={"This project is a People Counter application built with JavaScript, HTML, and CSS, designed to efficiently track and display the number of people entering and exiting a space."}
                    githubLink={"https://github.com/mahak-juriani/js-basics/tree/main/People%20Counter"}
                />
                </div>
            </div>
        </div>
    );
}

export default Projects;