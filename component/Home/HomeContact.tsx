import React from "react";
import classes from "./HomeContact.module.css";
import Link from "next/link";

const HomeContact = () => {
  return (
    <Link href="/contact">
      <button data-hover="Lets Go!" className={classes.contactButton}>
        <div>Contact Me</div>
      </button>
    </Link>
  );
};

export default HomeContact;
