import React, { Component } from 'react';
import MaterialButton from '../components/buttons/MaterialButton';

class MaterialContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2>Material Design</h2>
       <div className="button-container">
         <h4>Buttons</h4>
        <MaterialButton></MaterialButton>
       </div>
      </div>
    );
  }
}

export default MaterialContainer;
