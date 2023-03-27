import React from "react";
import { BsTrash3 } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
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
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={`${styles.text} ${status === "completed" && styles.selected}`}>
        {text}
      </label>
      <button className={styles.button} onClick={handleDelete}>
        <BsTrash3 />
      </button>
    </li>
  );
}

// export const todayFormal = () => {
//   let now = new Date();
//   let todayYear = now.getFullYear();
//   let todayMonth = (now.getMonth() + 1) > 9? (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
//     let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
//     return todayYear + '-' + todayMonth + '-' + todayDate;
//   }
