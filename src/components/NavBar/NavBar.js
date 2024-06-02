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
                <li className="nav-item"><a href="">Skills</a></li>
                <li className="nav-item"><a href="">Certifications</a></li> 
                <Link to="/education" className="nav-item"><a href="">Education</a></Link>
                <li className="nav-item"><a href="">Project</a></li>
                <li className="nav-item"><a href="">Resume</a></li>
            </ul>
        </nav>
    )
}


export default NavBar;