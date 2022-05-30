import React, { ReactNode } from "react";
import classes from "./BackCard.module.css";

const BackCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.cardBack}>{children}</div>;
};

export default BackCard;
