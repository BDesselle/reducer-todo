import React from "react";
// Contexts
import { TodoContext } from "../contexts/TodoContext";

export default function Todo() {
  const { index, todo, completeTodo, removeTodo } = React.useContext(
    TodoContext
  );
  return (
    <React.Fragment>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    </React.Fragment>
  );
}
