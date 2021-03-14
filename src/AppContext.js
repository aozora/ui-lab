import React, { useContext, createContext } from 'react';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

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

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}
function useAppDispatch() {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useAppState, useAppDispatch };
