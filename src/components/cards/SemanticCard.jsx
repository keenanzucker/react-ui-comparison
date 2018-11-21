import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

export default class SemanticCard extends Component {
  render() {
    return (
      <div className='button-tile-container'>
        <Card>Default</Card>
      </div>
    );
  }
}
