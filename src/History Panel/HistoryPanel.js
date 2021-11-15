import "./history-style.scss";

const HistoryPanel = ({ cache, handleClick, selectedId, cleanCache }) => {
  // console.log(cache);
  return (
    <div className="total-history-panel">
      <div className="history-top">
        <div className="history-label">History</div>
        <button
          className={`clear-history${cache.length ? "" : " hidden"}`}
          onClick={cleanCache}
        >
          clear history
        </button>
      </div>
      <div className="history-panel">
        {cache.map((char) => (
          <div
            className={`history-img${
              selectedId === char.id ? " selected" : ""
            }`}
            key={char.id}
          >
            <img
              src={char.image}
              onClick={() => handleClick(char.id)}
              alt={`Charader #${char.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
