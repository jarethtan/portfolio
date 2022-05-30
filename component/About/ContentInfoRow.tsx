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
        <span className={classes.intro}>Hi! I'm Jareth Tan, a Full Stack Developer</span>
        <div className={classes.content}>
          I am a self-starter and data driven individual taking a mid-career leap into the world of web development. During the pandemic, I decided to take a
          leap of faith and undergo one year of intensive self-directed learning to be a self-taught web developer. My vision is to create value for my clients
          by bringing ideas to life through my expertise and creativity. Have a look at my portfolio and let's connect for any future opportunities!
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
        <a href="./info/resume.pdf" className={classes.resumeButton} download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContentInfoRow;
