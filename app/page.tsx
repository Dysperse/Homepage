"use client";
import Image from "next/image";
import { Bebas_Neue, Jost } from "next/font/google";
import { mint } from "@radix-ui/colors";
import { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Link,
  Skeleton,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { addHslAlpha, mintDark } from "./themes";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Time } from "./widgets/Time";
import { Weather } from "./widgets/Weather";
import { Keyboard } from "./widgets/Keyboard";
import { Flexible } from "./widgets/Flexible";
import { Integrated } from "./widgets/Integrated";
import { Customizable } from "./widgets/Customizable";
import { UpNext } from "./widgets/UpNext";

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
      <Box sx={{ zIndex: 1, height: "100%", width: "100dvw" }}>
        <Box sx={{ height: "100%", display: "flex", maxWidth: "100dvw" }}>
          <Box
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
                fontSize: {
                  xs: "50px",
                  md: "60px",
                  lg: "80px",
                  xl: "105px",
                },
                lineHeight: {
                  xs: "50px",
                  md: "60px",
                  lg: "80px",
                  xl: "105px",
                },
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
                lineHeight: "50px",
              }}
            >
              Productivity is personal. Supercharge it with{" "}
              <Chip
                component={"span"}
                label="#dysperse"
                variant="outlined"
                sx={{
                  color: mintDark.mint11,
                  fontWeight: 700,
                  fontSize: 20,
                  height: "37px",
                  px: 1,
                  borderRadius: 99,
                  borderColor: mintDark.mint11,
                  borderWidth: 2,
                  mt: "-3px",
                  transition: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: mintDark.mint5,
                  },
                  "&:active": { opacity: 0.6 },
                }}
                onClick={() => {
                  const audio = new Audio("/pronunciation.mp3");
                  audio.play();
                }}
                icon={
                  <span
                    className="material-symbols-rounded"
                    style={{ color: mintDark.mint11 }}
                  >
                    volume_up
                  </span>
                }
              />
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
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              pr: 5,
              pt: 10,
              flex: 1,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                marginLeft: "auto",
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
          You&apos;ve got goals. <br />
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

      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          flexDirection: { xs: "column", lg: "row" },
          height: { sm: "auto", xl: "100dvh" },
        }}
      >
        <Box
          sx={{
            gap: 2,
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Time />
            {/* <Familiar /> */}
            <Weather />
          </Box>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flex: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                  flex: 1,
                }}
              >
                <Flexible />
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <Keyboard />
                </Box>
              </Box>
              <Integrated />
            </Box>
            <Box
              sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Customizable />
              <UpNext />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function CTA() {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          background: mintDark.mint4,
          color: mintDark.mint11,
          borderRadius: 25,
          p: 5,
          py: 10,
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          What would you do with that extra hour?
        </Typography>
      </Box>
    </Box>
  );
}

function Footer() {
  const [time, setTime] = useState<any>(new Date().getFullYear());

  return (
    <Box
      sx={{
        mt: 5,
        py: 10,
        color: mintDark.mint11,
        borderTop: `2px solid ${mintDark.mint5}`,
        backdropFilter: "blur(2px)",
        p: 5,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
          "& *": {
            fontWeight: 300,
            textDecorationThickness: 2,
            color: mintDark.mint8,
            textDecorationColor: mintDark.mint7,
          },
        }}
      >
        <Link href="//github.com/dysperse" target="_blank">
          Open source
        </Link>
        <Link
          href="//instagram.com/dysperse"
          target="_blank"
          sx={{ mr: "auto" }}
        >
          Instagram
        </Link>
        <Link href="https://status.dysperse.com/" target="_blank">
          Status
        </Link>
        <Link href="https://blog.dysperse.com/terms-of-service" target="_blank">
          Terms
        </Link>
        <Link href="https://blog.dysperse.com/privacy-policy" target="_blank">
          Privacy
        </Link>
      </Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          opacity: 0.5,
          justifyContent: "center",
        }}
        fontWeight={700}
      >
        <Image src="/usa.png" alt="USA flag" width={24} height={24} />
        Proudly made in the US &bull; Copyright {time}
      </Typography>
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
      <Footer />
    </Box>
  );
}
