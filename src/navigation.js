import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './nav.css';
import './footer.css';

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navMenu" id="navbar-menu">
                    <li><a className="active" href=".">Home</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Resume</a></li>
                    <li><a href=".">Portfolio</a></li>
                </ul>
            </nav>
        );
    }
}

export class Footer extends React.Component {
    render() {
        return (
        <footer className="footer">
            <h1>FOOTER</h1>
            <br />
            <ul id="social-links">
                <li><a href="https://github.com/alairon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                <li><a href="https://www.linkedin.com/in/ambroselai"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></li>
                <li><a href="."><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
            </ul>
            <br />
        </footer>
        );
    }
}