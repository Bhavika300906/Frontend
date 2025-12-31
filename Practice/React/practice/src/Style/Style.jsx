import React from "react";
import "./style.css";

function Style() {

    const internalcss = {
        background: "red",
        color: "white",
    }

    return (
        <>
            <h1>Hello this style tag here</h1>
            {/* style 
            1) inline css 
            2) internall css js not use 
            3) external css
            */}

            {/* style attriubte */}
            <h1 style={{ background: "blue", color: "white", padding: "40px" }}>hello this inline css</h1>


            <h1 style={internalcss}>hello this internal css</h1>

            <h1>Hkishdifhi</h1>

            <h1 className="ab">Hello this external css</h1>

        </>
    )
}
export default Style;