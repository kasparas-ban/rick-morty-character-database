const useFetch = (
  charNum,
  state,
  dispatch
) => {
  
  if (charNum > 671 || charNum < 1 || !Number.isInteger(charNum)) {
    charNum = parseInt(charNum, 10);
    charNum = charNum > 671 ? 671 : charNum;
    charNum = charNum < 1 ? 1 : charNum;
    dispatch({ type: 'inputError' });
  }

  const existingChar = state.cache.find((char) => char.id === charNum);
  if (existingChar) {
    dispatch({ type: 'loadFromCache' });
    return;
  }

  dispatch({ type: 'setIsLoading' });
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