import React, { Component } from "react";
// import { searchUsers } from "../utils/apiCalls";

export default class Search extends Component {
  state = {
    search: ""
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.search);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search for a user..."
          onChange={this.captureInput}
        />
        <button>Submit</button>
      </form>
    );
  }
}
