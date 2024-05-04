"use client";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Bebas_Neue, Jost, Oregano } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Emoji } from "./Emoji";
import * as colors from "./themes";
import { addHslAlpha, mintDark } from "./themes";
import { ThemeContextProvider, useThemeContext } from "./useColor";
import { Customizable } from "./widgets/Customizable";
import { Familiar } from "./widgets/Familiar";
import { Flexible } from "./widgets/Flexible";
import { Integrated } from "./widgets/Integrated";
import { Keyboard } from "./widgets/Keyboard";
import { PlanDay } from "./widgets/PlanDay";
import { Quote } from "./widgets/Quote";
import { Task } from "./widgets/Task";
import { Theme } from "./widgets/Theme";
import { Time } from "./widgets/Time";
import { UpNext } from "./widgets/UpNext";
import { Weather } from "./widgets/Weather";

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
        height: { xs: "auto", md: "calc(100vh - 50px)" },
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
          objectFit="cover"
          alt="Hero"
          quality={100}
          priority
        />
      </Box>
      <Box sx={{ zIndex: 1, height: "100%", width: "100dvw" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            maxWidth: "100dvw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, md: 10 },
              pt: { xs: 30, sm: 10 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Agrandir",
                fontSize: {
                  xs: "37px",
                  md: "60px",
                  lg: "70px",
                  xl: "100px",
                },
                lineHeight: {
                  xs: "40px",
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
                fontWeight: { xs: 700, md: 300 },
                fontSize: { xs: 20, md: 25 },
                my: 2,
                maxWidth: 900,
                lineHeight: "40px",
                "& #d": {
                  display: { xs: "none", md: "inline" },
                },
                "& #m": {
                  display: { xs: "inline", md: "none" },
                },
              }}
            >
              <span id="d">Organization & Productivity are your domain</span>
              <span id="m">Productivity is your domain</span>
              <br /> Let&nbsp;
              <Chip
                component={"span"}
                label="Dysperse"
                variant="outlined"
                sx={{
                  color: mintDark.mint11,
                  fontWeight: 500,
                  fontSize: { xs: 18, sm: 25 },
                  height: "35px",
                  px: { xs: 0.5, sm: 1 },
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
            <Box
              sx={{
                mt: 1,
                gap: 2,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
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

const BulletPoint = ({ title, description, icon }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        textAlign: "left",
        mb: 1.5,
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
          <b style={{ fontWeight: 900 }}>{title}</b>
        </Typography>
        <Typography sx={{ mt: 0.15, opacity: 0.5 }}>{description}</Typography>
      </Box>
    </Box>
  );
};

function PictureThis() {
  return (
    <Box
      sx={{
        color: mintDark.mint11,
        mt: -3,
      }}
    >
      <Hint text="Picture this" icon="emoji_objects" />
      <Grid2
        container
        sx={{ textAlign: "center", px: { xs: 2, sm: 5 } }}
        spacing={2}
      >
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
      sx={{
        display: "flex",
        gap: 2,
        px: 2,
        py: 2,
        mb: 5,
        mt: -4,
        overflowX: "auto",
      }}
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
      ].map((theme, index) => (
        <Box
          key={theme}
          onClick={() => setColor(theme)}
          sx={{
            ...(index === 0 && { ml: "auto" }),
            aspectRatio: "1 / 1",
            width: 40,
            flexShrink: 0,
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
          flexShrink: 0,
          mr: "auto",
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

function Hint({ text, icon }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: mintDark.mint11,
        textTransform: "uppercase",
        gap: 2,
        alignItems: "center",
        py: 5,
        mt: 5,
        opacity: 0.2,
        "& .material-symbols-rounded": {
          fontSize: { xs: 30, sm: 50 },
        },
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: { xs: 27, sm: 40 } }}>
        {text}
      </Typography>
      <span className="material-symbols-rounded">{icon}</span>
    </Box>
  );
}

function InteractiveWidgets() {
  return (
    <Box>
      <Hint text="It's interactive!" icon="web_traffic" />
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
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Quote />
              <Weather />
              <Box
                sx={{
                  flex: 4,
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                  minHeight: 250,
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
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  // -1: not voted, 0-5: voted
  const [loading, setLoading] = useState(-1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const poll = localStorage.getItem("poll");
    if (poll) {
      setData(JSON.parse(poll));
    }
  }, []);

  const handleClick = async (index: number) => {
    try {
      setError(false);
      const response = await fetch("/api/poll", {
        method: "POST",
        body: JSON.stringify({ index }),
      });
      const json = await response.json();
      setData(json);
      localStorage.setItem("poll", JSON.stringify(json));
    } catch (e) {
      setError(true);
    }
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Hint text="Poll" icon="emoji_objects" />
      <Box
        sx={{
          background: addHslAlpha(mintDark.mint6, 0.2),
          backdropFilter: "blur(4px)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mintDark.mint5,
          color: mintDark.mint11,
          borderRadius: { xs: 5, sm: 20 },
          py: { xs: 3, sm: 7 },
          px: { xs: 3, sm: 7 },
          mt: -2,
        }}
      >
        <Typography variant="h4" fontWeight={900}>
          What would you do with that extra hour?
        </Typography>
        {error && (
          <Box
            sx={{
              p: 2,
              borderRadius: 99,
              background: colors.redDark.red4,
              display: "flex",
              gap: 2,
              alignItems: "center",
              mt: 2,
            }}
          >
            <Emoji emoji="1F62D" size={30} />
            <Typography sx={{ color: colors.redDark.red11 }}>
              Something went wrong, please try again later
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            gap: 2,
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
          }}
        >
          {[
            { key: 0, text: "Spend time with my family", icon: "1F60C" },
            { key: 1, text: "Have some me-time", icon: "1F60C" },
            {
              key: 2,
              text: "Work on my side project",
              icon: "1f468-200d-1f4bb",
            },
            { key: 3, text: "Sleep in", icon: "1F634" },
            { key: 4, text: "Go to the gym", icon: "1F4AA" },
            { key: 5, text: "Watch a movie", icon: "1F3AC" },
          ].map(({ key, text, icon }) => (
            <Box
              key={text}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                gap: 2,
                transition: "background .2s, transform .05s",
                "&, & *": {
                  cursor: "pointer",
                },
                background: mintDark.mint4,
                "&:hover": {
                  background: mintDark.mint5,
                },
                "&:active": {
                  transform: "scale(.95)",
                },
                borderRadius: 10,
                p: 2,
                ...((loading !== -1 || data) && {
                  pointerEvents: "none",
                }),
                ...(loading !== -1 &&
                  !data && {
                    opacity: 0.5,
                  }),
              }}
              onClick={() => {
                if (loading === -1 && !data) {
                  setLoading(key);
                  handleClick(key);
                }
              }}
            >
              {data && (
                <LinearProgress
                  variant="determinate"
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    background: mintDark.mint4,
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 0,
                      backgroundColor: mintDark.mint5,
                    },
                  }}
                  value={
                    (data[key] /
                      (Object.values(data) as any).reduce(
                        (acc: number, curr: number) => acc + curr,
                        0
                      )) *
                    100
                  }
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  zIndex: 1,
                  width: "100%",
                }}
              >
                <Emoji emoji={icon} size={30} />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 17, sm: 20 },
                  }}
                >
                  {text}
                </Typography>
                {loading === key && !data && (
                  <CircularProgress sx={{ ml: "auto" }} size={20} />
                )}
                {data && (
                  <Typography
                    sx={{
                      ml: "auto",
                      flexShrink: 0,
                      fontWeight: 700,
                      opacity: 0.5,
                    }}
                  >
                    {data[key]} {data[key] === 1 ? "vote" : "votes"}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
        <Collapse in={data} sx={{ borderRadius: 99 }}>
          <Box sx={{ mt: 3 }}>
            <Button
              fullWidth
              href="https://app.dysperse.com/auth/sign-up"
              variant="contained"
              sx={{
                borderRadius: 99,
                background: mintDark.mint11,
                "&:hover": {
                  background: mintDark.mint12,
                },
                py: 2,
                fontSize: 20,
                fontWeight: 700,
              }}
              color="primary"
              size="large"
            >
              Induct myself{" "}
              <span className="material-symbols-rounded">east</span>
            </Button>
          </Box>
        </Collapse>
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
    <>
      <Header />
      <Separator />
      <PictureThis />
      <InteractiveWidgets />
      <CTA />
      <Footer />
    </>
  );
}
