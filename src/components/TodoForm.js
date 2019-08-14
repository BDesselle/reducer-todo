import React, { useState } from "react";

export default function TodoForm(props) {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem({ [e.target.name]: e.target.value });
  };

  const submitItem = e => {
    console.log(props.addItem);
    e.preventDefault();
    setItem({ item: "" });
    props.addItem(e, item);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitItem}>
          <input
            placeholder="Add a task..."
            type="text"
            value={item.item}
            name="item"
            onChange={handleChanges}
          />
        </form>
      </div>
    </React.Fragment>
  );
}
