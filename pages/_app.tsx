import Script from "next/script";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // If window is not undefined, do something
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

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
