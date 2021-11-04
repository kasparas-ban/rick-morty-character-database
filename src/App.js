import { useState } from "react";
import rickAndMortyLogo from "./assets/Rick_and_Morty_logo.png";
import personIcon from "./assets/person_icon.svg";
import useFetch from "./UseFetch";
import useLocalStorage from "./useLocalStorage";
import InputPanel from "./Input Panel/InputPanel";
import Background from "./Background";
import InfoPanel from "./Info Panel/InfoPanel";
import HistoryPanel from "./History Panel/HistoryPanel";

const App = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState("initial"); // initial, waiting, loaded
  const [charInfo, setCharInfo] = useState({
    name: "???",
    id: null,
    status: null,
    species: null,
    type: null,
    gender: null,
    origin: null,
    location: null,
    image: personIcon,
  });
  const [cache, setCache] = useLocalStorage([]);
  // console.log("Cache", cache);
  const [cacheSelected, setCacheSelected] = useState(null);

  const HandleRefetch = (num) => {
    useFetch(
      num,
      setInput,
      setIsLoaded,
      setCharInfo,
      setError,
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
    setIsLoaded("loaded");
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
    setIsLoaded("initial");
  };

  return (
    <>
      {/* <NewBackground /> */}
      {/* <Background /> */}
      <div className="main-container">
        <div className="logo-panel">
          <img className="logo" src={rickAndMortyLogo} />
          <div className="logo-database">Character Database</div>
        </div>
        <div className="database-panel">
          <InputPanel
            input={input}
            setInput={setInput}
            handleRefetch={HandleRefetch}
          />
          <InfoPanel char={charInfo} isLoaded={isLoaded} />
          <HistoryPanel
            cache={cache}
            selectedId={cacheSelected && cacheSelected.id}
            handleClick={(id) => handleHistoryClick(id, cache)}
            cleanCache={cleanCache}
          />
        </div>
      </div>
    </>
  );
};

export default App;
