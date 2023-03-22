// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function AddTodo({ onAdd }) {
//   const [text, setText] = useState("");
//   const handleChange = (e) => setText(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim().length === 0) {
//       return;
//     }
//     onAdd({ id: uuidv4(), text: text, status: "active" });
//     setText("");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="write & enter" value={text} onChange={handleChange} />
//       <button>Submit</button>
//     </form>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//-------------------------------------------------------------------
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="write & enter" value={text} onChange={handleChange} />
      <button>추가</button>
    </form>
  );
}
