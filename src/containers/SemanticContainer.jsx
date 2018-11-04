import React, { Component } from 'react';
import SemanticButton from '../components/buttons/SemanticButton';

class SemanticContainer extends Component {
  render() {
    return (
      <div className="component-column">
       <h2>Semantic UI</h2>
       <div className="button-container">
          <h4>Buttons</h4>
          <SemanticButton></SemanticButton>
       </div>
      </div>
    );
  }
}

export default SemanticContainer;
