import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";
import Icon from "./Icon";

export default function Form() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const { theme } = useContext(DarkModeContext);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    toDo !== "" && setTodos((current) => [...current, toDo]);
    setTodo("");
  };
  const onCheck = () => {};
  const onDelete = () => {};
  return (
    <div>
      <div className="list-box">
        <Icon />
        <ul className="ul">
          {toDos.map((prev, index) => (
            <li
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
                color: theme === "light" ? "#20232a" : "#ffffff",
                transition: "0.3s",
              }}
              className="li"
              key={index}
            >
              <div className="list-item">
                <input className="check-box" type="checkbox" onClick={onCheck}></input>
                {prev}
              </div>
              <button
                className="delete-button"
                onClick={onDelete}
                style={{
                  // backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
                  color: theme === "light" ? "#000000" : "#61dafb",
                  transition: "0.3s",
                }}
              >
                <BsTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit} className="form">
        <input
          className="input"
          type="text"
          placeholder="Write & Enter"
          onChange={onChange}
          value={toDo}
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
            color: theme === "light" ? "#20232a" : "#ffffff",
            transition: "0.3s",
          }}
        ></input>
        <button
          className="submit-button"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
            color: theme === "light" ? "#20232a" : "#ffffff",
            transition: "0.3s",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
