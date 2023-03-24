import React from "react";
import { BsTrash3 } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
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
      <button className={styles.button} onClick={handleDelete}>
        <BsTrash3 />
      </button>
    </li>
  );
}
