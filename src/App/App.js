import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Splash from "../Splash/Splash";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Route exact path="/" component={Splash} />
        <Route exact path="/dashboard" component={Dashboard} />
      </main>
    );
  }
}

export default App;
