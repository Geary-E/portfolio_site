/* Test */
import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode !== null) {
      setIsDarkMode(darkMode);
      document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
