import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DarkModeContext } from "../../context/DarkModeContext";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const { darkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      style={{
        backgroundColor: darkMode ? "var(--color-ultra-light-grey)" : "var(--color-dark-grey)",
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="write & enter"
        value={text}
        onChange={handleChange}
        style={{
          backgroundColor: darkMode ? "var(--color-white)" : "var(--color-grey)",
          color: darkMode ? "var(--color-dark-grey)" : "var(--color-react-blue)",
        }}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
