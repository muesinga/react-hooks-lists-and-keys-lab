import React from "react";

function ProjectItem({ name, about, technologies }) {
  // const technologyList = technologies.map((technology) => {
  //   return <span key={project.id}>{technology.name}</span>
  // });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* <p>{technologyList}</p> */}
      </div>
    </div>
  );
}

export default ProjectItem; 
