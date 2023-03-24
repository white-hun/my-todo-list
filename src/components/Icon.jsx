import React from "react";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
import logoRed from "../logoRed.svg";
import "../App.css";
import { useDarkMode } from "../context/DarkModeContext";

function Icon(props) {
  const { darkMode } = useDarkMode();
  return (
    <div className="App">
      {/* <img src={logoRed} className="App-logo" alt="logo" /> */}
      {darkMode ? (
        <img src={logo2} className="App-logo" alt="logo" />
      ) : (
        <img src={logo} className="App-logo" alt="logo" />
      )}
    </div>
  );
}

export default Icon;
