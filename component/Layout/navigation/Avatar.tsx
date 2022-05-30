import React, { Fragment } from "react";
import classes from "./Avatar.module.css";
import Image from "next/image";
import { ImLocation2 } from "react-icons/im";

const Avatar = () => {
  return (
    <Fragment>
      <div className={classes.avatar}>
        <Image src="/images/layout/jareth.jpg" layout="fill" objectFit="fill" className={classes.image} />
      </div>
      <span className={classes.name}>Jareth Tan</span>
      <span className={classes.nameCollapse}>J.T</span>
      <span className={classes.message}>Open To Opportunities</span>
    </Fragment>
  );
};

export default Avatar;
