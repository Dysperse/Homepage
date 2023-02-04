import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

/**
 * Top-level component for the document.
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Dysperse: It's your productivity boosted" />
        <link rel="canonical" href="https://dysperse.com" />
        <meta
          name="description"
          content="Meet Dysperse: The all-in-one personal productivity platform trusted and loved by thousands of students, families, seniors, and entrepreneurs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dysperse.com" />
        <meta
          property="og:title"
          content="Dysperse: It's your productivity boosted"
        />
        <meta
          property="og:description"
          content="Meet Dysperse: The all-in-one personal productivity platform trusted and loved by thousands of students, families, seniors, and entrepreneurs."
        />
        <meta property="og:image" content="/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dysperse.com" />
        <meta
          property="twitter:title"
          content="Dysperse: It's your productivity boosted"
        />
        <meta
          property="twitter:description"
          content="Meet Dysperse: The all-in-one personal productivity platform trusted and loved by thousands of students, families, seniors, and entrepreneurs."
        />
        <meta property="twitter:image" content="/meta.png" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PPH4TH4');
         `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dysperse",
          "alternateName": "Dysperse",
          "url": "https://dysperse.com",
          "logo": "https://assets.dysperse.com/v5/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          "sameAs": [
            "https://twitter.com/getdysperse",
            "https://www.instagram.com/dysperse",
            "https://github.com/Dysperse",
            "https://dysperse.com"
          ]
        }`        
        }} />
        <link rel="preconnect" href="https://i.ibb.co" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://ouch-cdn2.icons8.com" />
        <link rel="preconnect" href="https://assets.dysperse.com" />
        <link rel="preconnect" href="https://ouch-cdn2.icons8.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
               <link
          rel="apple-touch-icon"
          href="https://assets.dysperse.com/v6/ios/57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://assets.dysperse.com/v6/ios/57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://assets.dysperse.com/v6/ios/72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://assets.dysperse.com/v6/ios/76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://assets.dysperse.com/v6/ios/114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://assets.dysperse.com/v6/ios/120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://assets.dysperse.com/v6/ios/144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://assets.dysperse.com/v6/ios/152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://assets.dysperse.com/v6/ios/180.png"
        />
        <link
          href="https://assets.dysperse.com/v5/windows11/SmallTile.scale-100.png"
          rel="shortcut icon"
        />
        
        <link href="/manifest.json" rel="manifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPH4TH4" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
