import React, { useRef, useState } from "react";

export default function Form() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([
    {
      id: 1,
      text: "청소하기",
    },
  ]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const id = useRef(2);
  const onSubmit = (e) => {
    e.preventDefault();
    toDo !== "" && setTodos(toDos.concat({ text: toDo }));
    id.current++;
    setTodo("");
    console.log(toDos);
  };
  return (
    <div>
      <ul>
        {toDos.map((prev) => (
          <li>{prev.text}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write & enter" value={toDo} onChange={onChange} />
        <button>제출</button>
      </form>
    </div>
  );
}
