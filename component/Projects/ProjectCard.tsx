import React from "react";
import classes from "./ProjectCard.module.css";
import ProjectContent from "./ProjectContent";
import ProjectVideo from "./ProjectVideo";

const ProjectCard: React.FC<{ name: string; skills: string[]; description: string; links: string[]; element: string[] }> = ({
  name,
  skills,
  description,
  links,
  element,
}) => {
  return (
    <fieldset className={classes.card}>
      <legend className={classes.legend}>{name}</legend>
      <ProjectContent skills={skills} description={description} links={links} />
      <ProjectVideo element={element} />
    </fieldset>
  );
};

export default ProjectCard;
