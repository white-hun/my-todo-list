import { useState } from "react";
import Header from "./components/Header/Header";
import Icon from "./components/Icon";
import TodoList from "./components/TodoList/TodoList";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onChangeFilter={(value) => setFilter(value)} />
      <Icon />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
