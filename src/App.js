import React, { Component } from 'react';
import './App.css';
import Lion from './lion/lion';
import Dragon from './dragon/dragon';
import Travel from './travel/travel';
import Rabbit from './rabbit/rabbit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent : Lion
    }
  }

  renderComponent = (componentName) => {
      this.setState ({
        currentComponent : componentName
      })
  }

  render() {
    return (
      <div>
        <div>3D Animation</div>
            <span>Credit To:</span>
            <a href="https://codepen.io/Yakudoo/"  target="blank"></a>
            <a href="https://www.epic.net" target="blank">epic.net</a>
            <br/>
            <button onClick={() => this.renderComponent(Lion)}>Lion</button>
            <button onClick={() => this.renderComponent(Dragon)}>Dragon</button>
            <button onClick={() => this.renderComponent(Travel)}>Travel</button>
            <button onClick={() => this.renderComponent(Rabbit)}>Rabbit</button>
          <this.state.currentComponent />
      </div>
    );
  }
}

export default App;
