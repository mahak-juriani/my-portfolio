import "./NavBar.css";
import logo from '../../logo.svg';

import { Link } from 'react-router-dom';
import { useState } from "react";


function NavBar() {
    const [activeLink, setActiveLink] = useState("");
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navBar">
                <Link onClick={()=>{setActiveLink("home")}} to="/" className={activeLink=="home"?"nav-item active":"nav-item"}><a href="">Home</a></Link>

                <Link onClick={()=>{setActiveLink("about")}} to="/about" className={activeLink=="about"?"nav-item active":"nav-item"}><a href="">About</a></Link>

                <Link onClick={()=>{setActiveLink("skills")}} to="/skills" className={activeLink=="skills"?"nav-item active":"nav-item"}><a href="">Skills</a></Link>

                <Link onClick={()=>{setActiveLink("certification")}} to="/certification" className={activeLink=="certification"?"nav-item active":"nav-item"}><a href="">Certifications</a></Link>

                <Link onClick={()=>{setActiveLink("education")}} to="/education" className={activeLink=="education"?"nav-item active":"nav-item"}><a href="">Education</a></Link>

                <Link onClick={()=>{setActiveLink("projects")}} to="projects" className={activeLink=="projects"?"nav-item active":"nav-item"}><a href="">Project</a></Link>

                <li className="nav-item"><a href="https://drive.google.com/file/d/1VellZNyaWeqCpq5s5qLAl8jdpz7XqmkM/view" target="_blank">Resume</a></li>
            </ul>
        </nav>
    )
}


export default NavBar;