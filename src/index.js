import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Particles } from 'react-particles-js';
import './global.css';
import './index.css';
import './particles.css';
import './nav.css';
import './footer.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navMenu" id="navbar-menu">
                    <li><a className="active" href=".">Home</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Resume</a></li>
                    <li><a href=".">Portfolio</a></li>
                </ul>
            </nav>
        );
    }
}

class Banner extends React.Component {
    render() {
        return (
            <div id="particles-js">
                <p className="particles-txt">
                    PARTICLES BANNER
                </p>
                <Particles
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
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
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

class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <p id="p-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id venenatis nisl. Duis facilisis purus a velit commodo, quis lobortis tortor laoreet. Nullam congue fermentum imperdiet. Nullam justo turpis, consectetur ut est sit amet, facilisis interdum eros. Aliquam erat volutpat. Cras nunc nibh, mattis vel metus quis, rhoncus consectetur lorem. Vestibulum in purus vel arcu faucibus pharetra. Duis quis dictum neque, nec gravida diam. Vestibulum tincidunt, eros eget pellentesque consectetur, libero ex interdum urna, ut feugiat augue velit ac metus. Duis in nunc vel nibh ullamcorper varius. Quisque blandit sed enim a rutrum. Donec ullamcorper eros ac sapien malesuada, at rutrum tortor cursus. Nullam ipsum ligula, pulvinar a enim sit amet, efficitur accumsan libero. Ut dignissim felis ut sem rutrum euismod. Nunc in turpis tortor. Mauris nisl urna, euismod sit amet gravida vel, convallis vel ipsum. Nam semper lacus sed ultrices pellentesque. Donec ac massa et nibh convallis maximus in euismod purus. Donec ut euismod mi, ut lobortis nunc. Donec cursus risus quis orci rutrum, et dignissim ante faucibus. Duis nec sodales leo. Donec sodales ornare risus in convallis. Nunc auctor orci id pellentesque consectetur.
Suspendisse eu sagittis sapien, sed mollis risus. Vestibulum sed erat quis elit euismod sagittis. Vestibulum justo ante, vestibulum et efficitur a, placerat quis justo. Curabitur dapibus consequat luctus. Fusce pellentesque, erat vulputate tempor gravida, tortor ex varius urna, ultrices elementum mi felis a orci. Nam imperdiet, enim sed rutrum pulvinar, neque nisi tempor dolor, vitae bibendum leo velit ut odio. Pellentesque accumsan eros in quam placerat accumsan vel vitae nunc. Sed nulla elit, commodo sodales purus rhoncus, dapibus scelerisque purus. Pellentesque gravida lectus ac risus lobortis malesuada. Fusce a nisl id lectus aliquet mattis varius sit amet urna. Phasellus mattis, enim ornare blandit rhoncus, quam dolor gravida dui, sit amet facilisis dui purus ut augue. Aenean nec erat eros. Nam tristique diam ut neque iaculis, quis semper nulla auctor. Aenean placerat mi eu cursus aliquam. Morbi sodales nulla tristique, aliquet urna ac, venenatis justo. Duis et nisi ac ex imperdiet iaculis nec ut justo. Duis in mi placerat, venenatis erat quis, suscipit urna. Sed a velit ut purus semper convallis quis eget diam. Suspendisse tortor tellus, posuere non semper ut, tempus nec lorem. Donec viverra velit lacinia purus euismod, in feugiat ex mattis. Nam non quam non quam gravida varius. Pellentesque vitae luctus ligula.
Donec cursus, tellus gravida dignissim bibendum, nisl purus auctor est, nec facilisis massa nisi a ipsum. Duis ullamcorper metus id mi volutpat, at vestibulum metus malesuada. Nullam tortor nulla, lacinia eu imperdiet non, vulputate nec risus. Etiam et erat non magna pretium condimentum. Aenean egestas lorem ut tortor mollis, id cursus nunc auctor. Fusce efficitur, risus sed eleifend fringilla, erat mi auctor arcu, sed consequat leo ligula eu lorem. Ut arcu turpis, iaculis vel neque et, varius faucibus mi. In tortor felis, pellentesque sit amet quam sed, auctor porttitor enim.
                </p>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
        <footer className="footer">
            <h1>FOOTER</h1>
            <br />
            <ul id="social-links">
                <li><a href="https://github.com/alairon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                <li><a href="https://www.linkedin.com/in/ambroselai"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></li>
                <li><a href="."><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
            </ul>
            <br />
        </footer>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Content />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);