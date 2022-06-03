import React from "react";
import classes from "./HomeTitle.module.css";

const HomeTitle = () => {
  return (
    <div className={classes.titleContainer}>
      <div className={classes.title}>
        <h2>
          I am a&nbsp;<span>Web Developer</span>
        </h2>
        <h3>Web Developer</h3>
      </div>
    </div>
  );
};

export default HomeTitle;
