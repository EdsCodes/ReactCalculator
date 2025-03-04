import React from "react";

const Results = ({ input, result, operator }) => {
  return (
    <div className="container rounded-bottom border-0 bg-light">
      <div className="resultSquare w-100">
        <div className="subResultSquare rounded-4">
          <h6>
            {input || operator ? `${input} ${operator || ''}` : ''}
          </h6>
          <h4 className="text-end">{result !== undefined ? ` ${result}` : ''}</h4>
        </div>
      </div>
    </div>
  );
};

export default Results;