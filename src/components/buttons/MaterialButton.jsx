import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class MaterialButton extends Component {
  render() {
    return (
      <div className='button-tile-container'>
        <Button color='primary'>Text</Button>
        <Button color='primary' variant='outlined'>Outline</Button>
        <Button color='primary' variant='contained'>Contained</Button>
        <Button color='primary' variant='fab'>FAB</Button>
      </div>
    );
  }
}
