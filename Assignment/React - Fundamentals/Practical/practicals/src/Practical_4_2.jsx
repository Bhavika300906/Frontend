import React from 'react'
import { useState } from 'react';

function Practical_4_2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Counter Example</h3>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default Practical_4_2
