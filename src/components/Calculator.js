/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './calculator.css';
import Button from './Button';

const Calculator = ({ calcOperands, onButtonPress }) => {
  const onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const calcObj = calculate(calcOperands, buttonName);
    onButtonPress(calcObj);
  };

  return (
    <div className="w-100 calc__page-container">
      <div className="page__padding">
        <h2>Let&apos;s do some math</h2>
      </div>
      <div className="calc__container scale-up-ver-top">
        <div className="calc__grid-container">
          <div className="calc__grid-item calc__display">
            {
              (calcOperands.total || calcOperands.next || '0')
              + (calcOperands.operation || '')
              + ((calcOperands.operation && calcOperands.next) || '')
            }
          </div>
          <Button
            name="AC"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="+/-"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="%"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="&divide;"
            classes="calc__grid-item calc__operator"
            onClickHandler={onClickHandler}
          />
          <Button
            name="7"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="8"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="9"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="x"
            classes="calc__grid-item calc__operator"
            onClickHandler={onClickHandler}
          />
          <Button
            name="4"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="5"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="6"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="-"
            classes="calc__grid-item calc__operator"
            onClickHandler={onClickHandler}
          />
          <Button
            name="1"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="2"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="3"
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="+"
            classes="calc__grid-item calc__operator"
            onClickHandler={onClickHandler}
          />
          <Button
            name="0"
            classes="calc__grid-item calc__zero"
            onClickHandler={onClickHandler}
          />
          <Button
            name="."
            classes="calc__grid-item"
            onClickHandler={onClickHandler}
          />
          <Button
            name="="
            classes="calc__grid-item calc__operator"
            onClickHandler={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  calcOperands: PropTypes.instanceOf(Object).isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default Calculator;
