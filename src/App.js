/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App = () => {
  const [calcOperands, setCalcOperands] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onButtonPress = (obj) => {
    setCalcOperands(obj);
  };

  return (
    <div className="App">
      <Calculator calcOperands={calcOperands} onButtonPress={onButtonPress} />
    </div>
  );
};

export default App;
