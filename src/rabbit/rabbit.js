import React, { Component } from 'react';
import './rabbit.css';
import {init} from './rabbitAnimation'

class effect1 extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return (
      <div>
<div id="world" />
<div id="gameoverInstructions">
  Game Over
</div>
<div id="dist">
    <div className="label">distance</div>
    <div id="distValue">000</div>
</div>

<div id="instructions">Click to jump<span className="lightInstructions"> — Grab the carrots / avoid the hedgehogs</span></div>
      </div>
    );
  }
}

export default effect1
