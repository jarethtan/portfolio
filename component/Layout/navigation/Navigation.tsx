import React from "react";
import classes from "./Navigation.module.css";
import Link from "next/link";
import Avatar from "./Avatar";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";

const Navigation = () => {
  const navTitle = ["Home", "About", "Skills", "Projects", "Contact"];
  const navLink = ["/", "/about", "/skills", "/projects", "/contact"];
  const navIconNames = [
    <AiOutlineHome className={classes.icon} tabIndex={1} />,
    <IoIosContact className={classes.icon} tabIndex={1} />,
    <BsTools className={classes.icon} tabIndex={1} />,
    <AiOutlineProject className={classes.icon} tabIndex={1} />,
    <MdOutlineContactPhone className={classes.icon} tabIndex={1} />,
  ];
  const navIconNamesCollapse = [
    <AiOutlineHome className={classes.iconCollapse} tabIndex={1} />,
    <IoIosContact className={classes.iconCollapse} tabIndex={1} />,
    <BsTools className={classes.iconCollapse} tabIndex={1} />,
    <AiOutlineProject className={classes.iconCollapse} tabIndex={1} />,
    <MdOutlineContactPhone className={classes.iconCollapse} tabIndex={1} />,
  ];
  return (
    <div className={classes.sidebarMenu}>
      <Avatar />
      {navTitle.map((name, i) => (
        <Link href={navLink[i]} key={i}>
          <a className={classes.linkIconsUncollapse}>
            {navIconNames[i]}
            <span className={classes.text} tabIndex={1}>
              {name}
            </span>
          </a>
        </Link>
      ))}
      {navTitle.map((name, i) => (
        <Link href={navLink[i]} key={i}>
          <a className={classes.linkIconsCollapse}>{navIconNamesCollapse[i]}</a>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
