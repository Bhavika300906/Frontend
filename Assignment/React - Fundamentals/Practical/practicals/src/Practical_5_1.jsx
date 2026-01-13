import React, { useState } from 'react'

function Practical_5_1() {

const[text,setText]=useState("Not Clicked");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Clicked")}>
        Click Me
      </button>
    </div>
  )
}

export default Practical_5_1
