import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Results from './Results';
import History from './History';

const Container = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [isNewOperation, setIsNewOperation] = useState(false);

  const addNumber = (value) => {
    if (isNewOperation) {
      setInput(value);
      setIsNewOperation(false);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const addOperator = (op) => {
    if (!input && result !== 0) {
      setInput(result.toString() + op);
      setIsNewOperation(false);
      return;
    }
    if (!input) return;

    const lastChar = input[input.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setInput(input.slice(0, -1) + op);
    } else {
      setInput(input + op);
    }
  };

  const calculateResult = () => {
    try {
      if (!input) return;
      const evaluatedResult = new Function(`return ${input}`)();
      setHistory((prev) => [...prev, input]);
      setResult(evaluatedResult);
      setInput('');
      setIsNewOperation(true);
    } catch (error) {
      alert('Error en la expresión');
    }
  };

  const clearNumbers = () => {
    setInput('');
    setResult(0);
    setHistory([]);
    setIsNewOperation(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (!isNaN(key)) {
        addNumber(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        addOperator(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Escape') {
        clearNumbers();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input, isNewOperation, result]);

  return (
    <div className="marcoCalc container rounded-2 mt-3">
      <div className="row">
        <div className="col bg-black">
          <History history={history} />
          <Results input={input} result={result} />
          <Buttons addNumber={addNumber} addOperator={addOperator} calculateResult={calculateResult} clearNumbers={clearNumbers} />
        </div>
      </div>
    </div>
  );
};

export default Container;