import React, { Component } from 'react';
import './notFound.css';

class NotFound extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Oops! You went little too far..</p>
                    <p>Get back&nbsp;
                    <a className="link" href="/" rel="noopener noreferrer">Home</a> now!
                    </p>
                </header>
            </div >
        );
    }
}

export default NotFound;