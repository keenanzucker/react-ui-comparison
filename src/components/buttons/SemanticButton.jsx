import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class SemanticButton extends Component {
  render() {
    return (
      <div className='button-tile-container'>
        <div><Button>Default</Button></div>
        <div><Button basic>Basic</Button></div>
        <div><Button primary>Primary</Button></div>
        <div><Button loading>Loading</Button></div>
      </div>
    );
  }
}
