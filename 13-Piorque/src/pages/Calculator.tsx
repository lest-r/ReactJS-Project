// Calculator.jsx
import { useState } from 'react';
// import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value: string) => {
    setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  return (
    <div id="body-home">
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-row">
          <button className='calculator-button' onClick={() => handleButtonClick('7')}>7</button>
          <button className='calculator-button' onClick={() => handleButtonClick('8')}>8</button>
          <button className='calculator-button' onClick={() => handleButtonClick('9')}>9</button>
          <button className='calculator-button' onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="calculator-row">
          <button className='calculator-button' onClick={() => handleButtonClick('4')}>4</button>
          <button className='calculator-button' onClick={() => handleButtonClick('5')}>5</button>
          <button className='calculator-button' onClick={() => handleButtonClick('6')}>6</button>
          <button className='calculator-button' onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="calculator-row">
          <button className='calculator-button' onClick={() => handleButtonClick('1')}>1</button>
          <button className='calculator-button' onClick={() => handleButtonClick('2')}>2</button>
          <button className='calculator-button' onClick={() => handleButtonClick('3')}>3</button>
          <button className='calculator-button' onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calculator-row">
          <button className='calculator-button' onClick={() => handleButtonClick('0')}>0</button>
          <button className='calculator-button' onClick={handleClear}>C</button>
          <button className='calculator-button' onClick={handleCalculate}>=</button>
          <button className='calculator-button' onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
