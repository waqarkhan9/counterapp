import { useState } from "react";

import "./style.css";

function App() {
  const [counter, setCounter] = useState(0);

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

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <div className="counter">
          <h1>{counter}</h1>
        </div>
        <button className="IncrementButton" onClick={increment}>
          Increment
        </button>
        <button className="DecrementButton" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
