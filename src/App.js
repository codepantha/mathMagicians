/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
