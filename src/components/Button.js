/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, classes, onClickHandler }) => (
  <div className={classes}>
    <button type="button" onClick={onClickHandler}>{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
