import React, { Component } from 'react';
import { Button } from 'antd';

export default class AntButton extends Component {
  render() {
    return (
      <div className='button-tile-container'>
        <Button>Default</Button>
        <Button type='primary'> Primary</Button>
        <Button type='danger'> Danger</Button>
        <Button loading> Loading</Button>
      </div>
    );
  }
}

