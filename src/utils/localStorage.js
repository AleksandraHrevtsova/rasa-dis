import { useState, useEffect } from 'react';

export const getData = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value && (JSON.parse(value) || null);
  } catch (error) {
    console.error(`Failed to parse ${key}.`, error);
    return null;
  }
};

export const useLocaleStorage = (key, initValue) => {
  const [state, setState] = useState(getData(key, initValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const getUserFromLocalstorage = () => {
  const userJson = localStorage.getItem('user');

  if (userJson !== null) {
    try {
      return JSON.parse(userJson);
    } catch (e) {
      console.error('Failed to parse user.', e);
    }
  }
  return {};
};
