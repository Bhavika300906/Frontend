import React, { useState } from "react"
import ImageCompo from "./ImageCompo"

function FunObjData() {

    const [data, setdata] = useState({
        name: "Bhavika",
        count: 0,
        image: true

    })

    return (
        <div>
            <h1>
                Name:{data.name}
            </h1>

            <button onClick={() => setdata({ ...data, name: "Niky" })}>
                Change Name
            </button>

            <h1>
                Count : {data.count}
            </h1>

            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>
                Increment
            </button>

            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>
                Decrement
            </button>

            <button onClick={() => setdata({ ...data, count: 0 })}>
                Zero
            </button>
            <hr />
            <br />
            <button onClick={() => setdata({ ...data, image: false })}>
                Hide 
            </button>

            <button onClick={() => setdata({ ...data, image: true })}>
                Show
            </button>
            
            <button onClick={() => setdata({ ...data, image: !data.image })}>
                Toggle
            </button>


            {
                data.image ? <ImageCompo /> : false

            }

        </div>
    )
}

export default FunObjData