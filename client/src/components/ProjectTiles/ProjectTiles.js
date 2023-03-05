import React from "react";

export default function ProjectTiles(props) {
  return (
    <div className="project-tile">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="button-container">
        <button className="update-button" onClick={props.handleClick}>
          UPDATE
        </button>
        <button className="delete-button" onClick={props.handleDeleteClick}>
          DELETE
        </button>
      </div>
    </div>
  );
}
