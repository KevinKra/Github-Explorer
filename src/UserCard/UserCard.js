import React, { Component } from "react";
import "./UserCard.scss";
import * as apiCalls from "../utils/apiCalls";
import * as helpers from "../utils/helpers";
import PropTypes from "prop-types";

export class UserCard extends Component {
  state = {
    rawData: {},
    userData: [],
    expanded: false
  };
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  toggleCardExpand = async () => {
    const toggle = this.state.expanded;
    if (this.state.userData.length === 0) {
      const data = await apiCalls.collectUser(this.props.user.login);
      const filteredData = {
        blog: data.blog,
        email: data.email,
        followers: data.followers,
        following: data.following,
        location: data.location,
        name: data.name,
        url: data.url,
        bio: data.bio
      };
      const userData = helpers.handleEmptyData(filteredData);
      this.setState({ expanded: !toggle, userData, rawData: data });
      return;
    }
    this.setState({ expanded: !toggle });
  };

  render() {
    const { avatar_url, login } = this.props.user;
    const {
      blog,
      email,
      followers,
      following,
      location,
      name,
      url,
      bio
    } = this.state.userData;

    const expandedDetails = (
      <section className="expanded-content">
        <ul>
          <li className="name">{name}</li>
          <li>
            followers: {followers} | following: {following}
          </li>
          <li>location: {location}</li>
          <li>email: {email}</li>
          <li className="bio">bio: {bio}</li>
        </ul>
        <div className="user-links">
          <button onClick={() => this.props.moreInfo(this.state.rawData)}>
            More Info
          </button>
          <div>
            <a href={`${url}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href={`${blog}`} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link" />
            </a>
          </div>
        </div>
      </section>
    );
    return (
      <article
        className={`UserCard ${this.state.expanded ? "show" : "hidden"}`}
      >
        <section className="primary-content">
          <img src={avatar_url} alt={`user ${login}`} />
          <h3>{login}</h3>
          <button onClick={this.toggleCardExpand}>
            {this.state.expanded ? "Collapse" : "Expand"}
          </button>
        </section>
        {this.state.expanded && expandedDetails}
      </article>
    );
  }
}
