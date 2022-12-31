import { Box, Button } from "@mui/material";
import { Header } from "../components/homepage/Header";
import { Stats } from "../components/homepage/Stats";
import { Security } from "../components/homepage/Security";
import { Footer } from "../components/homepage/Footer";
import { FAQ } from "../components/homepage/FAQ";
import { Features } from "../components/homepage/Features";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Stats />
      <Security />
      <FAQ />
      <Footer />
    </>
  );
}
