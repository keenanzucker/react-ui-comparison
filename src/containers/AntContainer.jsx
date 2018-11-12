import React, { Component } from 'react';
import AntButton from '../components/buttons/AntButton';
import AntProgress from '../components/progress/AntProgress';

class AntContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2> Ant Design</h2>
       <div className="component-container">
         <h4>Buttons</h4>
         <AntButton></AntButton>
       </div>
       <div className="component-container">
         <h4>Progress</h4>
         <AntProgress></AntProgress>
       </div>
      </div>
    );
  }
}

export default AntContainer;
