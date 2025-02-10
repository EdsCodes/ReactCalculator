import React from "react";

const History = ({ history }) => {
    return (
        <div className="history">
            <div>
                {history.map((entry, index) => (
                <p key={index}>{entry}</p>
                ))}
            </div>
        </div>
    )
}

export default History;