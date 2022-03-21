import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
 
  const increment = () => setCount(count + 1);
  const decreasement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <span style={{color}} className="value">{count}</span>
        <div className="btn-group">
          <button onClick={decreasement} className="btn btn-decrease">
            DECREASE
          </button>
          <button onClick={reset} className="btn btn-reset">
            RESET
          </button>
          <button onClick={increment} className="btn btn-increase">
            INCRESE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
