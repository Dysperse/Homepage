import { Html, Head, Main, NextScript } from "next/document";
import TagManager from "react-gtm-module";

TagManager.initialize({
  gtmId: "GTM-PPH4TH4",
});

export default function Document() {
  return (
    <Html>
      <Head>
        <title>
          Smartlist - sophisticated home and business inventory management for
          free.
        </title>
        <meta
          name="title"
          content="Smartlist - sophisticated home and business inventory management for free."
        />
        <meta
          name="description"
          content="Smartlist is a free home inventory app that lets you keep track of what you have in your home. Save money for free by tracking your expenses, getting reminders for home maintenance, and creating shopping lists!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/" />
        <meta
          property="og:title"
          content="Smartlist - sophisticated home and business inventory management for free."
        />
        <meta
          property="og:description"
          content="Smartlist is a free home inventory app that lets you keep track of what you have in your home. Save money for free by tracking your expenses, getting reminders for home maintenance, and creating shopping lists!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/1nW9xMJ/banner.png"
        />
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/2snZjPZ/48x48-modified-1.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartlist.tech/" />
        <meta
          property="twitter:title"
          content="Smartlist - sophisticated home and business inventory management for free."
        />
        <meta
          property="twitter:description"
          content="Smartlist is a free home inventory app that lets you keep track of what you have in your home. Save money for free by tracking your expenses, getting reminders for home maintenance, and creating shopping lists!"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/1nW9xMJ/banner.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,200"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
