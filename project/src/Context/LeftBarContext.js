// LeftBarContainer.js

import React, { createContext, useContext, useState } from 'react';

const LeftBarContext = createContext();

export const LeftBarProvider = ({ children }) => {
  const [barSituation, setBarSituation] = useState(false);

  const updateBarSituation = (newClick) => {
    setBarSituation(newClick);
  };
  

  return (
    <LeftBarContext.Provider value={{ barSituation, updateBarSituation }}>
      {children}
    </LeftBarContext.Provider>
  );
};


export const useLeftBar = () => {
  const context = useContext(LeftBarContext);
  if (!context) {
    throw new Error('useLeftBar must be used within a LeftBarProvider');
  }
  return context;
  
};