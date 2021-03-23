import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <span>{count}</span>
      <button className="add-1" onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button className="add-10" onClick={() => setCount(count + 10)}>
        Add 10
      </button>
      <button
        className="subtract-1"
        disabled={count < 1}
        onClick={() => setCount(count - 1 || 0)}
      >
        Subtract 1
      </button>
      <button
        className="subtract-10"
        disabled={count < 1}
        onClick={() => setCount(count - 10 || 0)}
      >
        Subtract 10
      </button>
      <button
        className="reset"
        disabled={count === 0}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
