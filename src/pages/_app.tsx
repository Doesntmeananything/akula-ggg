import type { AppProps } from "next/app";

import { Footer, Header } from "../layout";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
};

export default MyApp;
