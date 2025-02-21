import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Results from './Results';
import History from './History';

const Container = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const addNumber = (value) => {
    setInput(input + value);
  };

  const addOperator = (op) => {
    if (input && !isNaN(input[input.length - 1])) {
      setInput(input + op);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = new Function(`return ${input}`)();
      setResult(evaluatedResult);
      setHistory([...history, `${input} = ${evaluatedResult}`]);
      setInput(evaluatedResult.toString()); 
    } catch (error) {
      alert('Error en la expresión');
    }
  };

  const clearNumbers = () => {
    setInput('');
    setResult(0);
    setHistory([]);
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
  }, [input]);

  return (
    <div className="marcoCalc container border border-black border-5 rounded-2 mt-3">
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