import React, { useState, useRef } from "react";

function Practical_10_4() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // useRef value updates without causing re-render
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h3>useRef to Avoid Re-renders</h3>

      <p>State Count (useState): {count}</p>
      <p>Render Count (useRef): {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment State
      </button>
    </div>
  );
}

export default Practical_10_4;
