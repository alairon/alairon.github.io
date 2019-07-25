import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ambrose Lai</title>
          <meta name="Description" content="The page that starts it all."></meta>
        </Helmet>
        <div id="content">
          <h1 id="welcomeHeader">Welcome!</h1>
          <p id="p-body">
            Welcome to my website! My name is Ambrose Lai, and I re-created (yes, re-created) this website because I wanted to develop my HTML/CSS skills and to learn React on top of it.
            <br />
            My previous experience with HTML/CSS heavily depended on the use of the Bootstrap CSS framework.
            So when it came to developing this site, I decided to challenge myself to attempt creating a nice-looking website <strong>without</strong> the assistance of the framework. Truth be told, I am quite pleased with the results so far.
            <br />
            You may experience glitches, unintended effects, grammatical/spelling mistakes, or anything else throughout the site. In the meantime, please pardon the current state this website is in.
            <br />
            <br />
            If you would like to see what this site used to look like, <a href={'./legacy/index.html'}>click here to see my legacy home page.</a>
          </p>
        </div>
      </div>
    );
  }
}