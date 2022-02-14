import React, { Component } from "react";

class Overview extends Component {

  render() {
    return (
        <ul>{this.props.items}</ul>
        );
  }
}

export default Overview;
