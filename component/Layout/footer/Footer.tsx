import React from "react";
import classes from "./Footer.module.css";
import IconButton from "./IconButton";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <span className={classes.text1}>
        Copyright &copy; 2022, Created by&nbsp;<span className={classes.text2}>Jareth</span>
      </span>
      <span className={classes.text3}>
        <span className={classes.text4}>Jareth&nbsp;</span>&copy; 2022
      </span>
      <span className={classes.title}>
        <span className={classes.name}>Jareth's&nbsp;</span> Personal Portfolio
      </span>
      <IconButton />
    </div>
  );
};

export default Footer;
