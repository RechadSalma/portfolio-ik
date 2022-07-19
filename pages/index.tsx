import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SlidingContents from "../components/SlidingContents";
import styles from "../styles/Index.module.scss";

const Home: NextPage = () => {
  const [slidingCssClassName, setSlidingCssClassName] =
    useState("LandingSlideCss");

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 12 ~ slidingCssClassName",
      slidingCssClassName
    );
  });

  return (
    <div id="divBody">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setSlidingCssClassName={setSlidingCssClassName} />

      <main id="Main">
        <SlidingContents slidingCssClassName={slidingCssClassName} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
