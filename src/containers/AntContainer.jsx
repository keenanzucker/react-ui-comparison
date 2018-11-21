import React, { Component } from 'react';
import AntButton from '../components/buttons/AntButton';
import AntProgress from '../components/progress/AntProgress';
import AntCard from '../components/cards/AntCard';

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
       <div className="component-container">
         <h4>Cards</h4>
         <AntCard></AntCard>
       </div>
      </div>
    );
  }
}

export default AntContainer;
