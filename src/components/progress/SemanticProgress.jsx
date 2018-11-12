import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react'

export default class SemanticProgress extends Component {
  render() {
    return (
      <div className='progress-tile-container'>
        <Progress percent={30}/>
        <Progress percent={50} indicating/>
        <Progress percent={70} progress='percent'/>
      </div>
    );
  }
}
