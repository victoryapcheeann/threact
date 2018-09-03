import React, { Component } from 'react';
import './dragon.css';
import {init, createLights, createFloor, createDragon, loop} from './dragonAnimation'

class dragon extends Component {
  componentDidMount() {
    init();
    createLights();
    createFloor();
    createDragon();
    loop();
  }

  render() {
    return (
      <div>    
        <div id="dragonworld"></div>
        <div id="dragoninstructions">The longer you keep clicking, the harder he sneezes<br/><span class="dragonlightInstructions">- Press and drag to turn around -</span></div>
        <div id="power">00</div>
      </div>
    );
  }
}

export default dragon
