const History = ({ history }) => {
    return (
      <div className="rounded-top border-0 mt-4">
        {history.length > 0 ? (
          <p>{history[history.length-1].split("=")[0]}</p>
        ) : (
          <p>No hay operaciones previas</p>
        )}
      </div>
    );
  };
  
  export default History; 