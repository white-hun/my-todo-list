import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onChangeFilter }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: darkMode ? "var(--color-ultra-light-grey)" : "var(--color-dark-grey)",
      }}
    >
      <>
        <DarkMode />
      </>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onChangeFilter(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
