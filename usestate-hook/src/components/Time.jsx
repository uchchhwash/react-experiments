import React, { useState } from "react";

function Time() {
  const [time, setState] = useState(new Date().toLocaleTimeString());
  function triggerClock() {
    setState(new Date().toLocaleTimeString());
  }
  return (
    <div>
      <p style={{ visibility: "hidden" }}>{setInterval(triggerClock, 1000)}</p>
      <h2 style={{ fontSize: "3rem" }}>{time}</h2>
    </div>
  );
}

export default Time;
