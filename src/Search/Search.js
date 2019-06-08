import React, { Component } from "react";

export default class Search extends Component {
  state = {
    username: ""
  };

  captureInput = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };
  render() {
    return (
      <form>
        <input type="text" name="search" placeholder="Search for a user..." />
        <button>Submit</button>
      </form>
    );
  }
}
