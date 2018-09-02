import React, { Component } from 'react';
import './lion.css'
import {init, createLights, createFloor, createLion, createFan, loop} from './lionAnimation'

class AnimatedSquare extends Component {
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
        <div id="world"></div>
        <div id="instructions">Press and drag to make wind<br/><span className="lightInstructions">the lion will surely appreciate</span></div>
        
        <div id="credits">
          <p> <a href="https://codepen.io/Yakudoo/"  target="blank">my other codepens</a> | <a href="https://www.epic.net" target="blank">epic.net</a></p>
        </div>
      </div>
    );
  }
}

export default AnimatedSquare
