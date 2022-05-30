import React from "react";
import Head from "next/head";
import HomePage from "../component/Home/HomePage";
import Animate from "../component/Layout/Animate";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Jareth's Portfolio</title>
        <meta name="description" content="Jareth's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
