import React, { Component } from "react";
import Search from "../Search/Search";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <i>icon</i>
        <h4>Title</h4>
        <Search />
      </nav>
    );
  }
}
