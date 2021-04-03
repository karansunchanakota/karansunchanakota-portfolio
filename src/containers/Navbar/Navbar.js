import React from 'react'
import { Nav } from 'react-bootstrap'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar__main">
            <div className="navbar__brand" dest="home">
                <h4>Karan Sunchanakota</h4>
                <span>Software Developer</span>
            </div>
            <nav>
                <div>
                    <div>
                        <a dest="about" className="navbar__items">About</a>
                    </div>
                    <div>
                        <a dest="experience" className="navbar__items">Experience</a>
                    </div>
                    <div>
                        <a dest="projects" className="navbar__items">Projects</a>
                    </div>
                    <div>
                        <a dest="skills" className="navbar__items">Skills</a>
                    </div>
                    <div>
                        <a dest="timeline" className="navbar__items">Timeline</a>
                    </div>
                    <div>
                        <a dest="contact" className="navbar__items">Contact</a>
                    </div>
                    <div>
                        {/* <a dest="home" className="navbar__items" >Resume</a> */}
                        <a href="https://drive.google.com/file/d/1K9c1TVhvRKtegljaxZAmLtemEh2y5zUC/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
