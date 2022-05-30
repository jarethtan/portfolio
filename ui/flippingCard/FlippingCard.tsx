import React, { ReactNode } from "react";
import classes from "./FlippingCard.module.css";

const FlippingCard: React.FC<{ children: ReactNode; style: any }> = ({ children, style }) => {
  return (
    <div className={classes.card} style={style}>
      {children}
    </div>
  );
};

export default FlippingCard;
