import React from 'react'
import { useState } from 'react';

function Practical_5_2() {

    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="Type something"
                onChange={(e) => setValue(e.target.value)}
            />
            <p>You typed: {value}</p>
        </div>
    )
}

export default Practical_5_2
