import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class MaterialProgress extends Component {
  render() {
    return (
      <div className='progress-tile-container'>
        <LinearProgress variant="determinate" value={30}/>
        <LinearProgress/>
        <LinearProgress variant="buffer" value={50} valueBuffer={20} />
      </div>
    );
  }
}
