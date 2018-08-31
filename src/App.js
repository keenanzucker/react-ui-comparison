import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React Component Library Comparison Tool</h1>
        </header>
        <Buttons/>
      </div>
    );
  }
}

export default App;
