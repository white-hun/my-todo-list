import React from "react";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <div className="nav">
      <h1>My TO-Do</h1>
      <div className="container">
        <All />
        <Active />
        <Completed />
      </div>
    </div>
  );
}
