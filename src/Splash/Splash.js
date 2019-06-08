import React, { Component } from "react";
import "./Splash.scss";

export default class Splash extends Component {
  toDashBoard = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div className="Splash">
        <header className="header-content">
          <div className="title-card">
            <h1>Github Explorer</h1>
            <p>
              Search through millions of accounts and see what stories they have
              to share.
            </p>
            <button onClick={this.toDashBoard}>Start Exploring</button>
          </div>
        </header>
        <section>
          <h1>Put content here</h1>
          <p>Something cool</p>
        </section>
      </div>
    );
  }
}
