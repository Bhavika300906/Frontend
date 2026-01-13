import React, { useState } from "react";

function Practical_10_1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter using useState</h3>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Practical_10_1;
