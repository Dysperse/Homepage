import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
