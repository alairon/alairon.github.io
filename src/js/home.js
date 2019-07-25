import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ambrose Lai</title>
        </Helmet>
        <div id="content">
          <h1 id="welcomeHeader">Welcome!</h1>
          <p id="p-body">
            Welcome to my website! My name is Ambrose Lai, and I re-created this website because I wanted to develop my Please pardon the current state this website is in. 
            <br />
            In the past, most of my websites relied on premade templates or Bootstrap for CSS. I wanted to challenge myself to create my own CSS ... while learning the basics of React.js at the same time.
            <br />
            If you would like to see what this site used to look like, <a href={'./legacy/index.html'}>click here to see my legacy home page.</a>
          </p>
        </div>
      </div>
    );
  }
}