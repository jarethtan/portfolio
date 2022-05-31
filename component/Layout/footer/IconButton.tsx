import classes from "./IconButton.module.css";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const IconButton = () => {
  const icons = [<FaLinkedin className={classes.iconImage} />, <FaGithub className={classes.iconImage} />, <FaInstagram className={classes.iconImage} />];
  const links = ["https://www.linkedin.com/in/jarethjoshuatanca/", "https://github.com/jarethtan", "https://www.instagram.com/jarethdev/"];
  return (
    <div className={classes.iconContainer}>
      {icons.map((icon, i) => (
        <div className={classes.icon} key={i}>
          <Link href={links[i]}>
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
