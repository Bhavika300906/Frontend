import React from 'react'

function Practical_4_1({ name, age, location }) {
    return (
        <div>
            <div style={{
                color: "#000304ff",
                backgroundColor: "#34ddecff",
                border: "3px solid #011039ff",
                padding: "20px",
                width: "250px",
                borderRadius: "5px"
            }}>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    )
}

export default Practical_4_1
