// Context.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
const [account, setAccount] = useState({name:''});

  return (
    <MyContext.Provider value={{ account, setAccount }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
