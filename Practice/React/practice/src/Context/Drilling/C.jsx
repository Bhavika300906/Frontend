import React from 'react'
import D from './D'

function C({name,setName}) {
    return (
        <div>
            <h1>C Component</h1>

            <D name={name} setName={setName} />
        </div>
    )
}

export default C
