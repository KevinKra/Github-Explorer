import React, { Component, Fragment } from "react";
import * as apiCalls from "../utils/apiCalls";
import { UserCard } from "../UserCard/UserCard";
import { Spinner } from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    users: [],
    userData: {},
    loading: true,
    sideBar: false
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

  moreInfo = data => {
    const toggle = this.state.sideBar;
    this.setState({ sideBar: !toggle, userData: data });
  };

  renderUserCards = () => {
    const output = this.state.users.map(user => (
      <UserCard user={user} key={user.id} moreInfo={this.moreInfo} />
    ));
    return output;
  };

  render() {
    const { loading, sideBar } = this.state;
    return (
      <Fragment>
        <NavBar searchUsers={this.searchUsers} />
        <main className="Dashboard">
          <section className="user-cards">
            {loading ? <Spinner /> : this.renderUserCards()}
          </section>
          <SideBar sideBar={sideBar} />
        </main>
      </Fragment>
    );
  }
}

export default Dashboard;
