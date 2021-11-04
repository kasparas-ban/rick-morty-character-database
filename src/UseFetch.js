const useFetch = (
  charNum,
  setInput,
  setIsLoaded,
  setCharInfo,
  setError,
  cache,
  setCache,
  setCacheSelected
) => {
  if (charNum > 671 || charNum < 1 || !Number.isInteger(charNum)) {
    charNum = parseInt(charNum, 10);
    charNum = charNum > 671 ? 671 : charNum;
    charNum = charNum < 1 ? 1 : charNum;
    setInput(charNum);
  }

  const existingChar = cache.find((char) => char.id === charNum);
  if (existingChar) {
    console.log("loading from cache");
    setCharInfo(existingChar);
    setCacheSelected(existingChar);
    setIsLoaded('loaded');
    return;
  }

  setIsLoaded('waiting');
  setTimeout(function () {
    fetch(`https://rickandmortyapi.com/api/character/${charNum}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setCharInfo(data);
          setCache([...cache, data]);
          setCacheSelected(data);
          setIsLoaded('loaded');
          console.log("NO ERROR");
        },
        (error) => {
          setIsLoaded('initial');
          setCacheSelected(null);
          setError(error);
        }
      );
  }, 1000);
};

export default useFetch;