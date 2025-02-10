import React from 'react';

const Buttons = ({addNumber, calculateResult, clearNumbers, addOperator}) => {
    const handleButtonClick = (value) => {
        addNumber(value);
    };

    return (
        <div className="container-fluid buttons bg-black">
            <div className="row m-4">
                {[1, 2, 3, '*'].map((value) => (
                <div className="col bg-black" key={value}>
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => value === '*' ? addOperator('*') : handleButtonClick(value)}>
                    {value}
                    </button>
                </div>
                ))}
            </div>
            <div className="row m-4">
                {[4, 5, 6, '+'].map((value) => (
                <div className="col bg-black" key={value}>
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => value === '+' ? addOperator('+') : handleButtonClick(value)}>
                    {value}
                    </button>
                </div>
                ))}
            </div>
            <div className="row m-4">
                {[7, 8, 9, '-'].map((value) => (
                <div className="col bg-black" key={value}>
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => value === '-' ? addOperator('-') : handleButtonClick(value)}>
                    {value}
                    </button>
                </div>
                ))}
            </div>
            <div className="row m-4">
                {[0, '.', '/'].map((value) => (
                <div className="col bg-black" key={value}>
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => value === '/' ? addOperator('/') : handleButtonClick(value)}>
                    {value}
                    </button>
                </div>
                ))}
                <div className="col bg-black">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        onClick={calculateResult}>
                        =
                    </button>
                </div>
            </div>
            <div className="row m-4">
                <div className="col bg-black buttonClear">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        onClick={clearNumbers}>
                        clear
                    </button>
                </div>
            </div>
        </div>
      );
    };

    export default Buttons;