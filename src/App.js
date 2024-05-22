import { useState } from "react";
import React from "react";

import "./style.css";

function App() {
  const initialValue = 0;
  var [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  const reset = () => {
    setCounter((counter = initialValue));
  };

  return (
    <div className="App">
      <h1 className="title">COUNTER</h1>
      <div className="counter"> {counter}</div>

      <button className="IncrementButton" onClick={increment}>
        Increment
      </button>
      <button className="DecrementButton" onClick={decrement}>
        Decrement
      </button>
      <button className="ResetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
