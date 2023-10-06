import { Box, NoSsr } from "@mui/material";
import Head from "next/head";
import { Features } from "../components/Home/Features";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Home/Header";
import { CallToAction } from "@/components/Home/CallToAction";
import { Footer } from "@/components/Home/Footer";
import { useRef } from "react";

export default function Home() {
  const statsRef = useRef();

  return (
    <>
      <Head>
        <title>Dysperse: The new standard for productivity</title>
        <meta
          name="description"
          content="Dysperse is a radically different, unified productivity platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Features statsRef={statsRef} />
      <Box ref={statsRef}></Box>
      <CallToAction />
      <Footer />
    </>
  );
}
