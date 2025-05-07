import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addItem(event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setInputText(value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
