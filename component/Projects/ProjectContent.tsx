import React from "react";
import classes from "./ProjectContent.module.css";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { AiOutlineEye } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

const ProjectContent: React.FC<{ skills: string[]; description: string; links: string[] }> = ({ skills, description, links }) => {
  return (
    <div className={classes.content}>
      <div className={classes.text}>{description}</div>
      <div className={classes.skills}>
        {skills.map((skill, i) => (
          <span key={i} className={classes.skill}>
            {skill}
            <TiTick className={classes.tick} />
          </span>
        ))}
        <div className={classes.buttons}>
          <Link href={links[0]}>
            <a>
              <AiOutlineEye className={classes.icon} />
              <span>View</span> Demo
            </a>
          </Link>
          <Link href={links[1]}>
            <a>
              <BsCode className={classes.icon} />
              <span>Source</span> Code
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
