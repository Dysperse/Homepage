"use client";
import Image from "next/image";
import { Bebas_Neue, Jost } from "next/font/google";
import { mint } from "@radix-ui/colors";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  useScrollTrigger,
} from "@mui/material";
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
        height: "calc(100vh - 50px)",
        width: "100vw",
        color: mintDark.mint11,
        position: "relative",
        zIndex: 0,
        pt: 5,
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
                fontFamily: "Agrandir",
                fontSize: "80px",
                lineHeight: "80px",
                fontWeight: 900,
              }}
            >
              <span style={{ opacity: 0.7 }}>You could have</span>
              <br />
              25 hours <span style={{ opacity: 0.7 }}>in a day.</span>
            </Typography>
            <Typography
              className={jost.className}
              sx={{
                opacity: 0.7,
                fontWeight: 300,
                fontSize: 25,
                my: 2,
                maxWidth: 900,
              }}
            >
              Productivity is personal. Supercharge it with #dysperse
            </Typography>
            <Box sx={{ mt: 1, gap: 2, display: "flex" }}>
              <Button
                size="large"
                variant="contained"
                sx={{
                  fontSize: 20,
                  backgroundColor: mintDark.mint11,
                  "&:hover": {
                    backgroundColor: mintDark.mint12,
                  },
                }}
              >
                Induct myself
                <span className="material-symbols-rounded">east</span>
              </Button>
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
                What&apos;s this about?
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

function Separator() {
  return (
    <Box
      sx={{
        background: `linear-gradient(${mintDark.mint11}, ${mintDark.mint8})`,
        width: "100%",
        height: 50,
        mt: -4,
      }}
      className="wave"
    />
  );
}

function Navbar() {
  const status = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 99,
        left: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3.5,
          py: 2,
          width: "100%",
          borderRadius: 99,
          backdropFilter: status ? "blur(20px)" : "none",
          borderWidth: 2,
          borderColor: status
            ? addHslAlpha(mintDark.mint11, 0.1)
            : "transparent",
          borderStyle: "solid",
          backgroundColor: status
            ? addHslAlpha(mintDark.mint11, 0.05)
            : "transparent",
          transition: "background 0.5s, backdrop-filter 0.5s, border-color .5s",
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
    </Box>
  );
}

function PictureThis() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: mintDark.mint11,
          textTransform: "uppercase",
          gap: 2,
          alignItems: "center",
          py: 5,
          opacity: 0.1,
        }}
      >
        <Typography style={{ fontWeight: 500, fontSize: 40 }}>
          Picture this
        </Typography>
        <span className="material-symbols-rounded" style={{ fontSize: 50 }}>
          emoji_objects
        </span>
      </Box>
      <Box sx={{ p: 10, pt: 0, mt: -3, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            background: `linear-gradient(${mintDark.mint6}, ${mintDark.mint8})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          You have goals. <br />
          maybe you like setting broad deadlines. <br />
          maybe you like organizing things by color. <br />
          maybe you like things aesthetic. <br />
          maybe you like to organize things by effort <br />
          maybe you&apos;re all of the above. <br />
          whoever you are, dyseperse is for you.
        </Typography>
      </Box>
    </Box>
  );
}

function InteractiveWidgets() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: mintDark.mint11,
          textTransform: "uppercase",
          gap: 2,
          alignItems: "center",
          py: 5,
          opacity: 0.1,
        }}
      >
        <Typography style={{ fontWeight: 500, fontSize: 40 }}>
          it&apos;s interactive!
        </Typography>
        <span className="material-symbols-rounded" style={{ fontSize: 50 }}>
          web_traffic
        </span>
      </Box>
    </Box>
  );
}

function CTA() {
  return (
    <Box
      sx={{
        background: mintDark.mint4,
      }}
    >
      <Typography>What would you do with that extra hour?</Typography>
    </Box>
  );
}

export default function Home() {
  return (
    <Box
      sx={{
        color: mint.mint12,
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <Navbar />
      <Header />
      <Separator />
      <PictureThis />
      <InteractiveWidgets />
      <CTA />
    </Box>
  );
}
