import React, { useState } from "react";

function Project({ project }) {
  return (
    <>
      <div className="tile">
        <div className="imgContainer">
          <img
            src={project.image}
            alt={project.alt_text}
            className="thumbnail"
          />
          <div className="middle">
            <div className="viewButton">
              <a href={project.repository} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </div>
        </div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </>
  );
}

export default Project;
