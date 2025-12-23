import React from 'react'
import C from './C'

function B({ name, setName }) {
    return (
        <div>
            <h1>hello B Component</h1>
            <h1>B : {name}</h1>
            <button onClick={() => setName("Niky")}>Change name2</button>
            <C name={name} setName={setName} />
        </div>
    )
}

export default B