import React from "react";
import classes from "./AboutPage.module.css";
import Title from "../../ui/Generic/Title";
import TraitsRow from "./TraitsRow";
import ContentInfoRow from "./ContentInfoRow";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={classes.container}>
      <Title>About Me</Title>
      <div className={classes.imageContent}>
        <Image src="/images/aboutPage/chilling2.jpg" layout="fill" objectFit="fill" className={classes.images} />
      </div>
      <TraitsRow />
      <ContentInfoRow />
    </div>
  );
};

export default AboutPage;
