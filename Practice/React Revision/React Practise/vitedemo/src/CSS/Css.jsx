import React from 'react';
import "./exstyle.css" 

function Css(){

    //Internal Css
    const style = {
        color:"Blue"
    }

    return(
        <div>
            <h1 style = {{color:"red"}}>
                {/* Inline CSS */} Inline CSS
            </h1>

            <h1 style={style}>
                {/* Internal CSS */} Internal CSS
            </h1>

            <h1 className='h1' >
                {/* External CSS */} External CSS
            </h1>
        </div>


    )


}

export default Css