import React from "react";
import Head from "next/head";
import ProjectPage from "../component/Projects/ProjectPage";
import Animate from "../component/Layout/Animate";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Animate>
        <ProjectPage />
      </Animate>
    </div>
  );
};

export default projects;
