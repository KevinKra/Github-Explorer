import React, { Component } from "react";

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
    e.currentTarget.reset();
    this.props.searchUsers(this.state.search);
    this.setState({ search: "" });
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
