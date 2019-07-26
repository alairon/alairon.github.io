import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/navbar.css';
import '../css/footer.css';

// Navigation items
import Home from './home';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import NoMatch from './404';

// Navbar
export class Navbar extends React.Component {
  render() {
    return (
      <Router>
          <nav>
            <ul className="navMenu" id="navbar-menu">
              <li><NavLink to="/index" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/index"></Redirect>} />
            <Route path="/index" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}

// Footer
export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul id="social-links">
          <li><a href="https://github.com/alairon" title="Github"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
          <li><a href="https://www.linkedin.com/in/ambroselai" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a></li>
          <li><a href="mailto:alairon@outlook.com" title="email"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></li>
        </ul>
      </footer>
    );
  }
}
