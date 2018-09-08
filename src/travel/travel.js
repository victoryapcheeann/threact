import React, { Component } from 'react';
import './travel.css';
import {initTravelWorld} from './travelAnimation'

class travel extends Component {
  componentDidMount() {
    initTravelWorld();
  }

  render() {
    return (
      <div>
        <div id="travelworld"></div>
      </div>
    );
  }
}

export default travel
