import React, { Component, Fragment } from "react";
import "./SideBar.scss";

export default class SideBar extends Component {
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
          <h3>
            {login} - {name}
          </h3>
          <section className="primary-content">
            <img src={avatar_url} alt="" />
            <div className="primary-details">
              <p>Member since: {created_at}</p>
              <p>Membership type: {type}</p>
              <p>Currently in: {location}</p>
              <p>Email: {email}</p>
              <p>
                Followers <span>{followers}</span>
              </p>
              <p>
                Following <span>{following}</span>
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
        {/* {this.props.sideBar ? <p>show</p> : <p>hide</p>} */}
        {this.props.sideBar ? (
          <section className="sb-user">{this.renderUser()}</section>
        ) : (
          <p>hide</p>
        )}
      </section>
    );
  }
}
