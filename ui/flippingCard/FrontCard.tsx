import React, { ReactNode } from "react";
import classes from "./FrontCard.module.css";

const FrontCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.cardFront}>{children}</div>;
};

export default FrontCard;
