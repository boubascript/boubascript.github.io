import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">Bouba</h1>
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
          <p> In the meantime: </p>
          <p>
            <a 
                href="/boubacar_diallo_resume.pdf"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              &nbsp;
              <a 
                href="https://github.com/dialbouba"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              &nbsp;
              <a 
                href="https://www.linkedin.com/in/boubacard/"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
        </header>
      </div>
    );
  }
}

export default App;
