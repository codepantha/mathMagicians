/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onButtonPress = (obj) => {
    this.setState(obj);
  };

  render() {
    const { total, next, operation } = this.state;
    const calcOperands = {
      total,
      next,
      operation,
    };

    return (
      <div className="App">
        <Calculator calcOperands={calcOperands} onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}

export default App;
