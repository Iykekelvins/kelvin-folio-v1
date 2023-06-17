import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="Kelvin Ochubili" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kelvin Ochubili" />
        <meta
          name="description"
          content="Kelvin Ochubili - Frontend Developer"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://Kelvin Ochubili.vercel.app/"
        />
        <meta name="twitter:title" content="Kelvin Ochubili" />
        <meta
          name="twitter:description"
          content="Kelvin Ochubili - Frontend Developer"
        />
        <meta name="twitter:creator" content="@iykekelvins" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kelvin Ochubili" />
        <meta
          property="og:description"
          content="Kelvin Ochubili - Frontend Developer"
        />
        <meta property="og:site_name" content="Kelvin Ochubili" />
        <meta property="og:url" content="https://Kelvin Ochubili.vercel.app/" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link href="/favicon.svg" rel="icon" type="image/svg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/icon-16.png"></link>
        <meta name="theme-color" content="#1b1464" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        {/* <div id="modal"></div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
