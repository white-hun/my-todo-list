import React, { createContext, useCallback, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>{children}</DarkModeContext.Provider>
  );
}
