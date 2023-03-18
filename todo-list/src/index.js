import React from "react";
import ReactDOM from "react-dom/client";
import DarkModeContext from "./context/DarkModeContext";
import "./index.css";
// import App from "./App";
import ToDo from "./components/ToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);
