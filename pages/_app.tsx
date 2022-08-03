import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BackgroundParticles from "../components/BackgroundParticles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#004aad" />
        <meta name="msapplication-TileColor" content="#004aad" />
        <meta name="theme-color" content="#ffffff" />
      </Head> */}

      {/* <BackgroundParticles /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
