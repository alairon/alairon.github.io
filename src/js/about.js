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
          <section id="aboutContent">
            <h1>About Me</h1>
            <p>
              I have a Bachelor of Computing and a Certificate in Business from the University of Guelph.
              I'm an engaged individual with well-rounded experience in web development, front-end, and back-end software development.
              I am currently seeking full-time software development opportunities and have created several projects during my spare time to develop and refine my skills.
              As for programming, I am most familiar with C, Java, and HTML/CSS, but I enjoy learning new technologies and learned how to use React, JavaScript, and C++ over the last year.
            </p>
            <p>
              My passion is in developing and creating solutions that improve or enhances people's experiences.
              Some of my hobbies outside of developing includes casually analyzing designs, walking down the harbourfront, playing video games, and just hanging out with friends.
              One of my recent projects revolved around the difficulty in creating custom status messages on Discord, a popular gaming-focused chat platform.
              This caused me to want to develop Switch Rich Presence (SwitchRP), which I learned how to use the Electron.js framework to create a desktop applicaiton that allows users to easily switch between games when playing on platforms that doesn't support Discord (e.g. Nintendo Switch).
            </p>
            <p>
              While studying computer science, I was interested in expanding my skill set beyond the keyboard and monitor.
              That lead me to become involved with the univeristy &ndash; becoming an orientation volunteer, a team leader at Project Serve (a one-day experimental volunteering event), a residence hall president and becoming a boardroom secretary (scribe).
              I also took part in sitting at several university committees, such as the IT Student Advisory Committee (ITSAC) and the Undergraduate Office 365 Standing Committee, where I learned how to communicate with both students and IT staff regarding what their needs and requirements.
            </p>
          </section>

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
        </div>
      </div>
    );
  }
}

export default About;
