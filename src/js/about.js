import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner } from './banner';
import { ScrollToTopOnMount } from '../index';

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
          <p>
            GitHub: <a href="https://github.com/alairon" title="GitHub">https://github.com/alairon</a>
            <br />
            LinkedIn: <a href="https://www.linkedin.com/in/ambroselai" title="LinkedIn">https://www.linkedin.com/in/ambroselai</a>
            <br />
            Email: <a href="mailto:alairon@outlook.com" title="Email">alairon@outlook.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
