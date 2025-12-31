import { useState } from 'react'
import B from './B'


function A() {

    const [name, setName] = useState("Bhavika")

    return (
        <div>
            <h1>Hello Component A</h1>
            <h1>A: {name}</h1>
            <B name={name} setName={setName} />
        </div>
    )
}

export default A
