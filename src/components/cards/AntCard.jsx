import React, { Component } from 'react';
import { Card } from 'antd';

export default class AntCard extends Component {
  render() {
    return (
      <div className='button-tile-container'>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="example" src="https://travel.usnews.com/static-travel/images/destinations/94/gettyimages-599456588.jpg" />}>
        </Card>
      </div>
    );
  }
}

