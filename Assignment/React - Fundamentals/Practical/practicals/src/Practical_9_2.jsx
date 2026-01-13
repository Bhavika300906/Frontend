import React, { Component } from "react";

class Practical_9_2 extends Component {
  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
      <div>
        <h3>Lifecycle Update & Unmount Demo</h3>
        <p>Open console to see lifecycle logs.</p>
      </div>
    );
  }
}

export default Practical_9_2
