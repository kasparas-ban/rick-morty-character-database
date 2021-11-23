const useFetch = (
  charNum,
  setInput,
  setCharInfo,
  status,
  setStatus,
  cache,
  setCache,
  setCacheSelected
) => {
  if (charNum > 671 || charNum < 1 || !Number.isInteger(charNum)) {
    charNum = parseInt(charNum, 10);
    charNum = charNum > 671 ? 671 : charNum;
    charNum = charNum < 1 ? 1 : charNum;
    setInput(charNum);
    setStatus({
      ...status,
      errorMessage: `Number chosen is out of range. Selected #${charNum} instead.`,
    });
  }

  const existingChar = cache.find((char) => char.id === charNum);
  if (existingChar) {
    console.log("loading from cache");
    setCharInfo(existingChar);
    setCacheSelected(existingChar);
    setStatus({ ...status, isLoaded: "loaded" });
    return;
  }

  setStatus({ ...status, isLoaded: "waiting" });
  fetch(`https://rickandmortyapi.com/api/character/${charNum}`)
    .then((res) => res.json())
    .then(
      (data) => {
        setCharInfo(data);
        setCache([...cache, data]);
        setCacheSelected(data);
        setStatus({ ...status, isLoaded: "loaded" });
      },
      (error) => {
        setStatus({ ...status, isLoaded: "initial", networkError: error });
        setCacheSelected(null);
      }
    );
};

export default useFetch;
