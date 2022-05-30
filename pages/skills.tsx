import React from "react";
import Head from "next/head";
import SkillsPage from "../component/Skills/SkillsPage";
import Animate from "../component/Layout/Animate";

const skills = () => {
  return (
    <div>
      <Head>
        <title>Skills</title>
        <meta name="description" content="Skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Animate>
        <SkillsPage />
      </Animate>
    </div>
  );
};

export default skills;
