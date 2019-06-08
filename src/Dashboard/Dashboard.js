import React, { Component } from "react";
import * as apiCalls from "../utils/apiCalls";
import { UserCard } from "../UserCard/UserCard";

class Dashboard extends Component {
  state = {
    users: [],
    loading: true
  };
  async componentDidMount() {
    const users = await apiCalls.collectUsers();
    this.setState({ users, loading: false });
  }

  renderUserCards = () => {
    return this.state.users.map(user => <UserCard user={user} key={user.id} />);
  };
  render() {
    return (
      <div>
        <div>{this.renderUserCards()}</div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
