import React, { useContext } from "react";
import { BsTrash3 } from "react-icons/bs";
import { DarkModeContext } from "../../context/DarkModeContext";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { darkMode } = useContext(DarkModeContext);

  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li
      className={styles.todo}
      style={{ color: darkMode ? "var(--color-dark-grey)" : "var(--color-white)" }}
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <button
        className={styles.button}
        onClick={handleDelete}
        style={{ color: darkMode ? "var(--color-dark-grey)" : "var(--color-react-blue)" }}
      >
        <BsTrash3 />
      </button>
    </li>
  );
}
