import React, { createContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  loggedin: localStorage.getItem('isloggedin') ? true : false,
  firstname: localStorage.getItem('firstname'),
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGGEDIN':
      return { ...state, loggedin: action.payload };
    case 'SET_FIRSTNAME':
      return { ...state, firstname: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const loginfunction = async (emailpass) => {
    try {
      const response = await axios.post('/api/login', emailpass);
      dispatch({ type: 'SET_LOGGEDIN', payload: true });
      dispatch({ type: 'SET_FIRSTNAME', payload: response.data.firstname });
      localStorage.setItem('isloggedin', '1');
      localStorage.setItem('firstname', response.data.firstname);

      navigate('/dashboard');
    } catch (error) {
      console.log('Error:', error);
      if (error.response && error.response.status === 401) {
        toast.error('Invalid email or password. Please try again.');
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('isloggedin', state.loggedin ? '1' : '');
    localStorage.setItem('firstname', state.firstname || '');
  }, [state.loggedin, state.firstname]);

  return (
    <GlobalContext.Provider
      value={{
        loggedin: state.loggedin,
        loginfunction,
        firstname: state.firstname,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
