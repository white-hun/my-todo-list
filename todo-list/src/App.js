// import { useState } from "react";
// import "./App.css";
// import Header from "./components/Header/Header";
// import TodoList from "./components/TodoList/TodoList";

// const filters = ["all", "completed", "active"];
// function App() {
//   const [filter, setFilter] = useState(filters[0]);
//   return (
//     <div>
//       <Header filters={filters} filter={filter} onFilterChange={(filter) => setFilter(filter)} />
//       <TodoList filter={filter} />
//     </div>
//   );
// }

// export default App;
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
import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "completed", "active"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters={filters} filter={filter} onChangeFilter={(value) => setFilter(value)} />
      <TodoList filter={filter} />
    </div>
  );
}
