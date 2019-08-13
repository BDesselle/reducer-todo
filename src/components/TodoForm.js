import React from "react";
// Contexts
import { TodoFormContext } from "../contexts/TodoFormContext";

export default function TodoForm() {
  const { value, setValue, handleSubmit } = React.useContext(TodoFormContext);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add a todo..."
        />
      </form>
    </React.Fragment>
  );
}
