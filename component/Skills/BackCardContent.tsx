import React from "react";
import classes from "./BackCardContent.module.css";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const BackCardContent: React.FC<{ backContent: string[][] }> = ({ backContent }) => {
  return (
    <div className={classes.cardBackContent}>
      <span>Related Projects</span>
      {backContent.map((skillContent, i) => (
        <div key={i}>
          <Link href={skillContent[1]}>
            <button className={classes.projButton}>{skillContent[0]}</button>
          </Link>
          <Link href={skillContent[2]}>
            <a>
              <BsGithub className={classes.gitIcon} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BackCardContent;
