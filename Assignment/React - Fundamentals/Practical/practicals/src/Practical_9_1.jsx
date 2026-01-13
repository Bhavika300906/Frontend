import React, { Component } from "react";

class Practical_9_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // Fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div>
        <h3>User List (API Data)</h3>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Practical_9_1;