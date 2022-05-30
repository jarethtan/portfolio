import React from "react";
import Head from "next/head";
import ContactPage from "../component/Contact/ContactPage";
import Animate from "../component/Layout/Animate";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Animate>
        <ContactPage />
      </Animate>
    </div>
  );
};

export default contact;
