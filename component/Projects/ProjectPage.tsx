import React from "react";
import classes from "./ProjectPage.module.css";
import Title from "../../ui/Generic/Title";
import ProjectCard from "./ProjectCard";
import { projectsName, projectSkill, projectsDescription, projectLinks, projectVideoOrImage } from "../../public/projects/projectsInfo";

const ProjectPage = () => {
  return (
    <div className={classes.container}>
      <Title>Projects</Title>
      {projectsName.map((name, i) => (
        <ProjectCard
          name={name}
          skills={projectSkill[i]}
          description={projectsDescription[i]}
          links={projectLinks[i]}
          element={projectVideoOrImage[i]}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProjectPage;
