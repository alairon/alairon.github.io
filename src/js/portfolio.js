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
              <h1>Phantasy Star Online 2 New Genesis Interactive Map</h1>
              <p>
                In 2021, Sega released Phantasy Star Online 2 New Genesis (PSO2NGS) &mdash; an open-world MMO that retained most of the action gameplay from the original PSO2.
                I have tried multiple open-world/sandbox MMOs in the past such as <a href="https://www.somethinglovely.net/bdo/" rel="noreferrer" target="_blank">Famme's Black Desert Online map</a>. That got me the idea of creating a similar product, but for PSO2NGS.
                <br/>
                From my experience with looking up information while playing the game, I typically used my phone to look up the information I needed while the game was running on the main screen. 
                This was what inspired me to create the map that not only performed well on both desktop and mobile devices, but was also easy to use on both device types as well.
                To make the map look more appealing and authentic, I did my best to mimic the map's interface to what's currently present in PSO2NGS.
                <br />
                This project is not associated with Sega, the publishers of Phantasy Star Online 2 New Genesis.
              </p>
              <p>
                <strong>Topics &amp; Concepts</strong>: Web Development, Frontend Development, Visual Design, Mobile Design, Creating and parsing JSON files
                <br />
                <strong>Languages</strong>: JavaScript (TypeScript)
                <br />
                <strong>Frameworks &amp; Libraries</strong>: Leaflet.js, Next.js, Chakra UI
                <br />
                <strong>Specifications</strong>: JSON, GeoJSON
                <br />
                <strong>Tools</strong>: npm, Visual Studio Code, Git, GitHub, Vercel
              </p>
              <p>
                <a href="https://ngs-world-map.vercel.app/en/map">Live Demo</a>
              </p>
              <p>
                <a href="https://github.com/alairon/ngs-world-map">View project on GitHub (Under an alias)</a>
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <h1>Xiera Bot</h1>
              <p>
                During the pandemic, I played a game called Phantasy Star Online 2. 
                While it was a great game, both the in-game alliance I was in and myself eventually became frustrated at how inconvenient it was to find information about the game's scheduled urgent quests. 
                This led me to the creation of the Xiera Discord bot, named after the NPC of the same name.
                <br />
                I created the bot with TypeScript and handled searches through the Fuse.js library. I chose the Fuse library because of its fuzzy search capabilites, which allowed leniency in case users misspelt a search term.
                An early build of the bot used data from a public Google Calendar through the iCalendar standard, but it got replaced with a JSON when the game's developers opted to use that.
                <br />
                This project is not associated with Sega, the publishers of Phantasy Star Online 2.
              </p>
              <p>
                <strong>Topics &amp; Concepts</strong>: Discord, Node.js, Object Oriented Programming, Parsing user input and JSON/iCalendar files
                <br />
                <strong>Languages</strong>: JavaScript (TypeScript)
                <br />
                <strong>Frameworks &amp; Libraries</strong>: Discord.js, Fuse.js
                <br />
                <strong>Specifications</strong>: iCalendar, JSON
                <br />
                <strong>Tools</strong>: npm, Visual Studio Code, Git, Heroku
              </p>
              <p>
                <a href="https://github.com/alairon/XieraBot">View project on GitHub</a>
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <h1>WS Crafter</h1>
              <p>
                The Weiss Schwartz Crafter was my take on a deck building and card database web app based on the card game of the same name.
                Originally, the database was using MySQL.
                However, to reduce (mostly eliminate) costs associated with web hosting, I made the switch to host the project on Heroku and redesigned the database to use Postgres.
                As a disclaimer, this project is not associated with Bushiroad Inc., the creators of the game.
              </p>
              <p>
                <strong>Topics</strong>: Full Stack Web Development, SQL Databases, React, Node.js, Express.js, UI/UX Design
                <br />
                <strong>Languages</strong>: MySQL, Postgres, JavaScript
                <br />
                <strong>Frameworks &amp; Libraries</strong>: React, Express.js
                <br />
                <strong>Tools</strong>: npm, Visual Studio Code, Git, Heroku
              </p>
              <p>
                <a href="https://github.com/alairon/ws-crafter-backend">View project on GitHub</a>
                <br />
                <a href="https://ws-crafter-backend.herokuapp.com">View deployment on Heroku</a>
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <h1>Personal Resume Website</h1>
              <p>
                A personal portfolio website leveraging the power of React js. 
                While I had some kind of website a couple years ago, I wanted to modernize it while using technologies that I haven't used before. 
                I went with React and decided to write all the CSS myself, without the help of a precompiled CSS library or building upon a template.
                I also kept in mind of accessibility and good UX practices while developing the site;
                  from the colour schemes being WCAG 2.1 AAA compliant, ensuring logical tab flow throughout the site, to the ability to print a clean page directly from the resume page (Ctrl/&#8984; + P).
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
                Switch Rich Presence (SwitchRP) is a desktop application built with the Electron framework that allows users to post and switch between custom game statuses. 
                I created this application because I wanted an easy way to show other users what I was doing on Discord (a popular gaming-focused communication tool).
                The idea came about because the Nintendo Switch does not have the capability to communicate game activities with users on Discord.
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
