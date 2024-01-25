import React, { useState, useEffect } from 'react';
import './App.css';
import * as math from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    const resultDisplay = document.getElementById("display");
    resultDisplay.value = input; 
  }, [input]);
  

  const dataInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearScreen = () => {
    setInput('');
  };

  const showResult = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  

  return (
    <div className="container">
      <div className="cal_display">
        <input id="display" readOnly value={input}></input>
      </div>
      <div className="cal_body">
        <button className="input_btn opr" onClick={() => dataInput('+')}>
          +
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('7')}>
          7
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('8')}>
          8
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('9')}>
          9
        </button>
        <button className="input_btn opr" onClick={() => dataInput('-')}>
          -
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('4')}>
          4
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('5')}>
          5
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('6')}>
          6
        </button>
        <button className="input_btn opr" onClick={() => dataInput('*')}>
          *
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('1')}>
          1
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('2')}>
          2
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('3')}>
          3
        </button>
        <button className="input_btn opr" onClick={() => dataInput('/')}>
          /
        </button>
        <button className="input_btn opr" onClick={clearScreen}>
          C
        </button>
        <button className="input_btn nrl" onClick={() => dataInput('0')}>
          0
        </button>
        <button className="input_btn opr" onClick={showResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
