import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Footer } from './js/navigation';
import './css/index.css';

export class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
