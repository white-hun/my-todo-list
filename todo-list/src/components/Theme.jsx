import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import Completed from "./Completed";
import Active from "./Active";
import All from "./All";
import Form from "./Form";

export default function Theme() {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  return (
    <div className="back">
      <div
        className="box"
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#20232a",
          color: theme === "light" ? "#20232a" : "#61dafb",
          transition: "0.3s",
        }}
      >
        <div className="nav">
          <div>
            <button className="theme-button" onClick={toggleTheme}>
              {theme === "light" ? <BsSun /> : <BsMoon />}
            </button>
          </div>
          <h1>My To-Do</h1>
          <div className="container">
            <All />
            <Active />
            <Completed />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
