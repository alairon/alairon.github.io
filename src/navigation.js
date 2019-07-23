import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './navigation.css';
import './footer.css';

import Home from './home';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';

export function Navbar () {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navMenu" id="navbar-menu">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />                
            </div>
        </Router>
    );
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