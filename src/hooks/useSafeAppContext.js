import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export function useSafeAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
