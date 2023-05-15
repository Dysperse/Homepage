import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />

        <meta
          name="title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          name="description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dysperse.com" />
        <meta
          property="og:title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          property="og:description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        <meta property="og:image" content="/meta.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dysperse.com" />
        <meta
          property="twitter:title"
          content="Dysperse: A radically different, unified productivity platform"
        />
        <meta
          property="twitter:description"
          content="Meet Dysperse: The ultimate productivity platform that streamlines your life with planners, boards, routines, and more. Say goodbye to scattered tasks and hello to seamless productivity with Dysperse."
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
