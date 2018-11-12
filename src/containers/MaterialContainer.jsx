import React, { Component } from 'react';
import MaterialButton from '../components/buttons/MaterialButton';
import MaterialProgress from '../components/progress/MaterialProgress';

class MaterialContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2>Material Design</h2>
       <div className="component-container">
         <h4>Buttons</h4>
        <MaterialButton></MaterialButton>
       </div>
       <div className="component-container">
         <h4>Progress</h4>
        <MaterialProgress></MaterialProgress>
       </div>
      </div>
    );
  }
}

export default MaterialContainer;
