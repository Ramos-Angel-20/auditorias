import { useContext, useState, createContext } from 'react';

export const uiContext = createContext();

export const UIProvider = ({ children }) => {
  
  const [sideIsOpen, setSideIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideIsOpen(prev => !prev);
  }
  
  return (
    <uiContext.Provider value={{
      sideIsOpen,
      toggleSidebar,
    }}>
      { children }
    </uiContext.Provider>
  );
}