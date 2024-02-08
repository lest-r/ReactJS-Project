import React, { useState } from 'react';

// CalculatorComponents.tsx
// Define the props interface for CalculatorComponent (currently empty)

interface CalculatorProps {}

// CalculatorComponent Component
// This component represents a basic calculator.
// It allows users to perform arithmetic operations.

const CalculatorComponent: React.FC<CalculatorProps> = () => {

  // State to manage the display value of the calculator
  const [display, setDisplay] = useState('0');

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    if (display === '0' && ['/', '*', '-', '+'].includes(value)) {
      // Ignore operators if display is '0'
      return;
    }
  
    // Check if the last character in the display is an operator
    const lastCharIsOperator = ['/', '*', '-', '+'].includes(display.slice(-1));
  
    // If the new value is an operator and the last character is also an operator, replace it
    if (['/', '*', '-', '+'].includes(value) && lastCharIsOperator) {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1) + value);
    } else if (lastCharIsOperator && value === '0') {
      // If the last character is an operator and the new value is zero, do nothing
      return;
    } else {
      setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
    }
  };
  
  // Function to handle calculation
  const handleCalculate = () => {
    try {
      const result = eval(display).toString();
      setDisplay(result);
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Function to handle clear operation
  const handleClear = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">

      {/* Display */}
      <div className="calculator-display">{display}</div>

      {/* Calculator buttons */}

      <div className="calculator-row">
        <button className='calculator-button' onClick={() => handleButtonClick('7')}>7</button>
        <button className='calculator-button' onClick={() => handleButtonClick('8')}>8</button>
        <button className='calculator-button' onClick={() => handleButtonClick('9')}>9</button>
        <button className='calculator-button' id='calc-operator' onClick={() => handleButtonClick('/')}>/</button>
      </div>

      <div className="calculator-row">
        <button className='calculator-button' onClick={() => handleButtonClick('4')}>4</button>
        <button className='calculator-button' onClick={() => handleButtonClick('5')}>5</button>
        <button className='calculator-button' onClick={() => handleButtonClick('6')}>6</button>
        <button className='calculator-button' id='calc-operator' onClick={() => handleButtonClick('*')}>*</button>
      </div>

      <div className="calculator-row">
        <button className='calculator-button' onClick={() => handleButtonClick('1')}>1</button>
        <button className='calculator-button' onClick={() => handleButtonClick('2')}>2</button>
        <button className='calculator-button' onClick={() => handleButtonClick('3')}>3</button>
        <button className='calculator-button' id='calc-operator' onClick={() => handleButtonClick('-')}>-</button>
      </div>

      <div className="calculator-row">
        <button className='calculator-button' onClick={() => handleButtonClick('0')}>0</button>
        <button className='calculator-button' onClick={handleClear}>C</button>
        <button className='calculator-button' onClick={handleCalculate}>=</button>
        <button className='calculator-button' id='calc-operator' onClick={() => handleButtonClick('+')}>+</button>
      </div>
      
    </div>
  );
};

export default CalculatorComponent;
