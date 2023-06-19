import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [currProject, setCurrProject] = useState(null);

  return (
    <AppContext.Provider value={{ currProject, setCurrProject }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
