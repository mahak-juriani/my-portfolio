import "./NavBar.css";
import logo from '../../logo.svg';

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navBar">
                <Link to="/" className="nav-item"><a href="">Home</a></Link>
                <Link to="/about" className="nav-item"><a href="">About</a></Link>
                <Link to="/skills" className="nav-item"><a href="">Skills</a></Link>
                <Link to="/certification" className="nav-item"><a href="">Certifications</a></Link> 
                <Link to="/education" className="nav-item"><a href="">Education</a></Link>
                <Link to="projects" className="nav-item"><a href="">Project</a></Link>
                <li className="nav-item"><a href="">Resume</a></li>
            </ul>
        </nav>
    )
}


export default NavBar;