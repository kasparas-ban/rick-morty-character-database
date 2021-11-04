import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  // console.log(initial);
  return initial || defaultValue;
}

const useLocalStorage = (defaultValue) => {
  const key = 'R&M-Chars';
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;