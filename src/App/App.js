import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../NavBar/NavBar";
import Splash from "../Splash/Splash";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Route path="/" component={Splash} />
        <Route path="/main" component={NavBar} />
        <Route path="/main" component={Dashboard} />
      </main>
    );
  }
}

export default App;
