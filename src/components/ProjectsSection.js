import React from "react";
import projectsList from "../ProjectContent";
import Project from "./Project";

function ProjectsSection(props) {
  const projectsToDisplay = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));

  return (
    <>
      <section id="recentWork" className="section">
        <h1>Recent Work</h1>
        <div className="gridContainer">{projectsToDisplay}</div>
      </section>

      {/* <button type="button" className="collapsibleBtn">
          <i
            onClick="toggleIcon(this)"
            className="fas fa-chevron-down"
            id="icon"
            style="color: rgb(75, 75, 75)"
          ></i
          ><span id="span">&nbsp View Full Portfolio</span>
        </button> */}
    </>
  );
}

export default ProjectsSection;
