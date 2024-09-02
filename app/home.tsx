"use client";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Fraunces, Jost } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Emoji } from "./Emoji";
import * as colors from "./themes";
import { addHslAlpha, mintDark } from "./themes";
import {
  ThemeContextProvider,
  useColorTheme,
  useThemeContext,
} from "./useColor";
import { Customizable } from "./widgets/Customizable";
import { Integrated } from "./widgets/Integrated";
import { Keyboard } from "./widgets/Keyboard";
import { Quote } from "./widgets/Quote";
import { Task } from "./widgets/Task";
import { Theme } from "./widgets/Theme";
import { Time } from "./widgets/Time";
import { UpNext } from "./widgets/UpNext";
import { Weather } from "./widgets/Weather";

const jost = Jost({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["200"],
});

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "auto", sm: "calc(100vh - 50px)" },
        minHeight: 600,
        width: "100vw",
        color: mintDark.mint11,
        position: "relative",
        zIndex: 0,
        pb: 6,
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
            flexDirection: { xs: "column", sm: "row" },
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
              <span id="d">Organization & productivity are your domain.</span>
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
                      maxWidth: "30px",
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
                flexDirection: { xs: "column", md: "row" },
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
                href="https://app.dysperse.com/auth/sign-up"
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
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                What&apos;s this about?
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              background: `linear-gradient(rgba(30, 30, 30, .5), #1E1E1E)`,
              height: { xs: "100%", sm: 0 },
              width: "100vw",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              marginLeft: "auto",
              pr: 5,
              pt: 10,
              flex: 1,
              position: "absolute",
              right: 0,
              bottom: 0,
              top: 0,
              zIndex: -3,
              marginRight: { xs: -20, sm: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                marginLeft: "auto",
                flexDirection: "column",
                maxWidth: "120vw",
                height: "100%",
                aspectRatio: "1080/1124.99995",
              }}
            >
              <Image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAAAAXNSR0IArs4c6QAAAidJREFUKFNjZCARMOJSXzB9ugJIzioj43EYI+NfmDoMDav+/2dempoa8uXl29rvX76x8omLXOcVE94WOnHiXJBGDA0Na5fInF259cDLh0+Vv375ysDNw83AKSzwXM/ZOmhycfkJDA0b710Wf7TnxP7NazZqfvj4ieH923cM/MKC/xTNDTNXT5o0C9NJr67ycF9/vfP84eNWZ86cY7hy5TqDsKjwPzEdtYLNs2dPxurp9YcPNt8+e6Ho9rWbXBcvXmFgZGJE1TBtzcp4Ln7+LwmuHmtBoTHt8GFBob+/Ypjffe4/cvAw89ETp/5J6mkgbFi8adOm/99/WH9h/l+UFRK+EKRp+7GjM3+/+5B26cIlhp079zH85mRZf2LX9iCwk1Yd3JfG+PbTtGs3b75+w8YQ6OPtw/X/6cu11y9dETh//iLD/fuPGP5ysl45tmubLljD/kd3dJ6cvrjp+q1bbF8/ff5s72j/k+XXH/29u/cx3L59l+Hbr18/JdSU5q+YNiUTYsP//8y8x49Ne/7yheG7t+9Y1SSkDN69e/9vw7qNTG/ffmDgEuY/bxkb4NcQHPMEHkpbLp+y+vPk7drP3759FxMQlN62aSvbuXOXGH7++skgKCl23r843znL1vY9SrCuOLA398ej5xPev33HtHv3PoY/f/6Ak5CkitJu/coI/yJZq+8oGla9usrz5fC1eQc27gh98+Ytg6qqMsO3798ZfrGwwDUAALoBDR894P/8AAAAAElFTkSuQmCC"
                placeholder="blur"
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
          height: { xs: 0, sm: 100 },
          zIndex: 1,
          width: "100%",
          position: "absolute",
          bottom: 0,
          pointerEvents: "none",
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
      id="about"
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

function TaskButton({ icon, solid }: any) {
  return (
    <IconButton
      sx={{
        background: solid ? mintDark.mint11 : mintDark.mint4,
        "&:hover": { background: solid ? mintDark.mint9 : mintDark.mint5 },
        "&:active": { background: solid ? mintDark.mint8 : mintDark.mint6 },
        borderRadius: 99,
        mt: 2,
        p: 1.5,
      }}
    >
      <span
        className="material-symbols-rounded"
        style={{
          color: solid ? mintDark.mint2 : mintDark.mint11,
          fontVariationSettings: `'wght' ${solid ? 300 : 200}`,
        }}
      >
        {icon}
      </span>
    </IconButton>
  );
}

function CreateTask() {
  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "auto",
        border: `1px solid ${mintDark.mint5}`,
        backgroundColor: addHslAlpha(mintDark.mint4, 0.2),
        backdropFilter: "blur(10px)",
        borderRadius: 5,
        p: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      <Box sx={{ display: "flex", mt: 1 }}>
        <TextField
          multiline
          InputProps={{ disableUnderline: true }}
          fullWidth
          inputProps={{
            sx: {
              fontSize: "35px",
              lineHeight: "40px",
              minHeight: "95px",
              "&::placeholder": {
                color: mintDark.mint11,
              },
              fontFamily: fraunces.style.fontFamily,
            },
          }}
          variant="standard"
          placeholder="What's on your mind?"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "flex-end",
        }}
      >
        <TaskButton icon="calendar_today" />
        <TaskButton icon="new_label" />
        <TaskButton icon="note_stack_add" />
        <TaskButton icon="push_pin" />
        <TaskButton solid icon="arrow_upward" />
      </Box>
    </Box>
  );
}

function Tasks() {
  return (
    <Box
      sx={{
        color: mintDark.mint11,
        mt: 10,
      }}
    >
      <Container>
        <Image
          src="/iso-icons/tasks.svg"
          width={120}
          height={120}
          style={{ margin: "auto", display: "block" }}
          alt="Tasks"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 27, sm: 40 },
            mt: 2,
            fontWeight: 900,
          }}
        >
          It all starts with an idea
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 18, sm: 20 },
            fontWeight: 300,
            opacity: 0.6,
            mb: 10,
          }}
        >
          Tasks come in all shapes and sizes
        </Typography>
        <Grid2 container spacing={5}>
          <Grid2 xs={12} md={7}>
            <CreateTask />
          </Grid2>
          <Grid2
            xs={12}
            md={5}
            sx={{
              px: { xs: 4, sm: 0 },
              // color: mintDark.mint12,
              "& .title": {
                fontWeight: 700,
                fontSize: 20,
              },
              "& .description": {
                opacity: 0.5,
                fontWeight: 300,
              },
              "& .s": {
                py: 1.5,
                "&:not(:last-child)": {
                  borderBottom: `1px solid ${mintDark.mint6}`,
                },
              },
            }}
          >
            <Box className="s">
              <Typography className="title">
                Broad or specific &mdash; it&apos;s up to you.
              </Typography>
              <Typography className="description">
                Set a deadline or even mark how much effort it&apos;ll take
              </Typography>
            </Box>
            <Box className="s">
              <Typography className="title">
                Pictures are worth a thousand words
              </Typography>
              <Typography className="description">
                Attach images, locations, and links
              </Typography>
            </Box>
            <Box className="s">
              <Typography className="title">
                Label things that matter to you.
              </Typography>
              <Typography className="description">
                Create collections to see labels in different ways
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

function Collections() {
  const theme = useColorTheme();
  const [selected, setSelected] = useState(1);

  const options = {
    Planner: "transition_slide",
    Kanban: "view_kanban",
    Stream: "whatshot",
    Grid: "view_cozy",
    Workload: "exercise",
    List: "view_agenda",
    Matrix: "target",
    Calendar: "calendar_today",
  };
  return (
    <Box
      sx={{
        color: mintDark.mint11,
        mt: 10,
      }}
    >
      <Container>
        <Image
          src="/iso-icons/collections.svg"
          width={120}
          height={120}
          style={{ margin: "auto", display: "block" }}
          alt="Collections"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 27, sm: 40 },
            mt: 2,
            mb: 2,
            fontWeight: 900,
          }}
        >
          Gain new perspectives
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 18, sm: 20 },
            fontWeight: 300,
            opacity: 0.6,
            mb: 10,
            px: 2,
          }}
        >
          Labels can be part of as many collections as you&apos;d like.
          We&apos;ve handcrafted eight different ways to view them
        </Typography>
        <Grid2 container spacing={1.5}>
          <Grid2 xs={12} md={5}>
            <Box
              sx={{
                gap: 1.5,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                height: "100%",
              }}
            >
              {Object.entries(options).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${mintDark.mint3}`,
                    background: mintDark.mint2,
                    gap: 1,
                    flex: 1,
                    p: 1.5,
                    px: { xs: 2, sm: 3 },
                    borderRadius: 5,
                    "& .material-symbols-rounded": {
                      fontSize: { xs: 24, sm: 40 },
                    },
                  }}
                >
                  <span className="material-symbols-rounded">{value}</span>
                  <Typography fontSize={{ xs: 15, sm: 20 }} fontWeight={300}>
                    {key}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid2>
          <Grid2 xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                background: mintDark.mint2,
                border: `1px solid ${mintDark.mint5}`,
                height: "100%",
                width: "100%",
                borderRadius: 5,
                minHeight: 300,
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: 200,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Image
                    src="/logo-dark.svg"
                    width={45}
                    height={45}
                    alt="Logo"
                    objectFit="contain"
                  />
                  <span className="material-symbols-rounded">expand_more</span>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 50,
                      background: mintDark.mint3,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height: 50,
                      background: mintDark.mint3,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    mb: 1,
                    gap: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {[
                    {
                      emoji: "2708",
                      primary: "trip to paris",
                      secondary: "Kanban",
                    },
                    {
                      emoji: "1f392",
                      primary: "my assignments",
                      secondary: "Planner",
                    },
                    {
                      emoji: "1f91e",
                      primary: "wishlist",
                      secondary: "Grid",
                    },
                    {
                      emoji: "1f4d6",
                      primary: "books to read",
                      secondary: "List",
                    },

                    {
                      emoji: "add",
                      primary: "New tab",
                    },
                  ].map((button, index) => (
                    <Box
                      onClick={() => index !== 4 && setSelected(index)}
                      key={button.primary}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        height: 50,
                        flexShrink: 0,
                        gap: 2,
                        borderRadius: 5,
                        background: selected === index ? theme[3] : undefined,
                        "&:hover": {
                          background: theme[selected === index ? 4 : 3],
                        },
                        "&:active": {
                          background: theme[selected === index ? 5 : 4],
                        },
                        overflow: "hidden",
                      }}
                    >
                      {button.emoji === "add" ? (
                        <span
                          className="material-symbols-rounded"
                          style={{ fontSize: 30 }}
                        >
                          add
                        </span>
                      ) : (
                        <Emoji emoji={button.emoji} size={30} />
                      )}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          fontSize={15}
                          fontWeight={700}
                          className={jost.className}
                        >
                          {button.primary}
                        </Typography>
                        <Typography
                          fontSize={12}
                          marginTop={-0.2}
                          fontWeight={400}
                          sx={{ opacity: 0.6 }}
                        >
                          {button.secondary}
                        </Typography>
                      </Box>
                      {selected === index && (
                        <IconButton
                          sx={{
                            flexShrink: 0,
                            marginLeft: "auto",
                            mr: -1,
                            transition: "none",
                          }}
                          size="small"
                        >
                          <span className="material-symbols-rounded">
                            close
                          </span>
                        </IconButton>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: 5,
                  background: mintDark.mint3,
                  // border: `2px solid ${mintDark.mint4}`,
                  flex: 1,
                }}
              ></Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
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
        mt: -8,
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
          +20
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
    <Box
      sx={{
        color: mintDark.mint11,
        mt: 10,
      }}
    >
      <Container>
        <Image
          src="/iso-icons/widgets.svg"
          width={120}
          height={120}
          style={{ margin: "auto", display: "block" }}
          alt="Widgets"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 27, sm: 40 },
            mt: 2,
            fontWeight: 900,
          }}
        >
          Make it home
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 18, sm: 20 },
            fontWeight: 300,
            opacity: 0.6,
            mb: 10,
          }}
        >
          Add widgets to your to-do list and explore 32+ themes
        </Typography>
      </Container>
      <ThemeContextProvider>
        <ThemeSelector />
        <Container
          sx={{
            display: "flex",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              gap: 2,
              flex: 1,
              overflow: "hidden",
              maxWidth: "100%",
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
              <UpNext />
              <Time />
            </Box>
            <Box
              sx={{
                gap: 2,
                display: "flex",
                flex: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  maxWidth: "100%",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    maxWidth: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      flexDirection: "column",
                      gap: 2,
                      flex: 1,
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Keyboard />
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Quote />
                      <Weather />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flexShrink: 0,
                }}
              >
                <Integrated />
                <Customizable />
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
        }}
      >
        <Image
          src="/iso-icons/cta.svg"
          width={120}
          height={120}
          alt="CTA"
          style={{ margin: "auto", display: "block" }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 27, sm: 40 },
            mt: 2,
            color: mintDark.mint11,
            fontWeight: 900,
            mb: 5,
          }}
        >
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

export function Home() {
  return (
    <>
      <Header />
      <Separator />
      <Tasks />
      <Collections />
      <InteractiveWidgets />
      <CTA />
    </>
  );
}
