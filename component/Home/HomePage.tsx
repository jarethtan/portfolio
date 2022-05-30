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
        <Image src="/images/homepage/homepic1.jpg" width="1500" height="944" />
      </div>
      <div className={classes.homeImage2}>
        <Image src="/images/homepage/homepic2.jpg" width="100vw" height="100vh" />
      </div>
      <div className={classes.homeImage3}>
        <Image src="/images/homepage/homepic3.jpg" width="100vw" height="100vh" />
      </div>
      <div className={classes.homeImage4}>
        <Image src="/images/homepage/homepic4.jpg" width="100vw" height="100vh" />
      </div>
      <div className={classes.cover}></div>
      <Name />
      <Title />
      <ContactButton />
    </div>
  );
};

export default HomePage;
