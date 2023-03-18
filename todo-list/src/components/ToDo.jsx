import React from "react";
import Main from "./Main";
import Theme from "./Theme";
import DarkModeProvider from "../context/DarkModeContext";
import Icon from "./Icon";
import "../todo.css";

export default function ToDo() {
  return (
    <DarkModeProvider>
      <Theme />
      <Main />
    </DarkModeProvider>
  );
}
