import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Results from './Results';
import History from './History';

const Container = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [Result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const addNumber = (value) => {
    setInput(input + value);
  };

  const addOperator = (op) => {
    if (input) {
      setNumbers([...numbers, parseFloat(input)]);
      setInput('');
      setOperator(op);
    }
  }; 

  const calculateResult = () => {
    if (input && operator) {
      const newNumber = parseFloat(input);
      let total;
      switch (operator) {
        case '+':
          total = numbers.reduce((acc, num) => acc + num, 0) + newNumber;
          break;
        case '-':
          total = numbers.reduce((acc, num) => acc + num, 0) - newNumber;
          break;
        case '*':
          total = numbers.reduce((acc, num) => acc * num, 1) * newNumber;
          break;
        case '/':
          total = numbers.reduce((acc, num) => acc / num, 1) / newNumber;
          break;
        default:
          return;
      }
      setResult(total);
      setHistory([...history, `${numbers.join(` ${operator} `)} ${operator} ${newNumber} = ${total}`]);
      setNumbers([]);
      setInput('');
      setOperator(null);
    }
  };

  const clearNumbers = () => {
    setNumbers([]);
    setInput('');
    setResult(0);
    setOperator(null);
    setHistory([]);
  };

  useEffect(() =>{
    const handleKeyPress = (event) => {
      const { key } = event;
      if (!isNaN(key)) {
        addNumber(key); 
      } else if (['+', '-', '*', '/'].includes(key)){
        addOperator(key);
      } else if (key === 'Enter'){
        calculateResult();
      } else if (key === 'Escape'){
        clearNumbers();
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input, numbers, operator]);

  return (
    <div className="marcoCalc container border border-black border-5 rounded-2 mt-3">
        <div className="row">
            <div className="col bg-black">
                <History history={history} />
                <Results input={input} operator={operator} Result={Result} />
                <Buttons addNumber={addNumber} addOperator={addOperator} calculateResult={calculateResult} clearNumbers={clearNumbers} />
            </div>
        </div>
    </div>
  );
};

export default Container;
