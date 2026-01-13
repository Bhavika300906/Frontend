import React, { useState, useEffect } from "react";

function Practical_10_2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Runs once when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>User List (useEffect API Fetch)</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practical_10_2;
