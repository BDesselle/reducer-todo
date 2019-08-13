import React from "react";
import "./App.css";
// Components
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
// Contexts
import { TodoContext } from "./contexts/TodoContext";
import { TodoFormContext } from "./contexts/TodoFormContext";

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Take out the trash",
      isCompleted: false
    },
    {
      text: "Wash the car",
      isCompleted: false
    },
    {
      text: "Cut the grass",
      isCompleted: false
    },
    {
      text: "Go grocery shopping",
      isCompleted: false
    }
  ]);

  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log("%cTodo Added 👍", "color: green; font-weight: bold;");
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    console.log("%cTodo Completed 👍", "color: green; font-weight: bold;");
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log("%cTodo Deleted 👍", "color: green; font-weight: bold;");
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoContext.Provider
              value={{ index, todo, completeTodo, removeTodo }}
              key={index}
            >
              <Todo />
            </TodoContext.Provider>
          ))}
          <TodoFormContext.Provider
            value={{ value, setValue, addTodo, handleSubmit }}
          >
            <TodoForm />
          </TodoFormContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
