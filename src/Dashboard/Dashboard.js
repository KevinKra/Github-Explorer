import React, { Component, Fragment } from "react";
import * as apiCalls from "../utils/apiCalls";
import { UserCard } from "../UserCard/UserCard";
import { Spinner } from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    users: [],
    loading: true
  };
  async componentDidMount() {
    const users = await apiCalls.collectUsers("users");
    this.setState({ users, loading: false });
  }

  searchUsers = async search => {
    this.setState({ users: [], loading: true });
    const output = await apiCalls.searchUsers(search);
    this.setState({ users: output.items, loading: false });
  };

  renderUserCards = () => {
    console.log(this.state.users);
    const output = this.state.users.map(user => (
      <UserCard user={user} key={user.id} />
    ));
    return output;
  };

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        <NavBar searchUsers={this.searchUsers} />
        <main className="Dashboard">
          <h3>Dashboard</h3>
          <section className="user-cards">
            {loading ? <Spinner /> : this.renderUserCards()}
          </section>
        </main>
      </Fragment>
    );
  }
}

export default Dashboard;
