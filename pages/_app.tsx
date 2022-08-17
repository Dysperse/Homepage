import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="beforeInteractive"
        id="schema"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Smartlist",
            "url": "https://smartlist.tech",
            "logo": "https://cdn.jsdelivr.net/gh/Smartlist-App/Assets@master/v2/rounded.png",
            "sameAs": [
              "https://twitter.com/smartlistapp",
              "https://instagram.com/getsmartlist",
              "https://github.com/Smartlist-App",
              "https://smartlist.tech/"
            ]
          }
      `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
