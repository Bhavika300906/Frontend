import React from 'react'

function D({name,setName}) {
  return (
    <div>
       <h1>hello D Component</h1>
       <h1>D : {name}</h1>
       <button onClick={()=>setName("Ikky")}>Change name</button>
    </div>
  )
}

export default D