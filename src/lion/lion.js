import React, { Component } from 'react';
import './lion.css'
import {init, createLights, createFloor, createLion, createFan, loop} from './lionAnimation'

class lion extends Component {
  componentDidMount() {
    init();
    createLights();
    createFloor();
    createLion();
    createFan();
    loop();
  }

  render() {
    return (
      <div>
        <div id="lionworld"></div>
        <div id="lioninstructions">Press and drag to make wind<br/>
        <span className="lionlightInstructions">the lion will surely appreciate</span></div>
      </div>
    );
  }
}

export default lion
