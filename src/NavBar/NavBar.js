import React, { Component } from "react";
import Search from "../Search/Search";
import "./NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <i className="fab fa-github logo" />
        <h3>GitHub - Explorer</h3>
        <Search searchUsers={this.props.searchUsers} />
      </nav>
    );
  }
}
