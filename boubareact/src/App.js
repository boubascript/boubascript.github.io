import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title-text"> Boubacar Diallo</h1>
          <h1 className="header-text">Software Developer <span className="divider">|</span> ??? <span className="divider">|</span>  Working on things ...</h1>
        </header>
          <div className="App-body align-left">
            <p> CS Major interested in gaining experience with every part of the stack.</p>
            <p>Currently editing
              <a href="https://www.github.com/boubascript/boubascript.github.io"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer">
                    src
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
                href="/boubacar_diallo_resume_public.pdf"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title="My Resume" className="fa fa-file-text fa-2x" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a 
                href="https://github.com/boubascript"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title ="My Code" className="fa fa-github-alt fa-2x" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a 
                href="https://www.linkedin.com/in/boubacard/"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i title = "My Network" className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
            </p>
          </div>
      </div>
    );
  }
}

export default App;
