import React from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { BannerResume } from './banner';
import { ScrollToTopOnMount } from '../index';
import '../css/resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div id="bannerContent">
        <Helmet>
            <title>Resume | Ambrose Lai</title>
            <meta name="Description" content="The complete resume."></meta>
        </Helmet>
        <ScrollToTopOnMount />
        <BannerResume />
        <div id="content">
            {/* Download options */}
            <ul id="resumeButtons">
              <li><a href="https://www.dropbox.com/s/3pmz0tlumxvy2em/AmbroseLai_Resume.pdf?dl=1"><button className="pdf" tabIndex="-1"><FontAwesomeIcon icon={faFilePdf} size="lg" />&nbsp;&nbsp;Download&nbsp;as PDF</button></a></li>
              <li><a href="https://www.dropbox.com/s/4me93pws7tc1md5/AmbroseLai_Resume.docx?dl=1"><button className="docx" tabIndex="-1"><FontAwesomeIcon icon={faFileWord} size="lg" />&nbsp;&nbsp;Download&nbsp;as DOCX</button></a></li>
            </ul>
          <div id="resumeContent">
            {/* Basic Contact Section */}
            <section className="resumeSection" id="Contact">
              <h1>Ambrose Lai</h1>
              <p>
                Toronto, ON 
                <span className="screenDivider"> | </span>
                <span className="screenBreak"><br /></span>
                Email:&nbsp;<a href="mailto:ambrose.lai@outlook.com" title="Email">ambrose.lai@outlook.com</a> 
                <span className="screenDivider"> | </span>
                <span className="screenBreak"><br /></span>
                LinkedIn:&nbsp;<a href="https://www.linkedin.com/in/ambroselai" title="LinkedIn">linkedin.com/in/ambroselai</a> 
                <span className="screenDivider"> | </span>
                <span className="screenBreak"><br /></span>
                GitHub:&nbsp;<a href="https://github.com/alairon" title="GitHub">github.com/alairon</a> 
                <span className="screenDivider"> | </span>
                <span className="screenBreak"><br /></span>
                Website:&nbsp;<a href="https://alairon.github.io">alairon.github.io</a> 
              </p>
            </section>
            {/* Skills Section */}
            <section className="resumeSection" id="Skills">
              <h2>Skills</h2>
              <ul>
                <li><span>Programming&nbsp;Languages:&nbsp;</span>C, C++, HTML, CSS, JavaScript, Java, MySQL, SQLite, PHP, Swift</li>
                <li><span>Libraries&nbsp;&amp;&nbsp;Frameworks:&nbsp;</span>React, Node.js, Electron.js, Bootstrap</li>
                <li><span>Tools:&nbsp;</span>Git, GitHub, Windows, Linux, Visual Studio, Visual Studio Code, Adobe Photoshop/Premiere Elements, npm, Axure RP, Visio, Andriod Studio, Bash, WordPress, XCode</li>
              </ul>
            </section>

            {/* Education Section */}
            <section className="resumeSection" id="Education">
              <h2>Education</h2> 
              <ul>
                <li>
                  <span>Bachelor of Computing</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Sept 2013 &ndash; Apr 2018</span>
                  <br />
                  <span className="italics">University of Guelph &mdash; Guelph, ON</span>
                </li>
                <li>
                  <span>Certificate in Business</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Jan 2016 &ndash; Apr 2018</span>
                  <br />
                  <span className="italics">University of Guelph &mdash; Guelph, ON</span>
                </li>
              </ul>
            </section>

            { /* Projects/Coursework Section */}
            <section className="resumeSection" id="Projects">
              <h2>Projects</h2>
              <ul>
                <li>
                  <span>Personal Portfolio Website</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">July 2019 &ndash; Aug 2019</span>
                  <br />
                  <a className="link" href="https://github.com/alairon/alairon.github.io/tree/dev">Personal Project Hosted on GitHub</a>
                  <ul>
                    <li>Implemented a personal website using React (JSX), HTML and CSS from scratch.</li>
                    <li>Utilized npm to acquire and manage React packages.</li>
                    <li>Used Github Pages to host the website.</li>
                  </ul>
                </li>
                <li>
                  <span>SwitchRP</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Dec 2018 &ndash; Jan 2019</span>
                  <br />
                  <a className="link" href="https://github.com/alairon/SwitchRP">Personal Project Hosted on GitHub</a>
                  <ul>
                    <li>Created an application using the Electron.js framework to allow users to share a custom status on Discord.</li>
                    <li>Developed the interface using HTML, CSS, Bootstrap, and JavaScript</li>
                  </ul>
                </li>
                <li>
                  <span>transitin-sqlite</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Aug 2018 &ndash; Sept 2018</span>
                  <br />
                  <a className="link" href="https://github.com/alairon/transitin-sqlite">Personal Project Hosted on GitHub</a>
                  <ul>
                    <li>Developed a C++ program to automate the processing of large files into an SQLite database.</li>
                    <li>Researched and implemented the General Transit Feed Specification (GTFS) into the program.</li>
                    <li>Learned SQL using relevant queries to complete the project.</li>
                  </ul>
                </li>
                <li>
                  <span>Trick or Eat</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Feb 2018 &ndash; Mar 2018</span>
                  <br />
                  <span className="italics">Special Topics in Computing, University of Guelph</span>
                  <ul>
                    <li>Started the development of an iOS app using Swift with a partner.</li>
                    <li>Communicated with the project lead to understand needs and gather user requirements.</li>
                    <li>Researched and implemented the Google Maps API into the app.</li>
                  </ul>
                </li>
                <li>
                  <span>Community Living Cambridge</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Sept 2017 &ndash; Dec 2017</span>
                  <br />
                  <span className="italics">System Analysis and Design in Applications, University of Guelph</span>
                  <ul>
                    <li>Started development on a solution for clients to remind them to take their medications.</li>
                    <li>Interacted with clients to understand organizational needs and gather user requirements.</li>
                    <li>Coordinated with teammates to develop and present paper and wireframe prototypes to the clients.</li>
                    <li>Designed content to conform to the AODA legislation and WCAG 2.0</li>
                  </ul>
                </li>
                <li>
                  <span>Swiftnotes</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Jan 2017 &ndash; Apr 2017</span>
                  <br />
                  <span className="italics">Software Engineering, University of Guelph</span>
                  <ul>
                    <li>Applied knowledge of the agile development cycle to implement new, useable features to an existing open source project.</li>
                    <li>Completed the project with a scrum using Android Studio, Redmine, and Java.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Experience/Volunteerism Section */}
            <section className="resumeSection" id="Experience">
              <h2>Experience</h2>
              <ul>
                <li>
                  <span>Interhall Council Scribe</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Aug 2017 &ndash; Apr 2018</span>
                  <br />
                  <span className="italics">Interhall Council, University of Guelph</span>
                  <ul>
                    <li>Documented and distributed weekly minutes in a tagged PDF for future organizational reference.</li>
                    <li>Recognized for providing consistent and concise mintues in a timely manner; achived a high satisfaction rating from internal evaluations.</li>
                  </ul>
                </li>
                <li>
                  <span>Information Technology Student Advisory Committee (ITSAC)</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Sept 2016 &ndash; Mar 2018</span>
                  <br />
                  <span className="italics">Computing &amp; Communication Services (CCS), University of Guelph</span>
                  <ul>
                    <li>Discussed and communicated with IT staff and university departments about improvements to the university's technological services</li>
                    <li>Interacted with and informed students regarding changes and improvements to IT offerings using layman's terms.</li>
                  </ul>
                </li>
                <li>
                  <span>Undergraduate Office 365 Steering Committee</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">Jan 2017 &ndash; Jun 2017</span>
                  <br />
                  <span className="italics">Office 365 Project, University of Guelph</span>
                  <ul>
                    <li>Communicated with and relayed information from students to provide transparency behind decisions from the university IT department.</li>
                    <li>Created documentation to ensure the migration between Google Drive to Microsoft OneDrive was seamless.</li>
                  </ul>

                </li>
                <li>
                  <span>East Village President</span>
                  <span className="screenBreak"><br /></span>
                  <span className="date">May 2016 &ndash; Apr 2017</span>
                  <br />
                  <span className="italics">Interhall Council, University of Guelph</span>
                  <ul>
                    <li>Represented the residence community to university committees and administration.</li>
                    <li>Collaborated with Residence Assistants to run large-scale residence events.</li>
                    <li>Organized, chaired, and conveyed information to attendees in weekly council meetings.</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Resume;
