import React from 'react'
import { useState } from 'react';

function Practical_6_1() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>

        </div>
    );
}

export default Practical_6_1
