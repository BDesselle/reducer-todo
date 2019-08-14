import React from "react";
import "./App.css";
// Components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// Reducer
import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addItem = (e, item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="todo-list">
          <TodoForm addItem={addItem} />
          <TodoList
            todo={state.todo}
            toggleItem={toggleItem}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
