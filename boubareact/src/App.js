import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Currently editing &nbsp;
              <a href="https://www.github.com/dialbouba"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer">
                  <code>src</code>
              </a>.
            </p>
            <p>
              Be back soon.
            </p>
          </div>
          <p> In the meantime: &nbsp;
            <a 
              href="/boubacar_diallo_resume.pdf"
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
