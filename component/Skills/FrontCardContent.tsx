import React from "react";
import classes from "./FrontCardContent.module.css";
import Image from "next/image";

const FrontCardContent: React.FC<{ image: string; title: string; legend: string; content: string }> = ({ image, title, legend, content }) => {
  return (
    <fieldset className={classes.cardFrontContent}>
      <legend className={classes.legend}>{legend}</legend>
      <div className={classes.imageContent}>
        <Image src={`/images/skillPage/${image}.png`} objectFit="fill" layout="fill" />
      </div>
      <span className={classes.skillTitle}>{title}</span>
      <div className={classes.skillContent}>{content}</div>
    </fieldset>
  );
};

export default FrontCardContent;
