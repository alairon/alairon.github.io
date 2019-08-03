import React from 'react';
import Helmet from 'react-helmet';
import { BannerPortfolio } from './banner';
import { ScrollToTopOnMount } from '../index';
import '../css/portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="bannerContent">
        <Helmet>
          <title>Portfolio | Ambrose Lai</title>
          <meta name="Description" content="Showcase of the projects I've worked on."></meta>
        </Helmet>
        <ScrollToTopOnMount />
        <BannerPortfolio />
        <div id="content">
          <div className="grid-container">
            <div>
              <h1>Personal Resume Website</h1>
              <p>
                A personal portfolio website leveraging the power of React js. 
                While I had some kind of website a couple years ago, I wanted to modernize it while using technologies that I haven't used before. 
                I went with React and decided to write all the CSS myself, without the help of a precompiled CSS library or building upon a template.
              </p>
              <p>
                <strong>Topics</strong>: UI/UX Design, Frontend Development, React
                <br />
                <strong>Languages</strong>: HTML, CSS, JavaScript Extended (JSX)
                <br />
                <strong>Frameworks &amp; Libraries</strong>: React, react-router-dom, react-helmet, particles-js
                <br />
                <strong>Tools</strong>: npm, Visual Studio Code, Git, GitHub Pages
              </p>
              <p>
                <a href="https://github.com/alairon/alairon.github.io">View project on GitHub</a>
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <h1>SwitchRP</h1>
              <p>
                Switch Rich Presence (SwitchRP) is a desktop application built with Electron that allows users to post a custom game status.
                I created this application because I wanted an easy way to show other users what I was doing on Discord (a popular gaming-focused communication tool). 
                The idea came about because the Nintendo Switch does not communicate game activities with Discord.
              </p>
              <p>
                <strong>Topics</strong>: UI/UX Design, Frontend Development, Backend Development, Electron.js
                <br />
                <strong>Languages</strong>: HTML, CSS, JavaScript, JSON
                <br />
                <strong>Frameworks &amp; Libraries</strong>: Electron.js, Bootstrap
                <br />
                <strong>Tools</strong>: npm, Node.js, Git, Visual Studio Code
              </p>
              <p>
                <a href="https://github.com/alairon/SwitchRP">View project on GitHub</a>
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <h1>transitin-sqlite</h1>
              <p>
                Win32 console application which converts consolidates General Transit Feed Specification (GTFS) files into a SQLite database. 
                The program reads the GTFS txt files where it gets parsed before being inserted into a SQL command. 
                During the course of development, I learned write better SQL commands, resulting in insertion times being reduced for a new large data set from over 9 hours down to under 45 minutes.
              </p>
              <p>
                <strong>Topics</strong>: Backend Development, Parsing, SQLite, Console Application
                <br />
                <strong>Languages</strong>: C++, C, SQLite
                <br />
                <strong>Specification</strong>: <a href="https://developers.google.com/transit/gtfs/reference/">GTFS Static</a>
                <br />
                <strong>Tools</strong>: SQLite, Command Prompt (cmd), Visual Studio 2017, Git, GitHub
              </p>
              <p>
                <a href="https://github.com/alairon/transitin-sqlite">View project on GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
