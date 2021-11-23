import { useState } from "react";
import "./input-style.scss";

const MAX_CHAR = 671;

const InputPanel = ({ input, setInput, handleRefetch }) => {
  const handleRandom = () => {
    let randomNum = Math.floor(Math.random() * MAX_CHAR);
    handleRefetch(randomNum);
    setInput(randomNum);
  };

  return (
    <div className="total-input-panel">
      <div className="input-info">Type a number between 1-671</div>
      <div className="input-panel">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input} onClick={() => handleRefetch(input)}>
          Fetch
        </button>
        <button onClick={() => handleRandom()}>🎲</button>
      </div>
    </div>
  );
};

export default InputPanel;