import React from 'react';
import CalculatorComponent from '../components/CalculatorComponent';

// Calculator.tsx
// This page displays the calculator
// It displays the calculator title and the calculator component itself.

const Calculator: React.FC = () => {
  return (
    <div id="body-home">
      
      {/* Title */}
      <h1 className='h1-title-calculator'>CALCULATOR</h1>
      
      {/* Calculator Component */}
      <CalculatorComponent />
    </div>
  );
};

export default Calculator;
