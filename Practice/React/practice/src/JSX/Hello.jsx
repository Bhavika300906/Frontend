// jsx: javascript syntax xml / extisibles 
// jsx : you can Html read and write
// jsx html allow 
// jsx vs js : 0.1 s fast
// jsx console write before return
// varibale ,state : pass in {}
// <></> fregment

import React from 'react'

function Hello() {

    let name = "Bhavika";
    console.log(name);

    const stu = {
        id: 1,
        name: "Bhavika",
        course: "React"
    }
    const htmldata = <ol>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item </li>
        <li>Fourth Item </li>
    </ol>

    return (
        <div>
            <h1>Hello this is JSX component</h1>
            <h1>hello name : {name}</h1>
            <h1>hello stu : {stu.course}</h1>
            <h2>{72 + 28}</h2>

            {/* to allow html data in js coumpolsory to write in { } */}
            {htmldata}
        </div>

    )
}

export default Hello
