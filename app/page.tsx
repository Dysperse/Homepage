"use client";
import Image from "next/image";
import { Bebas_Neue, Jost } from "next/font/google";
import { mint } from "@radix-ui/colors";
import { useEffect, useState } from "react";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { addHslAlpha, mintDark } from "./themes";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const jost = Jost({
  subsets: ["latin"],
});
const heading = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 70px)",
        width: "100vw",
        color: mintDark.mint11,
        position: "relative",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          fill
          src="/background.png"
          alt="Hero"
          objectFit="cover"
          quality={100}
          priority
        />
      </Box>
      <Box sx={{ zIndex: 1, height: "100%", width: "100%" }}>
        <Box sx={{ height: "100%", display: "flex" }}>
          <Grid2
            xs={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pl: 10,
              pt: 10,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: heading.style.fontFamily,
                fontSize: "100px",
                lineHeight: "100px",
              }}
            >
              <span style={{ opacity: 0.6 }}>You could have</span>
              <br />
              25 hours <span style={{ opacity: 0.6 }}>in a day.</span>
            </Typography>
            <Typography
              className={jost.className}
              sx={{
                opacity: 0.7,
                fontWeight: 350,
                fontSize: 25,
                mt: 1,
                maxWidth: 900,
              }}
            >
              Meet #dysperse. It&apos;s human productivity, but with
              superpowers. It adapts to the way you work and helps you get more
              done.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                size="large"
                variant="outlined"
                sx={{
                  borderColor: addHslAlpha(mintDark.mint11, 0.4),
                  color: addHslAlpha(mintDark.mint9, 0.5),
                  fontSize: 20,
                  "&, &:hover": {
                    borderWidth: 2,
                  },
                  "&:hover": {
                    borderColor: addHslAlpha(mintDark.mint11, 0.7),
                    color: addHslAlpha(mintDark.mint11, 0.7),
                    backgroundColor: addHslAlpha(mintDark.mint7, 0.1),
                  },
                  "&:active": {
                    backgroundColor: addHslAlpha(mintDark.mint7, 0.3),
                  },
                }}
              >
                Induct myself{" "}
                <span className="material-symbols-rounded">east</span>
              </Button>
            </Box>
          </Grid2>
          <Box sx={{ marginLeft: "auto", pr: 5, pt: 10 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                aspectRatio: "1080/1124.99995",
              }}
            >
              <Image
                priority
                src="/person.svg"
                alt="Hero"
                style={{
                  marginTop: "auto",
                  marginLeft: "auto",
                }}
                fill
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: `linear-gradient(transparent,#1E1E1E)`,
          height: 100,
          zIndex: 1,
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
    </Box>
  );
}

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 3.5,
        width: "100vw",
        position: "fixed",
        zIndex: 100,
        "& .MuiButton-root": {
          transition: "none",
          textTransform: "none",
          borderRadius: 999,
          gap: "10px",
          fontSize: 20,
          color: mintDark.mint11,
          fontWeight: 800,
        },
      }}
    >
      <Image src="/logo.svg" alt="Dysperse logo" width={60} height={60} />
      <Box sx={{ mx: "auto" }}>
        <Button color="primary" size="large">
          templates
        </Button>
        <Button color="primary" size="large">
          download
        </Button>
        <Button color="primary" size="large">
          blog
        </Button>
      </Box>
      <Button color="primary" size="large">
        account
        <span className="material-symbols-rounded">north_east</span>
      </Button>
    </Box>
  );
}

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#1E1E1E",
        color: mint.mint12,
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <CssBaseline />
      <Navbar />
      <Header />
      <Box sx={{ maxWidth: "100vw", overflowX: "hidden", mt: -4, zIndex: 99 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: "1280/46",
          }}
        >
          <Image priority src="/line.svg" alt="Line" fill />
        </Box>
      </Box>
    </Box>
  );
}
