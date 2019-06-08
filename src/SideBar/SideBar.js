import React, { Component } from "react";
import "./SideBar.scss";

export default class SideBar extends Component {
  render() {
    return (
      <section className="SideBar">
        {this.props.sideBar ? <p>show</p> : <p>hide</p>}
      </section>
    );
  }
}
