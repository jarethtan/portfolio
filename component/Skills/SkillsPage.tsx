import React from "react";
import classes from "./SkillsPage.module.css";
import Title from "../../ui/Generic/Title";
import EachSkill from "./EachSkill";
import { imagesDescription, skillsTitle, legend, skillsContent, skillsLinksIcons } from "../../public/skills/skillsInfo";

const SkillsPage = () => {
  return (
    <div className={classes.container}>
      <Title>Skills</Title>
      <span className={classes.note}>
        <span>Hover</span> on skills card to see related projects!
      </span>
      <div className={classes.cardContainer}>
        {imagesDescription.map((image, i) => (
          <EachSkill image={image} title={skillsTitle[i]} legend={legend[i]} content={skillsContent[i]} backContent={skillsLinksIcons[i]} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
