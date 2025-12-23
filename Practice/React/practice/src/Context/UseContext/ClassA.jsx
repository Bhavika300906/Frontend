import React, { createContext, useState } from 'react'
import ClassB from './ClassB'
import ClassD from './ClassD'

// conetxt : token : store
export const Data = createContext()


function ClassA() {
    const [name, setname] = useState("Bhavika")
    const [form, setform] = useState({
        count: 0,
        name: "hero"
    })
    return (
        <div>
            Class A
        </div>
    )
}

export default ClassA
