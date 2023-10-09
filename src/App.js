import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [calcResult, setCalcResult] = useState('');

  const handleDigitClick = (digit) => {
    setExpression((prevExpression) => prevExpression + digit);
  };

  const handleOperatorClick = (operator) => {
    setExpression((prevExpression) => prevExpression + operator);
  };

  const handleClearClick = () => {
    setExpression('');
    setCalcResult('');
  };

  const handleEvaluateClick = () => {
    try {
      const result = eval(expression);
      setCalcResult(result);
    } catch (error) {
      setCalcResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="expression">{expression}</div>
          <div className="result">{calcResult}</div>
        </div>
        <table>
          <tbody>
            <tr>
              <td><button onClick={() => handleDigitClick('7')}>7</button></td>
              <td><button onClick={() => handleDigitClick('8')}>8</button></td>
              <td><button onClick={() => handleDigitClick('9')}>9</button></td>
              <td><button onClick={() => handleOperatorClick('+')}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleDigitClick('4')}>4</button></td>
              <td><button onClick={() => handleDigitClick('5')}>5</button></td>
              <td><button onClick={() => handleDigitClick('6')}>6</button></td>
              <td><button onClick={() => handleOperatorClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleDigitClick('1')}>1</button></td>
              <td><button onClick={() => handleDigitClick('2')}>2</button></td>
              <td><button onClick={() => handleDigitClick('3')}>3</button></td>
              <td><button onClick={() => handleOperatorClick('*')}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleDigitClick('0')}>0</button></td>
              <td><button onClick={handleClearClick}>C</button></td>
              <td><button onClick={handleEvaluateClick}>=</button></td>
              <td><button onClick={() => handleOperatorClick('/')}>/</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
