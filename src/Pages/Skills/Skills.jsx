import './Skills.css';
import java from './images/java.png';
import js from './images/js.png';
import python from './images/python.png';
import Mysql from './images/mysql.png';
import html from './images/html.png';
import css from './images/css.png';
import cli from './images/command-line.png';
import aws from './images/aws.png'
import logo from '../../logo.svg';
import git from './images/git.png';

function Skills(){
    return(
        <div className='skills-conatainer'>
            <h1>Skills</h1>
            <h2>I love to learn new things and experiment with new technologies.<br />These are some of the major languages, technologies, tools and platforms I have worked with:</h2>
            <div className='skills'>
                <br/>
                <h3>Languages and Databases</h3>
                <div className="skill-icon-container">
                    <img src={java} alt='java-logo' className='img' />
                    <img src={js} alt="js-logo" className='img' />
                    <img src={python} alt="python-logo" className='img' />
                    <img src={Mysql} alt="MySQL-logo" className='img' />
                    <img src={html} alt="html-logo" className="img" />
                    <img src={css} alt="css-logo" className="img" />
                    <img src={cli} alt="cli-logo" className="img" />
                </div>
                <br/>
                <h3>Framework and Technology</h3>
                <div className="skill-icon-container">
                    <img src={logo} alt="react-logo" className='img-react'/>
                </div>
                <h3>Tools and Platforms</h3>
                <div className="skill-icon-container">
                    <img src={git} alt="git-logo" className="img-git" />
                    <img src={aws} alt="aws-logo" className="img" />
                </div>
            </div>
        </div>
        
    );
}

export default Skills;