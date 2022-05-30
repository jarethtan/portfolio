import React from "react";
import AboutTraits from "./AboutTraits";
import classes from "./TraitsRow.module.css";
import { traits, traitsIcon, traitsContent } from "../../public/about/aboutInfo";

const TraitsRow = () => {
  return (
    <div className={classes.traitsRow}>
      {traits.map((trait, i) => (
        <div key={i}>
          <AboutTraits trait={trait} icon={traitsIcon[i]} content={traitsContent[i]} />
        </div>
      ))}
    </div>
  );
};

export default TraitsRow;
