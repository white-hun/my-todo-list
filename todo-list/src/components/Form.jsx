import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import Icon from "./Icon";

export default function Form() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    toDo !== "" && setTodos((current) => [toDo, ...current]);
    setTodo("");
    // if (toDo === "") {
    //   return;
    // }
    // setTodos((current) => [toDo, ...current]);
    // setTodo("");
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onCheck = () => {};
  const onDelete = () => {};
  return (
    <div>
      <div className="list-box">
        <Icon />
        <ul className="ul">
          {toDos.map((prev, index) => (
            <li className="li" key={index}>
              <div className="list-item">
                <input className="check-box" type="checkbox" onClick={onCheck}></input>
                {prev}
              </div>
              <button className="delete-button" onClick={onDelete}>
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
        ></input>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
