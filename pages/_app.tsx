import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../component/Layout/navigation/Navigation";
import Footer from "../component/Layout/footer/Footer";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Jareth's Portfolio" />
        <link rel="shortcut icon" href="/images/jareth.ico" />
      </Head>
      <div className="wrapperMain">
        <div className="wrapperContent">
          <Navigation />
          <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default MyApp;
