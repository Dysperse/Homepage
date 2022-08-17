import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smartlist: Next-gen home inventory and personal finances</title>
        <meta
          name="title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          name="description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/" />
        <meta
          property="og:title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          property="og:description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartlist.tech/" />
        <meta
          property="twitter:title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          property="twitter:description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
