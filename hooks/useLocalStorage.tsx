import { useState, useEffect } from 'react';

const PREFIX = 'forecastr-';

export default function useLocalStorage(key: String, initialValue: any) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    let jsonValue = null;
    if (typeof window !== 'undefined') {
      jsonValue = window.localStorage.getItem(prefixedKey);
    }
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);
  return [value, setValue];
}
