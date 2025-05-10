import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter( 
        (item, index) => {
          return index != id
        });
    });
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
          value={inputText}
        />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <ToDoItem 
            key={index}
            text={toDoItem}
            id={index} 
            onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
