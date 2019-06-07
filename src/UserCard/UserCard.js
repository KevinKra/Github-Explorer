import React from "react";
import "./UserCard.scss";
import PropTypes from "prop-types";

export const UserCard = props => {
  return (
    <article className="UserCard">
      <img src="" alt="" />
      <h3>{props.user.login}</h3>
    </article>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};
