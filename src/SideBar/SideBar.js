import React, { Component, Fragment } from "react";
import { RepoCard } from "../RepoCard/RepoCard";
import "./SideBar.scss";

export default class SideBar extends Component {
  renderRepos = () => {
    const output = this.props.userRepos.map(repo => {
      return <RepoCard data={repo} key={repo.key} />;
    });
    return output;
  };

  renderUser = () => {
    if (this.props.userData) {
      const {
        avatar_url,
        login,
        html_url,
        location,
        name,
        email,
        followers,
        following,
        bio,
        created_at,
        type,
        blog
      } = this.props.userData;
      const showData = (
        <Fragment>
          <section className="primary-content">
            <img src={avatar_url} alt="" />
            <div className="primary-details">
              <h3 className="sb-title">
                {login} - {name}
              </h3>
              <p>
                <i class="fas fa-map-marker-alt" />
                <span className="sb-location">{location}</span>
              </p>
              <p>Member since: {created_at}</p>
              <p>Membership type: {type}</p>
              <p>Email: {email}</p>
              <p>
                Followers <span className="highlight">{followers}</span>
              </p>
              <p>
                Following <span className="highlight">{following}</span>
              </p>
            </div>
          </section>
          <p>Bio: {bio}</p>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            Github: {html_url}
          </a>
          <a href={blog} target="_blank" rel="noopener noreferrer">
            Website: {blog}
          </a>
          <section className="sb-repos">
            {this.props.userRepos.length > 1 && this.renderRepos()}
          </section>
        </Fragment>
      );
      return showData;
    } else {
      return null;
    }
  };
  render() {
    return (
      <section className="SideBar">
        {this.props.sideBar ? (
          <section
            className={
              this.props.sideBar === 1 ? "sb-user first" : "sb-user next"
            }
          >
            {this.renderUser()}
          </section>
        ) : (
          <p>hide</p>
        )}
      </section>
    );
  }
}
