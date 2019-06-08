import React, { Component } from "react";
import * as apiCalls from "../utils/apiCalls";
import { UserCard } from "../UserCard/UserCard";
import { Spinner } from "../Spinner/Spinner";
import "./Dashboard.scss";

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
    const userCards = this.renderUserCards();
    return (
      <main className="Dashboard">
        <h3>Dashboard</h3>
        <section className="user-cards">
          {this.state.loading ? <Spinner /> : userCards}
        </section>
      </main>
    );
  }
}

export default Dashboard;
