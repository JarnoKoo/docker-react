import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Muokkaa <code>src/App.js</code> ja tallenna.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opi ymmärtämään Reactia!
          </a>
          <p> ... sekä kaikkea muuta! Minä olen muutettu Docker React sovellus!</p>
          
        </header>
      </div>
    );
  }
}

export default App;
