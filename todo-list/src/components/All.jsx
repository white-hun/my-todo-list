import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function All() {
  const { theme } = useContext(DarkModeContext);
  return (
    <div>
      <button
        className="all-button"
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
          color: theme === "light" ? "#20232a" : "#61dafb",
          transition: "0.3s",
        }}
      >
        All
      </button>
    </div>
  );
}
