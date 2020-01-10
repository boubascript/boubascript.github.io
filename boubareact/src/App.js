import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="loading-text">Working on it ...</h1>
          <h1 className="App-logo">Bouba</h1>
        </header>
          <div className="App-body">
            <p>Currently editing
              <a href="https://www.github.com/dialbouba/dialbouba.github.io"
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
          <div className="App-body">
          <p> In the meantime: </p>
          <p>
            <a 
                href="/boubacar_diallo_resume.pdf"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title="My Resume" className="fa fa-file-text fa-3x" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a 
                href="https://github.com/dialbouba"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title ="My Code" className="fa fa-github-alt fa-3x" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a 
                href="https://www.linkedin.com/in/boubacard/"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title = "My Network" className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
              </a>
            </p>
          </div>
      </div>
    );
  }
}

export default App;
