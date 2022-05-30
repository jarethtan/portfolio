import React, { ReactNode } from "react";
import classes from "./Title.module.css";

const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span className={classes.title}>{children}</span>;
};

export default Title;
