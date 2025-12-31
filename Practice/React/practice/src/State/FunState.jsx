// state : it;s a varibles 
// we can change a data in same file without reresh
// react v16.8 Function : hooks: inbuilt function
// 1) useState : state varible define and use
// hooks reuse : only function use
// const [state,setstate]= useState(initialvalue)

import { useState } from 'react'
import Image from './Image'
function FunState() {
    // define , function state change
    const [name, setname] = useState("bhavika ")
    const [count, setcount] = useState(0)
    const [isImage, setisImage] = useState(true)
    // const fname = () => {
    //     setname(name + "Sonule")
    // }
    const data = () => {
        setcount(count + 4)
    }
    const decdata = () => {
        setcount(count - 4)
    }
    return (
        <div>
            <h1> Hello Name: {name}</h1>
            <button onClick={() => setname("Niky ")}>Change name</button>
            <button onClick={() => setname("Aanchal ")}>Change name 2</button>

            <br />
            <br />
            
            <h1> Hello Count : {count}</h1>
            <button onClick={() => setcount(count + 2)}>increment</button>
            <button onClick={data}>increment by 4</button>
            <button onClick={() => setcount(count - 2)}>Decrement</button>
            <button onClick={decdata}>decrement by 4</button>
            <button onClick={() => setcount(0)}>Zero</button>

            <br />
            <br />

            <button onClick={() => setisImage(false)}> Hide </button>
            <button onClick={() => setisImage(true)}>Show</button>
            <button onClick={() => setisImage(!isImage)}>Toggle</button>
            <br />
            <br />

            {
                isImage ? <Image /> : false
            }
        </div>
    )
}

export default FunState
