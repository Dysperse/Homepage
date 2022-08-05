import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PPH4TH4');`,
          }}
        />
        <title>Smartlist - Next-gen home inventory and personal finances</title>
        <meta
          name="title"
          content="Smartlist - Next-gen home inventory and personal finances."
        />
        <meta
          name="description"
          content="Smartlist is a free home inventory app that lets you keep track of what you have in your home. Save money for free by tracking your expenses, getting reminders for home maintenance, and creating shopping lists!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/" />
        <meta
          property="og:title"
          content="Smartlist - Next-gen home inventory and personal finances."
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
          content="Smartlist - Next-gen home inventory and personal finances."
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPH4TH4" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
