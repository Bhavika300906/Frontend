import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar
