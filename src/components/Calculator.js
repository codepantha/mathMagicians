/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './calculator.css';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  onClickHandler = (e) => {
    const { calcOperands, onButtonPress } = this.props;
    const buttonName = e.target.innerText;
    const calcObj = calculate(calcOperands, buttonName);
    onButtonPress(calcObj);
  }

  render() {
    const { calcOperands } = this.props;
    return (
      <div className="calc__container">
        <div className="calc__grid-container">
          <div className="calc__grid-item calc__display">{calcOperands.total ?? 0}</div>
          <Button
            name="AC"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="+/-"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="%"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="&divide;"
            classes="calc__grid-item calc__operator"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="7"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="8"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="9"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="x"
            classes="calc__grid-item calc__operator"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="4"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="5"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="6"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="-"
            classes="calc__grid-item calc__operator"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="1"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="2"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="3"
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="+"
            classes="calc__grid-item calc__operator"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="0"
            classes="calc__grid-item calc__zero"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="."
            classes="calc__grid-item"
            onClickHandler={this.onClickHandler}
          />
          <Button
            name="="
            classes="calc__grid-item calc__operator"
            onClickHandler={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  calcOperands: PropTypes.instanceOf(Object).isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default Calculator;
