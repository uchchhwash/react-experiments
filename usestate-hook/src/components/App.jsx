import React, { useState } from "react";
import Time from "./Time";
function App() {
  const [counter, setCount] = useState(0);

  function increase() {
    setCount(counter + 1);
  }
  function decrease() {
    setCount(counter - 1);
  }
  return (
    <div className="container">
      <Time />
      <h1>{counter}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
