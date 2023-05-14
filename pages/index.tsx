import { Box, NoSsr } from "@mui/material";
import Head from "next/head";
import { Features } from "../components/Home/Features";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Home/Header";
import { Stats } from "@/components/Home/Stats";
import { CallToAction } from "@/components/Home/CallToAction";
import { Footer } from "@/components/Home/Footer";
import { useRef } from "react";

export default function Home() {
  const statsRef = useRef();

  return (
    <>
      <Head>
        <title>
          Dysperse: A radically different, unified productivity platform
        </title>
        <meta
          name="description"
          content="Dysperse is a radically different, unified productivity platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSsr>
        <Navbar />
      </NoSsr>
      <Header />
      <NoSsr>
        <Features statsRef={statsRef} />
      </NoSsr>
      <Box ref={statsRef}>
        <Stats />
      </Box>
      <CallToAction />
      <Footer />
    </>
  );
}
