import { useState, useReducer } from "react";
import rickAndMortyLogo from "./assets/Rick_and_Morty_logo.png";
import personIcon from "./assets/person_icon.svg";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";
import InputPanel from "./Input Panel/InputPanel";
import Background from "./Background";
import InfoPanel from "./Info Panel/InfoPanel";
import HistoryPanel from "./History Panel/HistoryPanel";
import NewBackground from "./NewBackground";
import BottomPanel from "./Bottom Panel/BottomPanel";

const App = () => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState({
    isLoaded: 'initial', // initial, loaded, waiting
    networkError: false,
    errorMessage: null,
  });
  const [charInfo, setCharInfo] = useState({
    name: null,
    id: null,
    status: null,
    species: null,
    type: null,
    gender: null,
    origin: null,
    location: null,
    image: null,
  });
  const [cache, setCache] = useLocalStorage([]);
  const [cacheSelected, setCacheSelected] = useState(null);

  const HandleRefetch = (num) => {
    useFetch(
      num,
      setInput,
      setCharInfo,
      status,
      setStatus,
      cache,
      setCache,
      setCacheSelected
    );
  };

  const handleHistoryClick = (id, cache) => {
    const selectedChar = cache.find((char) => char.id === id);
    setCacheSelected(selectedChar);
    setCharInfo(selectedChar);
    setInput(selectedChar.id);
    setStatus({ ...status, isLoaded: 'loaded' });
  };

  const cleanCache = () => {
    localStorage.removeItem("R&M-Chars");
    setCacheSelected(null);
    setCache([]);
    setCharInfo({
      id: null,
      name: "???",
      status: null,
      species: null,
      gender: null,
      origin: null,
      location: null,
      image: personIcon,
    });
    setInput("");
    setStatus({ ...status, isLoaded: 'initial' });
  };

  return (
    <>
      <NewBackground />
      {/* <Background /> */}
      <div className="main-container">
        <div className="logo-panel">
          <img className="logo" src={rickAndMortyLogo} alt="Rick & Morty Logo" />
          <div className="logo-database">Character Database</div>
        </div>
        <div className="database-panel">
          <InputPanel input={input} setInput={setInput}
            handleRefetch={HandleRefetch}
          />
          <InfoPanel char={charInfo} isLoaded={status.isLoaded} />
          <HistoryPanel
            cache={cache}
            selectedId={cacheSelected && cacheSelected.id}
            handleClick={(id) => handleHistoryClick(id, cache)}
            cleanCache={cleanCache}
          />
        </div>
      </div>
      <BottomPanel />
    </>
  );
};

export default App;
