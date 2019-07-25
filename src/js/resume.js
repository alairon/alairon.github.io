import React from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { BannerResume } from './banner';
import '../css/resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div id="bannerContent">
        <Helmet>
            <title>Resume | Ambrose Lai</title>
        </Helmet>
        <BannerResume />
        <div id="content">

          {/* Download options */}
          <ul id="resumeButtons">
            <li><a className="pdf" href="."><FontAwesomeIcon icon={faFilePdf} size="lg" />&nbsp;&nbsp;Download as PDF</a></li>
            <li><a className="docx" href="."><FontAwesomeIcon icon={faFileWord} size="lg" />&nbsp;&nbsp;Download as DOCX</a></li>
          </ul>
          <hr />

          {/* Skills Section */}
          <section className="resumeSection" id="Skills">
            <h1>Skills</h1>
            <ul>
              <li><span>Programming languages:&nbsp;</span>C, C++, HTML, CSS, JavaScript, Java, MySQL, SQLite, PHP, Swift</li>
              <li><span>Libraries&nbsp;&amp;&nbsp;Frameworks:&nbsp;</span>React, Node.js, Electron.js, Bootstrap</li>
              <li><span>Tools:&nbsp;</span>Git, Github, Windows, Linux, Visual Studio, Visual Studio Code, Adobe Photoshop/Premiere Elements, npm, Axure RP, Visio, Andriod Studio, Bash, WordPress, XCode</li>
            </ul>
          </section>

          {/* Education Section */}
          <section className="resumeSection" id="Education">
            <h1>Education</h1> 
            <ul>
              <li>
                <span>Bachelor of Computing</span>
                <span className="date">Sept 2013 &ndash; Apr 2018</span>
                <br />
                <span className="italics">University of Guelph &mdash; Guelph, ON</span>
              </li>
              <li>
                <span>Certificate in Business</span>
                <span className="date">Jan 2016 &ndash; Apr 2018</span>
                <br />
                <span className="italics">University of Guelph &mdash; Guelph, ON</span>
              </li>
            </ul>
          </section>

          { /* Projects/Coursework Section */}
          <section className="resumeSection" id="Projects">
            <h1>Projects &amp; Coursework</h1>
            <ul>
              <li>
                <span>Personal Portfolio Website</span>
                <span className="date">July 2019</span>
                <ul>
                  <li>Implemented a personal website using React, HTML and CSS from scratch with JSX.</li>
                  <li>Utilized npm to acquire and manage React packages.</li>
                  <li>Used Github Pages to host the website.</li>
                </ul>
              </li>
              <li>
                <span>SwitchRP</span>
                <span className="date">Dec 2018 &ndash; Jan 2019</span>
                  <ul>
                    <li>Created an application using the Electron.js framework to allow users to share a custom status on Discord.</li>
                    <li>Developed the interface using HTML, CSS, Bootstrap, and JavaScript</li>
                  </ul>
              </li>
              <li>
                <span>transitin-lite</span>
                <span className="date">Aug 2018 &ndash; Sept 2018</span>
                <ul>
                  <li>Developed a C++ program to automate the processing of large files into an SQLite database.</li>
                  <li>Researched and implemented the General Transit Feed Specification (GTFS) into the program.</li>
                  <li>Learned SQL using relevant queries to complete the project.</li>
                </ul>
              </li>
              <li>
                <span>Trick or Eat</span>
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
            <h1>Experience &amp; Volunteerism</h1>
            <ul>
              <li>
                <span>Interhall Council Scribe</span>
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
                <span className="date">May 2016 &ndash; Apr 2017</span>
                <br />
                <ul>
                  <li>Represented the residence community to university committees and administration.</li>
                  <li>Collaborated with Residence Assistants to run large-scale residence events.</li>
                  <li>Organized, chaired, and converyed information to attendees in weekly council meetings.</li>
                </ul>
              </li>
              <li>
                <span>Student Rights &amp; Responsibilities Committee</span>
                <span className="date">Oct 2016 &ndash; Apr 2017</span>
                <br />
                <ul>
                  <li>Reviewed and revised existing university policies.</li>
                  <li>Drafted the university's first sexual assault policy.</li>
                </ul>
              </li>
              <li>
                <span>University Judicial Committee</span>
                <span className="date">Oct 2016 &ndash; Apr 2017</span>
                <br />
                <ul>
                  <li>Utilized procedural fairness to render verdicts in Non-Academic Misconduct cases.</li>
                </ul>
              </li>
              <li>
                <span>Orientation Week</span>
                <span className="date">Multiple Years (Aug/Sept) &ndash; 2014, 2016, 2017</span>
                <ul>
                  <li>Managed ticket sales.</li>
                  <li>Utlized NATO radio signals to communicate with other teams.</li>
                </ul>
              </li>
              <li>
                <span>Project Serve</span>
                <span className="date">Multiple Years (Sept) &ndash; 2013, 2014, 2015, 2017</span>
                <br />
                <ul>
                  <li>Assisted organizations around the community</li>
                  <li>Managed large crowds of participants</li>
                  <li>Ensured safety of participants during transportation between event locations.</li>
                  <li>Assisted in event setup and takedown.</li>
                </ul>
              </li>

            </ul>
          </section>
          <section className="resumeSection" id="Awards">
            <h1>Awards &amp; Achievements</h1>
            <ul>
              <li>
                <span>Improve Life Challenge (3<sup>rd</sup> Place)</span>
                <span className="date">Jan 2018</span>
                <br />
                <ul>
                  <li>Planned and presented a potential solution to a global issue to a panel of judges from Microsoft, Rightmesh, University of Waterloo, and University of Guelph</li>
                </ul>
              </li>
              <li>
                <span>National Residence Hall Honorary (NRHH Bronze Pin)</span>
                <span className="date">Apr 2018</span>
                <br />
                <ul>
                  <li>Awarded to individuals who have enriched residence life.</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
        <br />
      </div>
    );
  }
}

export default Resume;
