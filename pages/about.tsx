import React from "react";
import Head from "next/head";
import AboutPage from "../component/About/AboutPage";
import Animate from "../component/Layout/Animate";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Animate>
        <AboutPage />
      </Animate>
    </div>
  );
};

export default about;
