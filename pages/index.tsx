import { AppBar, Box, Button, Icon, Toolbar, Typography } from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function Features() {
  const [showToolbar, setShowToolbar] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    // If the user has scrolled down 100vh, show the toolbar using framer motion else hide it
    setShowToolbar(latest > screenHeight - 200);
  });

  return (
    <Box>
      <AppBar
        elevation={0}
        color="inherit"
        sx={{
          transition: "all .2s",
          top: showToolbar ? "60px" : "20px",
          opacity: showToolbar ? 1 : 0,
          position: "fixed",
          backdropFilter: "blur(10px)",
          background: showToolbar ? "rgba(255,255,255,.5)" : "transparent",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          height: "40px",
        }}
      >
        <Toolbar
          sx={{
            height: "40px!important",
            minHeight: "40px!important",
            gap: 1,
          }}
        >
          <Button size="small" variant="contained" sx={{ ml: 6.5 }}>
            Agenda
          </Button>
          <Button size="small" variant="contained">
            Boards
          </Button>
          <Button size="small" variant="contained">
            Coach
          </Button>
          <Button size="small" variant="contained">
            Inventory
          </Button>
          <Button size="small" variant="contained">
            Mood tracking
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          background: "linear-gradient(transparent, #fff)",
          width: "100%",
          mt: "-100vh",
          height: "100vh",
        }}
      />
      <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.05)" }} />
      <Box>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{ textAlign: "center", mt: 5 }}
        >
          Task visualization
          <br /> <i>reimagined</i>
        </Typography>
      </Box>
    </Box>
  );
}

function Navbar() {
  const [highlightBackground, setHighlightBackground] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // If the user has scrolled down 100vh, show the toolbar using framer motion else hide it
    setHighlightBackground(latest > screenHeight - 200);
  });


  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 999,
        background: highlightBackground?"":"transparent",
        height: "60px",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        p: 0,
      }}
      color="inherit"
    >
      <Toolbar
        sx={{
          minHeight: "60px!important",
          height: "60px!important",
          pr: 0,
          pl: 1,
          gap: 2,
        }}
      >
        <Image src="/logo.svg" width={30} height={30} alt="logo" />
        <Box sx={{ mr: "auto" }}>
          {[
            { label: "Open source", href: "/" },
            { label: "Community", href: "/" },
            { label: "Support", href: "/" },
          ].map((button) => (
            <Button
              key={button.label}
              href={button.href}
              color="inherit"
              target="_blank"
              sx={{ px: 2 }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
        <Button>
          <Icon>account_circle</Icon>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function Header() {
  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        flexDirection: "column",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        userSelect: "none",
      }}
    >
      <Image
        height={1080}
        width={1920}
        src="/cover.png"
        alt="hero"
        style={{
          opacity: 0.6,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Button
        sx={{
          border: "2px solid #000",
          borderRadius: 999,
          px: 4,
          mb: 2,
          color: "#000",
          "&:hover": {
            backdropFilter: "blur(1px)",
          },
        }}
        size="large"
        color="inherit"
      >
        Introducing Dysperse AI
        <Icon>east</Icon>
      </Button>
      <Typography
        sx={{
          fontSize: { xs: 20, sm: 50 },
          mb: 2,
          textAlign: "center",
          fontWeight: 700,
          background: "linear-gradient(#000, #555)",
          whiteSpace: "nowrap",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-serif"
      >
        Dysperse is a radically different
        <br /> unified productivity platform
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 3,
          color: "#505050",
        }}
      >
        Introducing the new benchmark for productivity
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{
          borderRadius: 999,
          color: "#000",
          backdropFilter: "blur(2px)",
        }}
      >
        Get started <Icon>north_east</Icon>
      </Button>
    </Box>
  );
}

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
