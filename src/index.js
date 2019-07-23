import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Footer } from './navigation';
import './index.css';


class App extends React.Component {
    render() {
        return (
            <div>
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