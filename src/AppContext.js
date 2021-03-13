import React, { useContext, createContext } from 'react';

const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'toggleMenu': {
      return { menuIsOpen: !state.menuIsOpen };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, { menuIsOpen: false });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppState() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useAppState };
