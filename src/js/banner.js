import React from 'react';
import { Particles } from 'react-particles-js';
import '../css/particles.css';

export class BannerPortfolio extends React.Component {
  render() {
    return (
      <div className="banner" id="portfolioBanner">
        <p className="bannerText">
          Portfolio
        </p>
        <Particles
          width={"100%"}
          height={"200px"}
          params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.2966312312601217,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          }
        }} />
      </div>
    );
  }
}

export class BannerResume extends React.Component {
  render () {
    return (
      <div className="banner" id="resumeBanner">
        <p className="bannerText">
          Resume
        </p>
        <Particles
          width={"100%"}
          height={"200px"}
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "size_min": 0.3,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
          "retina_detect": true
        }} />
      </div>
    );
  }
}

export class Banner extends React.Component {
  render () {
    return (
    <div className="banner" id="aboutBanner">
      <p className="bannerText">
        About
      </p>
      <Particles
        width={"100%"}
        height={"200px"}
        params={{
          "particles": {
            "number": {
              "value": 20,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#bba886"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000"
              },
              "polygon": {
                "nb_sides": 6
              }
            },
            "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 160,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 40,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "enable": true,
              "speed": 8,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "retina_detect": true
        }} />
      </div>      
    );
  }
}