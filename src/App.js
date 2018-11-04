import React, { Component } from 'react';
import './App.css';
import AntContainer from './containers/AntContainer';
import MaterialContainer from './containers/MaterialContainer';
import SemanticContainer from './containers/SemanticContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className=''>
          <h1 className=''>Welcome to the React Component Library Comparison Tool</h1>
        </header>
        <div className="column-container">      
          <AntContainer/>
          <MaterialContainer/>
          <SemanticContainer/>
        </div>  
      </div>
    );
  }
}

export default App;
