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
                A personal portfolio website leveraging the power of React js. It was created to challenge my raw HTML/CSS knowledge while learning React.
              </p>
              <p>
                Languages: HTML, CSS, JavaScript Extended (JSX)
                <br />
                Frameworks: React, react-router-dom, react-helmet, particles-js
                <br />
                Tools: npm , Git, GitHub Pages
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
                A desktop application built with Electron that allows users to post a custom game status.
              </p>
              <p>
                Languages: HTML, CSS, JavaScript
                <br />
                Frameworks: Electron.js, Bootstrap
                <br />
                Tools: npm, Git, Visual Studio Code
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
                Win32 console application which converts unprocessed General Transit Feed Specification (GTFS) files into a SQLite database.
              </p>
              <p>
                Languages: C++, SQLite
                <br />
                Specification: <a href="https://developers.google.com/transit/gtfs/reference/">GTFS Static</a>
                <br />
                Tools: SQLite, Visual Studio 2017
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
