import React, { useState } from 'react'
import Image from './Image';
function Funcob() {

    const [data, setdata] = useState({
        name: "Bhavika",
        count: 0,
        isImage: true
    })

    console.log(data)
    return (
        <div>
            <h1>hello name: {data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "Aanchal" })}>Chnage name</button>
            <button onClick={() => setdata({ ...data, name: "Niky" })}>Change name 2</button>

            <br /><br />
            <h1>Hello count : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 4 })}>Increasae by 4</button>
            <button onClick={() => setdata({ ...data, count: data.count - 4 })}>Decrease by 4</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>

            <br /><br />
            <button onClick={() => setdata({ ...data, isImage: false })}>Hide Image</button>
            <button onClick={() => setdata({ ...data, isImage: true })}>Show Image</button>
            <button onClick={() => setdata({ ...data, isImage: !data.isImage })}>Toggle Image</button>

            <br /><br />
            {
                data.isImage ? <Image /> : false
            }
        </div>

    )
}

export default Funcob