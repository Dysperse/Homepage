"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Link,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { mint } from "@radix-ui/colors";
import { Bebas_Neue, Jost, Oregano } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { addHslAlpha, mintDark } from "./themes";
import { Customizable } from "./widgets/Customizable";
import { Familiar } from "./widgets/Familiar";
import { Flexible } from "./widgets/Flexible";
import { Integrated } from "./widgets/Integrated";
import { Keyboard } from "./widgets/Keyboard";
import * as colors from "./themes";
import { PlanDay } from "./widgets/PlanDay";
import { Quote } from "./widgets/Quote";
import { Task } from "./widgets/Task";
import { Theme } from "./widgets/Theme";
import { Time } from "./widgets/Time";
import { UpNext } from "./widgets/UpNext";
import { Weather } from "./widgets/Weather";
import {
  ThemeContext,
  ThemeContextProvider,
  useThemeContext,
} from "./useColor";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Emoji } from "./Emoji";

const jost = Jost({
  subsets: ["latin"],
});

const oregano = Oregano({ subsets: ["latin"], weight: "400" });

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
        <Image fill src="/background.png" alt="Hero" quality={100} priority />
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
                  lg: "70px",
                  xl: "100px",
                },
                lineHeight: {
                  xs: "50px",
                  md: "60px",
                  lg: "70px",
                  xl: "100px",
                },
                fontWeight: 900,
              }}
            >
              <span style={{ opacity: 0.7 }}>You&nbsp;could&nbsp;have</span>
              <br />
              25&nbsp;hours&nbsp;
              <span style={{ opacity: 0.7 }}>in&nbsp;a&nbsp;day.</span>
            </Typography>
            <Typography
              className={jost.className}
              sx={{
                opacity: 0.7,
                fontWeight: 300,
                fontSize: 25,
                my: 2,
                maxWidth: 900,
                lineHeight: "40px",
              }}
            >
              Organization & productivity are&nbsp;your&nbsp;domain.
              <br /> Let&nbsp;
              <Chip
                component={"span"}
                label="Dysperse"
                variant="outlined"
                sx={{
                  color: mintDark.mint11,
                  fontWeight: 500,
                  fontSize: 20,
                  height: "35px",
                  px: 1,
                  pr: 0.5,
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
                    style={{
                      color: mintDark.mint11,
                      fontVariationSettings: `'wght' 400`,
                    }}
                  >
                    volume_up
                  </span>
                }
              />
              &nbsp;be&nbsp;the&nbsp;catalyst.
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
          <Button color="primary" size="large" href="/">
            templates
          </Button>
          <Button color="primary" size="large" href="/download">
            download
          </Button>
          <Button
            color="primary"
            size="large"
            href="https://blog.dysperse.com"
            target="_blank"
          >
            blog
          </Button>
        </Box>
        <Button
          color="primary"
          size="large"
          href="//app.dysperse.com/auth/sign-in"
          variant="outlined"
          sx={{
            borderColor: addHslAlpha(mintDark.mint9, 0.15),
            "&:hover": {
              borderColor: addHslAlpha(mintDark.mint9, 0.3),
              backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
            },
            "&:active": {
              borderColor: addHslAlpha(mintDark.mint9, 0.4),
              backgroundColor: addHslAlpha(mintDark.mint9, 0.2),
            },
          }}
        >
          my account
          <span className="material-symbols-rounded">account_circle</span>
        </Button>
      </Box>
    </Box>
  );
}

const BulletPoint = ({ title, description, icon }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        textAlign: "left",
        mb: 1,
      }}
    >
      <span
        className="material-symbols-rounded"
        style={{ fontSize: 30, marginTop: 2.5 }}
      >
        {icon}
      </span>
      <Box>
        <Typography key={title} sx={{ textAlign: "left", flex: 1 }}>
          <b style={{ fontWeight: 900 }}>
            {title}
            {!title.includes("?") && "."}
          </b>{" "}
        </Typography>
        <Typography sx={{ mt: 0.2, opacity: 0.5 }}>{description}</Typography>
      </Box>
    </Box>
  );
};

function PictureThis() {
  return (
    <Box
      sx={{
        color: mintDark.mint11,
      }}
    >
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
      <Grid2 container sx={{ textAlign: "center", px: 5 }} spacing={2}>
        <Grid2 xs={12} sm={6}>
          <Box
            sx={{
              p: 5,
              borderRadius: 20,
              border: `1px solid ${mintDark.mint5}`,
              backdropFilter: "blur(4px)",
            }}
          >
            <Emoji emoji="1f4a9" size={50} />
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 300,
                opacity: 0.6,
                mb: 2,
              }}
            >
              other methods
            </Typography>
            {[
              ["One-size-fits-all", "Stuck with one system of doing things."],
              ["All-in-one replacement", "Switching over is a hassle."],
              ["Boring", "No fun, no motivation."],
              ["Expensive", "You have to pay for everything."],
              ["Free? Ads?", "You're the product."],
              ["Zero vision", "Only one perspective."],
              ["Exclusivity", "Only available on certain platforms."],
            ].map(([title, description]) => (
              <BulletPoint
                icon="cancel"
                title={title}
                description={description}
                key={title}
              />
            ))}
          </Box>
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <Box
            sx={{
              p: 5,
              background: mintDark.mint4,
              borderRadius: 20,
              border: `1px solid ${mintDark.mint5}`,
            }}
          >
            <Emoji emoji="270c" size={50} />
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 300,
                opacity: 0.6,
                mb: 2,
              }}
            >
              the #dysperse method
            </Typography>
            {[
              ["Flexible", "Choose what works for you."],
              ["Integrated", "Continue to use what you love"],
              ["Customizable", "32+ themes & dark mode"],
              ["Free", "No cost, no ads, no tracking."],
              ["Open source", "You can see how it works."],
              ["Visionary", "Multiple perspectives, the way you want."],
              ["Focus Panel", "Fun widgets to keep you motivated."],
            ].map(([title, description]) => (
              <BulletPoint
                icon="check_circle"
                title={title}
                description={description}
                key={title}
              />
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function ThemeSelector() {
  const { color, setColor } = useThemeContext();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5, mt: -2 }}
    >
      {[
        "mint",
        "tomato",
        "pink",
        "plum",
        "blue",
        "cyan",
        "green",
        "lime",
        "amber",
        "orange",
      ].map((theme) => (
        <Box
          key={theme}
          onClick={() => setColor(theme)}
          sx={{
            aspectRatio: "1 / 1",
            width: 40,
            borderRadius: color === theme ? 3 : 9,
            transition: "border-radius .2s,transform .2s",
            transform: "rotate(45deg)",
            cursor: "pointer",
            background: `linear-gradient(-45deg, ${
              (colors as any)[`${theme}Dark`][`${theme}9`]
            }, ${(colors as any)[`${theme}Dark`][`${theme}11`]})`,
            "&:hover": {
              transform: "scale(1.05) rotate(45deg)",
              background: `linear-gradient(-45deg, ${
                (colors as any)[`${theme}Dark`][`${theme}8`]
              }, ${(colors as any)[`${theme}Dark`][`${theme}10`]})`,
            },
            "&:active": {
              transform: "scale(.95) rotate(-45deg)",
              transitionDuration: "0s",
              background: `linear-gradient(-45deg, ${
                (colors as any)[`${theme}Dark`][`${theme}7`]
              }, ${(colors as any)[`${theme}Dark`][`${theme}9`]})`,
            },
            color: (colors as any)[`${theme}Dark`][`${theme}11`],
          }}
        />
      ))}
      <Box
        sx={{
          aspectRatio: "1 / 1",
          width: 40,
          borderRadius: 4,
          transform: "rotate(45deg)",
          cursor: "pointer",
          background: "rgba(255,255,255,.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            transform: "rotate(-45deg)",
            opacity: 0.5,
            color: "#fff",
          }}
        >
          +30
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
      <ThemeContextProvider>
        <ThemeSelector />
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
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
              <Theme />
              <Familiar />
              <Time />
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
                  flex: 2,
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
                sx={{
                  flex: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flexShrink: 0,
                }}
              >
                <Customizable />
                <UpNext />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
              <Quote />
              <Weather />
              <Box
                sx={{
                  flex: 4,
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <PlanDay />
                <Task />
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeContextProvider>
    </Box>
  );
}

function CTA() {
  return (
    <Container sx={{ mt: 10 }}>
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
    </Container>
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
