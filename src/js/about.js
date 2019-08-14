import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner } from './banner';
import { ScrollToTopOnMount } from '../index';
import '../css/about.css';

class About extends React.Component {
  render() {
    return (
      <div id="bannerContent">
        <Helmet>
          <title>About | Ambrose Lai</title>
          <meta name="Description" content="Information and ways to contact me." />
        </Helmet>
        <ScrollToTopOnMount />
        <Banner />
        <div id="content">
          <section id="social">
            <h1>Contact</h1>
            <p>
              GitHub: <a href="https://github.com/alairon" title="GitHub">https://github.com/alairon</a>
              <br />
              LinkedIn: <a href="https://www.linkedin.com/in/ambroselai" title="LinkedIn">https://www.linkedin.com/in/ambroselai</a>
              <br />
              Email: <a href="mailto:ambrose.lai@outlook.com" title="Email">ambrose.lai@outlook.com</a>
            </p>
          </section>
          <section id="aboutContent">
            <h1>About Me</h1>
            <p>
              I have a Bachelor of Computing and a Certificate in Business from the University of Guelph.
              I'm an engaged individual with well-rounded experience in web development, front-end, and back-end software development.
              I am currently seeking full-time software development opportunities and have created several projects during my spare time to further develop and refine my skills.
              As for programming, I am most familiar with C, Java, and HTML/CSS, but I enjoy learning new technologies and learned how to use React, JavaScript and C++ over the last year.
            </p>
            <p>
              My passion is in developing and creating solutions that improve or enhances people's experiences.
            </p>
            <p>
              During my time at the University of Guelph, 
              That lead me to becoming an orientation volunteer, a team leader at Project Serve (a one day experimental volunteering event), and a residence hall president.
            </p>
            {/*
            <p>
              Here's what I can also offer:
            </p>
            <ul>
              <li>Sound programming skills, with room to grow.</li>
                <li>Learned C++, SQLite, Regex, JavaScript, and React</li>
              <li>Tested leadership and communication skills </li>
                <li>Committees, team leader, orientation volunteer, judicial, residence hall president</li>
              <li>Analytical</li>
                <li>Focused on Marketing Analysis while studying Comp Sci.</li>
            </ul>
            */}
          </section>
        </div>
      </div>
    );
  }
}

export default About;
