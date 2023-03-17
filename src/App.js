import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { TodoCunter } from "./srcs/TodoCounter";
import { TodoItem } from "./srcs/TodoItem";
import { TodoList } from "./srcs/TodoList";
import { TodoSearch } from "./srcs/TodoSearch";
import { CreateTodoButtom } from "./srcs/CreateTodoButton";

const todos = [
  { text: "Cortar la cebolla", completed: false },
  { text: "llorar", completed: false },
  { text: "lalalaal", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCunter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
  {
    /* //sintaxis mas comoda jx
    si ponemos {} podemos usar js en las etiquetas de html  {logo}
    className != class of js */
  }
  {
    /* <TodoCunter/>
    <TodoSearch/>
    <TodoList>
     <TodoItem/> 
    <TodoList/>
    <CreateTodoButoom/> */
  }
}

export default App;
