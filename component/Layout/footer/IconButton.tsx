import classes from "./IconButton.module.css";
import React, { Fragment } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const IconButton = () => {
  const icons = [<FaLinkedin className={classes.iconImage} />, <FaGithub className={classes.iconImage} />, <FaInstagram className={classes.iconImage} />];
  return (
    <div className={classes.iconContainer}>
      {/* {icons.map((icon, i) => (
        <Link href="/" key={i}>
          <a className={classes.icon}>
            <Image src={`/images/${icon}.svg`} width={45} height={45} />
          </a>
        </Link>
      ))} */}
      {icons.map((icon, i) => (
        <div className={classes.icon} key={i}>
          <Link href="#">
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {icon}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IconButton;
