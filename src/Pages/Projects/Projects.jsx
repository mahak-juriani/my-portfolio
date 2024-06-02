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
                <Card
                    imgSrc={portfolio}
                    title={"My Portfolio"}
                    description={"This project serves as my personal portfolio, showcasing my skills and projects, all meticulously crafted using the powerful and versatile React framework."}
                    githubLink={"blahblah"}
                />
                <Card
                    imgSrc={spellchecker}
                    title={"Spell Checker"}
                    description={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
                    githubLink={"blahblah"}
                />
                <Card
                    imgSrc={musicplayer}
                    title={"Music Player"}
                    description={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
                    githubLink={"blahblah"}
                />
                <Card
                    imgSrc={calculator}
                    title={"Calculator"}
                    description={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
                    githubLink={"blahblah"}
                />
                <Card
                    imgSrc={blackjack}
                    title={"Black Jack Game"}
                    description={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
                    githubLink={"blahblah"}
                />
                <Card
                    imgSrc={peoplecounter}
                    title={"People Counter"}
                    description={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
                    githubLink={"blahblah"}
                />
            </div>
        </div>
    );
}

export default Projects;