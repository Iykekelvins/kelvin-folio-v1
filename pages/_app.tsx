import type { AppProps } from "next/app";

import Head from "next/head";

import dynamic from "next/dynamic";
import "../styles/index.scss";

const Layout = dynamic(() => import("@/Layout"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Kelvin Ochubili - Frontend Developer"
        />
        <meta name="keywords" content="Keywords" />

        <title>Kelvin Ochubili - Frontend Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
