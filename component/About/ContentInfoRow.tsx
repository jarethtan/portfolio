import React from "react";
import classes from "./ContentInfoRow.module.css";
import Image from "next/image";
import Link from "next/link";

const ContentInfoRow = () => {
  return (
    <div className={classes.contentInfoRow}>
      <div className={classes.imageContent}>
        <Image src="/images/aboutPage/chilling2.jpg" layout="fill" objectFit="fill" className={classes.images} />
      </div>
      <div className={classes.developerContent}>
        <span className={classes.intro}>Hi! I'm Jareth Tan, a Web Developer</span>
        <div className={classes.content}>
          I am a self-starter individual taking a mid-career leap into the world of web development. Being data-driven and choosing to pursue my passion, I took
          a leap of faith to start afresh and focus on one year of intensive self-directed learning in the midst of the pandemic. With a goal of being a
          self-taught web developer, my vision is to create value for my clients by bringing ideas to life. Have a look at my projects and let's connect for any
          future opportunities!
        </div>
        <div className={classes.infoSection}>
          <div className={classes.locationEmail}>
            <div className={classes.location}>
              <b>Location</b>: Vancouver, Canada
            </div>
            <div className={classes.email}>
              <b>Email</b>: Jareth.tan@outlook.com
            </div>
          </div>
          <div className={classes.nationality}>
            <span>
              <b>Nationality</b>: Singapore (Citizen) / Canada (PR)
            </span>
          </div>
        </div>
        <a href="./about/Resume.pdf" className={classes.resumeButton} download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContentInfoRow;
