import React from "react";
import "./RepoCard.scss";

export const RepoCard = props => {
  return (
    <article className="user-repo">
      <div className="title">
        <h2>{props.data.name}</h2>{" "}
        <a href={props.data.visit} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-link" />
        </a>
      </div>
      <div className="repo-details">
        <div className="repo-primary">
          <h4>Language: {props.data.language || "N/A"}</h4>
          <div className="repo-watchers">
            <i className="far fa-eye" />
            <span>{props.data.watchers}</span>
          </div>
        </div>
        <p className="bio">
          bio: {props.data.description || "No bio provided."}
        </p>
      </div>
      <div className="repo-dates">
        <p>
          <i className="fas fa-plus" /> {props.data.created_at}
        </p>
        <p>
          <i className="fas fa-pencil-alt" /> {props.data.updated_at}
        </p>
      </div>
    </article>
  );
};
