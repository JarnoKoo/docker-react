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
            Olen onnistunut tuotantoympäristö ja selvisin testauksesta!
          </p>
         
          <p> ... sekä kaikkea muuta! Minä olen myös Docker React sovellus!</p>
          
        </header>
      </div>
    );
  }
}

export default App;
