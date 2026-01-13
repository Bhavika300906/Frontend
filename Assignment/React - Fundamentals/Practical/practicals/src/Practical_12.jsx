import { useState, useEffect } from "react";
import axios from "axios";

function Practical_12() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // GET USERS
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ADD USER (POST)
  const handleAdd = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/users",
        newUser
      );
      setUsers([...users, res.data]);
      setNewUser({ name: "", email: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE USER
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  //  UPDATE USER (PUT)
  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/users/${id}`,
        updatedData
      );
      setUsers(users.map((u) => (u.id === id ? res.data : u)));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users (JSON-Server CRUD)</h2>

      <input
        placeholder="Name"
        value={newUser.name}
        onChange={(e) =>
          setNewUser({ ...newUser, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={newUser.email}
        onChange={(e) =>
          setNewUser({ ...newUser, email: e.target.value })
        }
      />

      <button onClick={handleAdd}>Add User</button>

      <table border="1" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>
                  Delete
                </button>
                <button
                  onClick={() =>
                    handleUpdate(u.id, {
                      ...u,
                      name: u.name + " Updated",
                    })
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Practical_12;
