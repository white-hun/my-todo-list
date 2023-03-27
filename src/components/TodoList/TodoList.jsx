import React, { useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItem(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      {/* <Icon /> */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((value) => value.status === filter);
}

function readTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
