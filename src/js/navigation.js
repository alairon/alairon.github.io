import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/navbar.css';
import '../css/footer.css';

import Home from './home';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import NoMatch from './404';

export class Navbar extends React.Component {
    render() {
     return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navMenu" id="navbar-menu">
                        <li><NavLink to="/index" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />                
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
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
                    <li><a href="mailto:alairon@outlook.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                </ul>
                <br />
            </footer>
        );
    }
}