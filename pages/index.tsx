import { Box } from "@mui/material";
import Head from "next/head";
import { Features } from "../components/Home/Features";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Home/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dysperse</title>
        <meta
          name="description"
          content="Dysperse is a radically different, unified productivity platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Features />
      <Box sx={{ mb: "120vh" }} />
    </>
  );
}
