import React, { Component } from 'react';
import { Progress } from 'antd';

export default class AntProgress extends Component {
  render() {
    return (
      <div className='progress-tile-container'>
        <Progress percent={30}/>
        <Progress percent={50} status="active"/>
        <Progress percent={70} status="exception"/>
      </div>
    );
  }
}

