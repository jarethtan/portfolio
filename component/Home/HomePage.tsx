import React from "react";
import classes from "./HomePage.module.css";
import Image from "next/image";
import Name from "./HomeName";
import Title from "./HomeTitle";
import ContactButton from "./HomeContact";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.homeImage1}>
        <Image src="/static/img/homepic1.jpg" objectFit="fill" layout="fill" />
      </div>
      <div className={classes.homeImage2}>
        <Image src="/static/img/homepic2.jpg" objectFit="fill" layout="fill" />
      </div>
      <div className={classes.homeImage3}>
        <Image src="/static/img/homepic3.jpg" objectFit="fill" layout="fill" />
      </div>
      <div className={classes.homeImage4}>
        <Image src="/static/img/homepic4.jpg" objectFit="fill" layout="fill" />
      </div>
      <div className={classes.cover}></div>
      <Name />
      <Title />
      <ContactButton />
    </div>
  );
};

export default HomePage;
