import React, { useState } from "react"
import ImageCompo from "./ImageCompo"

function FunuseState() {

    const [name, setname] = useState("Bhavika")
    const [count, setcount] = useState(0)
    const [image, setimage] = useState(true)
    


    return (
        <div>
            <h1>
                name = {name}
            </h1>

            <button onClick={() => { setname("ABCD") }}>
                Change Name
            </button>
            <br />
            <h1>
                Count:  {count}
            </h1>

            <button onClick={() => { setcount(count + 1) }}>
                Incerement
            </button>

            <button onClick={() => { setcount(count - 1) }}>
                Decrement
            </button>

            <button onClick={() => { setcount(0) }}>
                Zero
            </button>

            <hr />

            <button onClick={() => { setimage(false) }}>
                Hide
            </button>

            <button onClick={() => { setimage(true) }}>
                Show
            </button>

            <button onClick={() => { setimage(!image) }}>
                Toggle
            </button>
            <hr />

            {
                image ? <ImageCompo /> : false

            }



        </div>
    )
}

export default FunuseState