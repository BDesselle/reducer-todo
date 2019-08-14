import React from "react";

export default function Todo(props) {
  const completedStyle = {
    textDecoration: props.item.completed ? "line-through" : ""
  };

  return (
    <React.Fragment>
      <div
        className="todo"
        style={completedStyle}
        onClick={() => props.toggleItem(props.item.id)}
      >
        {props.item.name}
      </div>
    </React.Fragment>
  );
}
