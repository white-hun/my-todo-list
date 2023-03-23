import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggle = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}
