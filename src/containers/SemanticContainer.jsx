import React, { Component } from 'react';
import SemanticButton from '../components/buttons/SemanticButton';
import SemanticProgress from '../components/progress/SemanticProgress';
import SemanticCard from '../components/cards/SemanticCard';

class SemanticContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2>Semantic UI</h2>
       <div className="component-container">
          <h4>Buttons</h4>
          <SemanticButton></SemanticButton>
       </div>
       <div className="component-container">
          <h4>Progress</h4>
          <SemanticProgress></SemanticProgress>
       </div>
       <div className="component-container">
          <h4>Cards</h4>
          <SemanticCard></SemanticCard>
       </div>
      </div>
    );
  }
}

export default SemanticContainer;
