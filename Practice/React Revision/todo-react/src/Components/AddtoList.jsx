import React from 'react'
import { useState } from 'react'

function AddtoList({ addToDo }) {
    const [task, setTask] = useState("");
    
    const handleAdd = () => {

        if (task === "") {
            alert("Please Enter the Task");
            return
        }

        addToDo(task);

        setTask("");
    };

    console.log(task);
    return (

        <div className='input-group mb-3'>
            <input type="text" className='form-control'
                placeholder='Enter Task Name' value={task}
                onChange={(e) => setTask(e.target.value)} />

            <button className='btn btn-primary' onClick={handleAdd}>
                Add
            </button>
        </div>


    );
}

export default AddtoList
