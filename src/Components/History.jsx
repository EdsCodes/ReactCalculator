const History = ({ history }) => {
    return (
      <div>
        {history.length > 0 ? (
          <p>{history[history.length-1].split("=")[0]}</p>
        ) : (
          <p>No hay operaciones previas</p>
        )}
      </div>
    );
  };
  
  export default History;
  