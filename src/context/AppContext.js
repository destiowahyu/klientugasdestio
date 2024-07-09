import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: {
    name: 'Destio Wahyu Lanio',
    nim: 'A11.2021.13568'
  }
};

// Create context
const AppContext = createContext();

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

// Provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
