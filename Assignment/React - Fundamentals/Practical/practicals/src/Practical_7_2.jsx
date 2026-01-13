import React from 'react'

function Practical_7_2() {
    const users = [
        { id: 1, name: "Amit" },
        { id: 2, name: "Neha" },
        { id: 3, name: "Rahul" }
    ];
    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Practical_7_2
