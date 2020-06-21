import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    isMouseOver ? setMouseOver(false) : setMouseOver(true);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
