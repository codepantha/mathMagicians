/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import 'tachyons';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

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
      <Navbar />
      <Routes>
        <Route
          path="/calculator"
          element={(
            <Calculator
              calcOperands={calcOperands}
              onButtonPress={onButtonPress}
            />
          )}
        />
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
