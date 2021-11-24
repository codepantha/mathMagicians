/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, classes, onClickHandler } = this.props;
    return (
      <div className={classes}>
        <button type="button" onClick={onClickHandler}>{name}</button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
