import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <AppContext.Provider value={{ showAbout, setShowAbout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
