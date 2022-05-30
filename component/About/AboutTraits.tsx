import React from "react";
import classes from "./AboutTraits.module.css";
import Image from "next/image";

const AboutTraits: React.FC<{ trait: string; icon: string; content: string }> = ({ trait, icon, content }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <Image src={`/images/aboutPage/${icon}.png`} height={100} width={100} className={classes.image} />
      </div>
      <span className={classes.title}>{trait}</span>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default AboutTraits;
