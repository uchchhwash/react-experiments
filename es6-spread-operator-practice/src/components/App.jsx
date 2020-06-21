import React, { useState } from "react";
function App() {
  const [todoInput, setTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  function addTodo() {
    setTodoItems(prevItems => [...todoItems, todoInput]);
    setTodo("");
  }
  function todo(event) {
    setTodo(event.target.value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todoInput} onChange={todo} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map(todo => (
            <li> {todo} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
