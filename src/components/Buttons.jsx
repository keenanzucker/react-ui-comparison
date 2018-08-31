import React, { Component } from 'react';
import { Button as ButtonAnt } from 'antd';
import { Button as ButtonBootstrap } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

class Buttons extends Component {
  render() {
    return (
      <div>
        Buttons Comparisons
        <ButtonAnt>Ant Button</ButtonAnt>
        <ButtonBootstrap>Bootstrap Button</ButtonBootstrap>
        <Button>Test</Button>
      </div>
    );
  }
}

export default Buttons;
