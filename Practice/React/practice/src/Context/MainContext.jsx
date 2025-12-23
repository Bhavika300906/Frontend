import React from 'react'
import A from './Drilling/A'
import C from './Drilling/C'
import ClassA from './UseContext/ClassA'

function MainContext() {
    return (
        <div>

            <h1>Hello this Context data</h1>

            {/* drilling */}
            <A />

            {/* useContext */}
            <ClassA />
        </div>
    )
}

export default MainContext
