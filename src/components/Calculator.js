/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calc__container">
        <div className="calc__grid-container">
          <div className="calc__grid-item calc__display">0</div>
          <div className="calc__grid-item">AC</div>
          <div className="calc__grid-item">+/-</div>
          <div className="calc__grid-item">%</div>
          <div className="calc__grid-item calc__operator">&divide;</div>
          <div className="calc__grid-item">7</div>
          <div className="calc__grid-item">8</div>
          <div className="calc__grid-item">9</div>
          <div className="calc__grid-item calc__operator">&times;</div>
          <div className="calc__grid-item">4</div>
          <div className="calc__grid-item">5</div>
          <div className="calc__grid-item">6</div>
          <div className="calc__grid-item calc__operator">&minus;</div>
          <div className="calc__grid-item">1</div>
          <div className="calc__grid-item">2</div>
          <div className="calc__grid-item">3</div>
          <div className="calc__grid-item calc__operator">+</div>
          <div className="calc__grid-item calc__zero">0</div>
          <div className="calc__grid-item">.</div>
          <div className="calc__grid-item calc__operator">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
