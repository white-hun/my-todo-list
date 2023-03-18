import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Completed() {
  const { theme } = useContext(DarkModeContext);

  return (
    <div>
      <button
        className="completed-button"
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
          color: theme === "light" ? "#20232a" : "#61dafb",
          transition: "0.3s",
        }}
      >
        Completed
      </button>
    </div>
  );
}
