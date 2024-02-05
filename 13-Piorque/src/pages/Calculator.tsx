import React from 'react';
import CalculatorComponent from '../components/CalculatorComponent';

const Calculator: React.FC = () => {
  return (
    <div id="body-home">
      <h1 className='h1-title-calculator'>CALCULATOR</h1>
      <CalculatorComponent />
    </div>
  );
};

export default Calculator;