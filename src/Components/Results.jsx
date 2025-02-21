import React from "react";

const Results = ({ input, result, operator }) => {
  return (
    <div className="container">
      <div className="resultSquare rounded-2 m-2 mt-3">
        <div className="subResultSquare rounded-4 w-90 m-1">
          <h6>
            {input || operator ? `${input} ${operator || ''}` : '0'}
          </h6>
          <h4>{result !== undefined ? `= ${result}` : ''}</h4>
        </div>
      </div>
    </div>
  );
};

export default Results;