import React, { Component } from 'react';
import AntButton from '../components/buttons/AntButton';

class AntContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2> Ant Design</h2>
       <div className="button-container">
         <h4>Buttons</h4>
         <AntButton></AntButton>
       </div>
      </div>
    );
  }
}

export default AntContainer;
