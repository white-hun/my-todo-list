import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { BsMoon } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import { TbFlower } from "react-icons/tb";
import styles from "./DarkMode.module.css";

export default function DarkMode() {
  const { darkMode, toggle } = useDarkMode();

  return (
    <button className={styles.button} onClick={toggle}>
      {darkMode ? <TbFlower /> : <CgSun />}
      {/* {darkMode ? <BsMoon /> : <CgSun />} */}
    </button>
  );
}
