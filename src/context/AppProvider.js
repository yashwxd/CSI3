import React, { createContext, useReducer } from 'react';

const initialState = {
  loggedin: localStorage.getItem('isloggedin') ? true : false,
  firstname: localStorage.getItem('firstname'),
};

export const GlobalContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGGEDIN':
      return {
        ...state,
        loggedin: action.payload,
      };
    case 'SET_FIRSTNAME':
      return {
        ...state,
        firstname: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
