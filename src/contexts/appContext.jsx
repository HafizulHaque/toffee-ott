import { createContext, useReducer } from "react";
import { initialAppState } from "../state/slice";
import { appReducer } from "../state/reducers";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}