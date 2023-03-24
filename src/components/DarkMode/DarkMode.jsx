import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { BsMoon } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import styles from "./DarkMode.module.css";

export default function DarkMode() {
  const { darkMode, toggle } = useDarkMode();

  return (
    <button className={styles.button} onClick={toggle}>
      {darkMode ? <BsMoon /> : <CgSun />}
    </button>
  );
}
