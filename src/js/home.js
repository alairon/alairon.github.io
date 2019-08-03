import React from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount } from '../index';
import '../css/home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ambrose Lai</title>
          <meta name="Description" content="The page that starts it all."></meta>
        </Helmet>
        <ScrollToTopOnMount />
        <div className="home" id="content">
          <h1 id="welcomeHeader">Welcome!</h1>
          <p>
            Welcome to my website! My name is Ambrose Lai, and I re-created (yes, re-created) this website because I wanted to refine my HTML/CSS skills while learning React.
            <br />
            My previous experience with HTML/CSS heavily relied on the use of the Bootstrap CSS framework.
            So when it came to developing this site, I decided to challenge myself with three restrictions:
          </p>
          <ol>
            <li>All CSS must be written from scratch &mdash; Bootstrap isn't allowed!</li>
            <li>The site cannot be built upon an existing template</li>
            <li>The site must be built with React (using JSX syntax)</li>
          </ol>
          <br />
          <p>
            If you would like to see what this site used to look like without any content, <a href={'./legacy/index.html'}>click here to see my legacy home page.</a>
          </p>
        </div>
      </div>
    );
  }
}