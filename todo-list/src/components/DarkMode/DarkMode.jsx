import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import styles from "./DarkMode.module.css";

export default function DarkMode() {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const handleMode = () => toggle();

  return (
    <button
      className={styles.button}
      onClick={handleMode}
      style={{ color: darkMode ? "var(--color-orange)" : "var(--color-react-blue)" }}
    >
      {darkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
}
