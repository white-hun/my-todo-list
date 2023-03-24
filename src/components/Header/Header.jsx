import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onChangeFilter }) {
  return (
    <header className={styles.header}>
      <DarkMode />
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
