import React from 'react';
import Helmet from 'react-helmet';
import { BannerPortfolio } from './banner';
import '../css/portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="bannerContent">
        <Helmet>
          <title>Portfolio | Ambrose Lai</title>
          <meta name="Description" content="Showcase of the projects I've worked on."></meta>
        </Helmet>
        <BannerPortfolio />
        <div id="content">
          <div className="grid-container">
            <div>F19</div>
            <div>
              <h1>Personal Resume Website</h1>
              <p>
                A personal portfolio website leveraging the power of React js. It was created to challenge my raw HTML/CSS knowledge while learning React.
              </p>
            </div>
          </div>
          <div className="grid-container">
            <div>F20</div>
            <div>
              <h1>SwitchRP</h1>
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
