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
      <svg
        width="120"
        height="120"
        viewBox="-10 -4 104 119"
        fill={mintDark.mint3}
        stroke={mintDark.mint11}
        strokeWidth={2}
        style={{ margin: "auto", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="0.5px"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M57.25 49.1935C56.34 46.6435 55.2199 44.0735 53.8899 41.4935C53.2899 40.3235 52.65 39.1535 51.97 37.9735C46.35 28.2735 39.51 21.1035 31.46 16.4535C28.82 14.9335 26.3099 13.8235 23.9399 13.1435C19.4799 11.8735 15.4899 12.0835 11.9399 13.7835L11.47 14.0135C11.29 14.1035 11.12 14.1935 10.95 14.2935C5.32995 17.4935 2.52002 23.7235 2.52002 32.9535C2.52002 38.6835 3.70006 44.6735 6.06006 50.9235C8.43006 57.1735 11.57 62.9135 15.5 68.1635V84.4235C15.5 86.9435 16.2801 89.5535 17.8401 92.2435C19.4001 94.9435 21.28 96.9235 23.48 98.1935C24.28 100.254 25.38 102.173 26.77 103.933C28.17 105.693 29.73 107.074 31.46 108.074C33.19 109.074 34.7599 109.494 36.1499 109.344C37.5499 109.204 38.65 108.554 39.45 107.414C39.65 107.524 39.84 107.633 40.04 107.733C41.98 108.713 43.6601 108.794 45.0901 107.974C46.3801 107.234 47.1401 105.944 47.3501 104.094C47.4101 103.704 47.4299 103.293 47.4299 102.863V86.6035C48.8399 86.3435 50.1601 85.9035 51.3701 85.2935L51.5901 85.1835C52.0201 84.9635 52.4301 84.7135 52.8301 84.4335C53.8601 83.7435 54.7899 82.9135 55.6399 81.9335C56.0699 81.4435 56.4801 80.9235 56.8601 80.3635C57.2301 79.8235 57.5799 79.2435 57.8799 78.6435C58.4499 77.5635 58.92 76.3835 59.29 75.1035C60.04 72.5735 60.4099 69.6635 60.4099 66.3735C60.4099 60.7335 59.36 55.0035 57.25 49.1935ZM39.45 98.2535L23.48 89.0335V84.9135L27.3 87.1235L39.45 94.1335V98.2535ZM39.45 89.5435L31.5601 84.9935L23.48 80.3335V75.9735L27.53 78.3135L35.6001 82.9735L39.45 85.1935V89.5435ZM41.1399 56.9735L35.5 60.1935L34.46 60.7835V73.1535L28.47 69.6935V57.3235L21.78 45.7935C21.18 44.7635 20.8799 43.7835 20.8799 42.8735C20.8799 41.9635 21.18 41.3235 21.78 40.9835C22.38 40.6435 23.0799 40.7035 23.8799 41.1635C24.6799 41.6235 25.38 42.3735 25.97 43.4035L31.46 52.8735L31.8 52.6835L36.95 49.7435C37.3 49.5435 37.6801 49.4835 38.0901 49.5535H38.1001C38.4001 49.6035 38.71 49.7335 39.05 49.9235C39.6 50.2435 40.1 50.6935 40.55 51.2835C40.76 51.5435 40.9499 51.8435 41.1399 52.1635C41.7399 53.1935 42.04 54.1735 42.04 55.0835C42.04 55.9935 41.7399 56.6335 41.1399 56.9735Z"
          stroke-linejoin="round"
        />
        <path
          d="M39.45 94.1335V98.2535L23.48 89.0335L27.3 87.1235L39.45 94.1335Z"
          stroke-linejoin="round"
        />
        <path
          d="M27.3 87.1235L23.48 89.0335V84.9135L27.3 87.1235Z"
          stroke-linejoin="round"
        />
        <path
          d="M27.53 78.3135L23.48 80.3335V75.9735L27.53 78.3135Z"
          stroke-linejoin="round"
        />
        <path
          d="M39.45 85.1935V89.5435L31.5601 84.9935L23.48 80.3335L27.53 78.3135L35.6001 82.9735L39.45 85.1935Z"
          stroke-linejoin="round"
        />
        <path
          d="M38.0901 49.5535L31.8101 52.6935C31.8101 52.6935 31.8 52.6935 31.8 52.6835L36.95 49.7435C37.3 49.5435 37.6801 49.4835 38.0901 49.5535Z"
          stroke-linejoin="round"
        />
        <path
          d="M34.46 66.7035V73.1535L28.47 69.6935L34.46 66.7035Z"
          stroke-linejoin="round"
        />
        <path
          d="M40.55 51.2835L33.24 54.9435L28.47 57.3235L21.78 45.7935C21.18 44.7635 20.8799 43.7835 20.8799 42.8735C20.8799 41.9635 21.18 41.3235 21.78 40.9835C22.38 40.6435 23.0799 40.7035 23.8799 41.1635C24.6799 41.6235 25.38 42.3735 25.97 43.4035L31.46 52.8735L31.8101 52.6935L38.0901 49.5535H38.1001C38.4001 49.6035 38.71 49.7335 39.05 49.9235C39.6 50.2435 40.1 50.6935 40.55 51.2835Z"
          stroke-linejoin="round"
        />
        <path
          d="M42.04 55.0835C42.04 56.0035 41.7399 56.6335 41.1399 56.9735L35.5 60.1935L34.46 60.7835V66.7035L28.47 69.6935V57.3235L33.24 54.9435L40.55 51.2835C40.76 51.5435 40.9499 51.8435 41.1399 52.1635C41.7399 53.1935 42.04 54.1735 42.04 55.0835Z"
          stroke-linejoin="round"
        />
        <path
          d="M80.4099 56.3735C80.4099 62.2535 79.2201 66.9134 76.8601 70.3634C75.4001 72.5034 73.6401 74.1035 71.5801 75.1935L71.52 75.2235L67.4299 77.2635L56.78 82.5935L52.95 84.5035L51.5901 85.1835C52.0201 84.9635 52.4301 84.7135 52.8301 84.4335C53.8601 83.7435 54.7899 82.9135 55.6399 81.9335C56.0699 81.4435 56.4801 80.9234 56.8601 80.3634C57.2301 79.8234 57.5799 79.2435 57.8799 78.6435C58.4499 77.5635 58.92 76.3835 59.29 75.1035C60.04 72.5735 60.4099 69.6635 60.4099 66.3735C60.4099 60.7335 59.36 55.0035 57.25 49.1935C56.34 46.6435 55.2199 44.0735 53.8899 41.4935C53.2899 40.3235 52.65 39.1535 51.97 37.9735C46.35 28.2735 39.51 21.1035 31.46 16.4535C28.82 14.9335 26.3099 13.8235 23.9399 13.1435C19.4799 11.8735 15.4899 12.0835 11.9399 13.7835L30.95 4.29345C36.58 1.08345 43.41 1.80348 51.46 6.45348C59.51 11.1035 66.35 18.2735 71.97 27.9735C77.59 37.6735 80.4099 47.1335 80.4099 56.3735Z"
          stroke-linejoin="round"
        />
        <path
          d="M67.4299 77.2635V92.8635C67.4299 95.3835 66.6501 97.0835 65.0901 97.9735L45.0901 107.974C46.3801 107.234 47.1401 105.944 47.3501 104.094C47.4101 103.704 47.4299 103.293 47.4299 102.863V86.6035C48.8399 86.3435 50.1601 85.9035 51.3701 85.2935L51.5901 85.1835L52.95 84.5035L56.78 82.5935L67.4299 77.2635Z"
          stroke-linejoin="round"
        />
        <path d="M40.04 107.733L38.23 108.633" stroke-linejoin="round" />
      </svg>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 40,
          mt: 2,
          fontWeight: 900,
        }}
      >
        It all starts with an idea
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: 300,
          opacity: 0.6,
          mb: 10,
        }}
      >
        Tasks come in all shapes and sizes
      </Typography>

      <Container>
        <Grid2 container spacing={5}>
          <Grid2 xs={12} md={7}>
            <CreateTask />
          </Grid2>
          <Grid2
            xs={12}
            md={5}
            sx={{
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
      <svg
        width="120"
        height="120"
        viewBox="23 0 80 49"
        fill={mintDark.mint3}
        stroke={mintDark.mint11}
        strokeWidth={1.5}
        style={{ margin: "auto", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="0.5px"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M95.9694 36.9394C95.9694 37.4494 95.9294 37.8894 95.8494 38.2594C95.7594 38.6294 95.6094 38.9794 95.3894 39.2994C94.1994 41.0594 92.7694 42.3894 91.0794 43.2894L90.4094 43.6194L71.9395 52.8694C71.9395 52.8694 71.9194 52.8194 71.8994 52.7994C73.2394 51.9394 74.3994 50.7694 75.3894 49.2994C75.6094 48.9794 75.7594 48.6294 75.8494 48.2594C75.9294 47.8894 75.9694 47.4494 75.9694 46.9394C75.9694 46.4294 75.9294 45.9394 75.8494 45.4694C75.7594 45.0094 75.6094 44.4794 75.3894 43.9094C75.1194 43.2194 74.8394 42.5294 74.5494 41.8494C73.2494 38.8194 71.7294 35.9394 69.9694 33.1994C68.7594 31.2994 67.4294 29.4594 65.9894 27.6994C64.2594 25.5894 62.4795 23.6794 60.6295 21.9894C58.2195 19.7694 55.6995 17.9094 53.0695 16.3894C52.5795 16.0994 52.0794 15.8394 51.5994 15.5794C48.5494 14.0094 45.6395 13.0894 42.8795 12.8194C41.9395 12.7194 41.0194 12.6994 40.1094 12.7594C38.6894 12.8494 37.3694 13.1394 36.1694 13.6294L42.6295 10.3894L55.2595 4.03937C56.6995 3.29937 58.3194 2.87937 60.1094 2.75937C64.1094 2.49937 68.4295 3.71938 73.0695 6.38938C77.7195 9.06938 82.0194 12.8394 85.9894 17.6994C89.9594 22.5594 93.0894 27.9594 95.3894 33.9094C95.6094 34.4794 95.7594 35.0094 95.8494 35.4694C95.9294 35.9394 95.9694 36.4294 95.9694 36.9394Z"
          stroke-linejoin="round"
        />
        <path
          d="M75.8492 45.4693C75.7592 45.0093 75.6092 44.4793 75.3892 43.9093C75.1192 43.2193 74.8392 42.5293 74.5492 41.8493C73.2492 38.8193 71.7292 35.9393 69.9692 33.1993C68.7592 31.2993 67.4292 29.4593 65.9892 27.6993C64.2592 25.5893 62.4792 23.6793 60.6292 21.9893C58.2192 19.7693 55.6992 17.9093 53.0692 16.3893C52.5792 16.0993 52.0792 15.8393 51.5992 15.5793C48.5492 14.0093 45.6392 13.0893 42.8792 12.8193C41.9392 12.7193 41.0192 12.6993 40.1092 12.7593C38.6892 12.8493 37.3692 13.1393 36.1692 13.6293C33.9992 14.4993 32.1992 15.9993 30.7592 18.1393C30.5392 18.4593 30.3892 18.8093 30.2992 19.1793C30.2192 19.5393 30.1792 19.9893 30.1792 20.4993C30.1792 21.0093 30.2192 21.4993 30.2992 21.9693C30.3892 22.4293 30.5392 22.9493 30.7592 23.5293C32.0592 26.8893 33.6192 30.0693 35.4592 33.0793C35.6792 33.4593 35.9192 33.8393 36.1692 34.2193C37.3792 36.1293 38.7192 37.9693 40.1592 39.7393C40.2792 39.8893 40.3992 40.0393 40.5292 40.1793C41.5492 41.4093 42.5892 42.5693 43.6692 43.6593C44.9992 45.0193 46.3792 46.2693 47.7792 47.3993C49.4992 48.7793 51.2592 49.9893 53.0692 51.0393C54.6592 51.9493 56.2092 52.6993 57.7192 53.2693H57.7292C58.5092 53.5693 59.2792 53.8193 60.0392 54.0193H60.0492C62.1292 54.5793 64.1092 54.7993 66.0292 54.6793C67.6792 54.5693 69.1792 54.1993 70.5192 53.5793L70.9292 53.3793C71.2592 53.2093 71.5892 53.0193 71.8992 52.7993C73.2392 51.9393 74.3992 50.7693 75.3892 49.2993C75.6092 48.9793 75.7592 48.6293 75.8492 48.2593C75.9292 47.8893 75.9692 47.4493 75.9692 46.9393C75.9692 46.4293 75.9292 45.9393 75.8492 45.4693ZM61.4592 38.7593C61.4192 41.3493 60.6092 43.0893 59.0292 43.9893C58.2092 44.4593 57.2992 44.6393 56.2992 44.5093C55.3092 44.4093 54.2392 44.0093 53.0692 43.3393C53.0292 43.3093 52.9792 43.2893 52.9392 43.2593C51.7792 42.5693 50.6992 41.6993 49.7092 40.6493C48.7692 39.6393 47.8992 38.4593 47.1192 37.1093C46.7892 36.5293 46.4892 35.9593 46.2292 35.3893C45.1992 33.1893 44.6892 31.0193 44.6892 28.8793C44.6892 28.7393 44.6892 28.5993 44.6992 28.4593C44.7792 25.9893 45.5892 24.3193 47.1192 23.4493C48.7392 22.5193 50.7292 22.7393 53.0692 24.0893C53.5592 24.3693 54.0292 24.6893 54.4892 25.0393C56.2292 26.3493 57.7492 28.1093 59.0292 30.3193C60.4292 32.7493 61.2292 35.1293 61.4092 37.4793C61.4492 37.8393 61.4592 38.1993 61.4592 38.5593V38.7593Z"
          stroke-linejoin="round"
        />
        <path
          d="M61.4594 38.5592V38.7592C61.4194 41.3492 60.6094 43.0892 59.0294 43.9892C58.2094 44.4592 57.2994 44.6392 56.2994 44.5092C55.3094 44.4092 54.2395 44.0092 53.0695 43.3392C53.0295 43.3092 52.9795 43.2892 52.9395 43.2592C51.7795 42.5692 50.6994 41.6992 49.7094 40.6492C48.7694 39.6392 47.8994 38.4592 47.1194 37.1092C46.7894 36.5292 46.4894 35.9592 46.2294 35.3892C45.1994 33.1892 44.6895 31.0192 44.6895 28.8792C44.6895 28.7392 44.6895 28.5992 44.6995 28.4592C44.7795 25.9892 45.5894 24.3192 47.1194 23.4492C48.7394 22.5192 50.7295 22.7392 53.0695 24.0892C53.5595 24.3692 54.0294 24.6892 54.4894 25.0392L49.5894 27.4792C49.5894 27.4792 49.6194 27.4992 49.6394 27.5092C49.5894 27.5192 49.5495 27.5492 49.5095 27.5692C48.5295 28.1292 48.0394 29.2092 48.0394 30.8092C48.0394 32.4092 48.5295 34.0592 49.5095 35.7492C50.3795 37.2492 51.4094 38.3992 52.5994 39.1992C52.7094 39.2692 52.8195 39.3392 52.9395 39.4092C52.9795 39.4392 53.0295 39.4592 53.0695 39.4892C54.3095 40.2092 55.3894 40.3892 56.2994 40.0292C56.4194 39.9892 56.5294 39.9292 56.6394 39.8692L60.6394 37.8692L61.4094 37.4792C61.4494 37.8392 61.4594 38.1992 61.4594 38.5592Z"
          stroke-linejoin="round"
        />
        <path
          d="M61.4094 37.4796L60.6393 37.8696L56.6393 39.8696C57.6193 39.3096 58.1094 38.2396 58.1094 36.6496V36.6296C58.1094 35.0196 57.6193 33.3796 56.6393 31.6896C55.6593 29.9996 54.4694 28.7496 53.0694 27.9396C51.7394 27.1696 50.5893 27.0196 49.6393 27.5096C49.6193 27.4996 49.6094 27.4896 49.5894 27.4796L54.4894 25.0396C56.2294 26.3496 57.7494 28.1095 59.0294 30.3195C60.4294 32.7495 61.2294 35.1296 61.4094 37.4796Z"
          stroke-linejoin="round"
        />
      </svg>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 40,
          mt: 2,
          fontWeight: 900,
        }}
      >
        Gain new perspectives
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: 300,
          opacity: 0.6,
          mb: 10,
        }}
      >
        Labels can be part of as many collections as you&apos;d like <br />
        We&apos;ve handcrafted eight different ways to view them
      </Typography>

      <Container>
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
                    px: 3,
                    borderRadius: 5,
                  }}
                >
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 40 }}
                  >
                    {value}
                  </span>
                  <Typography fontSize={20} fontWeight={300}>
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
    <Box
      sx={{
        color: mintDark.mint11,
        mt: 10,
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 101 112"
        fill={mintDark.mint3}
        stroke={mintDark.mint11}
        strokeWidth={1.5}
        style={{ margin: "auto", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="0.5px"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M56.3899 56.7334L55.71 57.0634L57.0298 57.8234L56.3899 56.7334Z"
          stroke-linejoin="round"
        />
        <path
          d="M77.7998 74.2633C77.5598 72.6833 77.2599 71.0833 76.8799 69.4733C76.4899 67.7333 76.02 65.9833 75.47 64.2133C73.97 59.3633 72.0798 54.6733 69.7798 50.1433C69.7598 50.1133 69.75 50.0833 69.73 50.0533C68.97 48.5533 68.1698 47.0733 67.3198 45.6133C66.8498 44.7933 66.3599 43.9934 65.8699 43.1934C62.7699 38.2034 59.21 33.5633 55.22 29.2733C50.58 24.2933 45.6198 20.2833 40.3398 17.2333C35.2698 14.3033 30.48 12.6033 25.99 12.1433C25.82 12.1233 25.64 12.1033 25.47 12.0933C21.72 11.7833 18.3699 12.2433 15.4099 13.4633C14.7099 13.7533 14.0299 14.0833 13.3699 14.4633C9.92987 16.4133 7.21996 19.4833 5.20996 23.6433C3.20996 27.8133 2.20996 32.9233 2.20996 38.9733C2.20996 45.0233 3.20996 51.2933 5.20996 57.7733C7.21996 64.2533 9.92987 70.4534 13.3699 76.3734C16.7999 82.2934 20.83 87.7433 25.47 92.7133C30.11 97.6933 35.0698 101.703 40.3398 104.753C45.6198 107.793 50.58 109.503 55.22 109.893C59.85 110.273 63.8898 109.483 67.3198 107.523C70.3198 105.813 72.78 103.253 74.7 99.8433C74.96 99.3633 75.22 98.8633 75.47 98.3433C77.47 94.1733 78.48 89.0633 78.48 83.0133C78.48 80.1433 78.2598 77.2233 77.7998 74.2633ZM21.47 41.1234C21.47 40.2534 21.7498 39.6533 22.3298 39.3233L23.0798 38.8933L25.7598 37.3633C26.5198 36.9333 27.43 37.0134 28.48 37.6234C29.52 38.2234 30.4299 39.1934 31.1899 40.5034L32.6799 43.1133L34.5298 46.3733C35.0398 47.3233 35.3098 48.2433 35.3398 49.1333C35.3698 50.0233 35.0998 50.6333 34.5298 50.9633C33.9598 51.2933 33.2898 51.2333 32.5298 50.7933C31.7598 50.3533 31.0998 49.6333 30.5298 48.6533L28.5198 45.1934L26.3298 46.3433C25.8798 46.5433 25.3598 46.5033 24.7598 46.2233C24.5998 46.1633 24.4398 46.0733 24.2798 45.9733C23.4898 45.4833 22.8398 44.7933 22.3298 43.9133C21.7498 42.9333 21.47 42.0034 21.47 41.1234ZM58.0798 83.9233C56.2198 86.2633 53.7798 87.5733 50.7698 87.8633C50.6898 87.8733 50.6198 87.8733 50.5398 87.8833C47.4298 88.1333 44.0298 87.1834 40.3398 85.0634C36.7198 82.9634 33.3399 79.9933 30.1899 76.1333C27.0499 72.2733 24.5199 68.0434 22.6099 63.4434C22.2299 62.3534 22.26 61.4933 22.71 60.8733C23.15 60.2533 23.82 60.2033 24.71 60.7133L32.8198 65.3933L55.98 78.7733C56.87 79.2833 57.54 80.1033 57.98 81.2433C58.42 82.3733 58.4598 83.2633 58.0798 83.9233ZM58.3599 64.7233C57.7899 65.0533 57.1199 64.9933 56.3599 64.5533C55.5999 64.1133 54.9299 63.4333 54.3599 62.5233L52.1599 58.8433L50.1599 59.9933C49.5899 60.3133 48.9199 60.2534 48.1599 59.8134C47.3999 59.3734 46.7299 58.6633 46.1599 57.6733C45.5899 56.6933 45.2998 55.7633 45.2998 54.8833C45.2998 54.0033 45.5598 53.3933 46.0598 53.0233L47.3999 52.2633L49.5 51.0733C50.26 50.6333 51.16 50.7233 52.21 51.3233C53.26 51.9333 54.1699 52.8933 54.9299 54.2133L56.3899 56.7333L57.0298 57.8233L58.3599 60.1233C58.9299 61.1133 59.22 62.0433 59.22 62.9233C59.22 63.8033 58.9299 64.3933 58.3599 64.7233Z"
          stroke-linejoin="round"
        />
        <path
          d="M58.0798 83.9234C56.2198 86.2634 53.7797 87.5734 50.7697 87.8634C50.6897 87.8734 50.6197 87.8733 50.5397 87.8833C47.4297 88.1333 44.0298 87.1834 40.3398 85.0634C36.7198 82.9634 33.3399 79.9933 30.1899 76.1333C27.0499 72.2733 24.5198 68.0434 22.6098 63.4434C22.2298 62.3534 22.2599 61.4934 22.7099 60.8734C23.1499 60.2534 23.8199 60.2034 24.7099 60.7134L32.8198 65.3934L55.9799 78.7734C56.8699 79.2834 57.5399 80.1034 57.9799 81.2434C58.4199 82.3734 58.4598 83.2634 58.0798 83.9234Z"
          stroke-linejoin="round"
        />
        <path
          d="M59.22 62.9233C59.22 63.7933 58.9299 64.3933 58.3599 64.7233C57.7899 65.0533 57.1199 64.9933 56.3599 64.5533C55.5999 64.1133 54.9299 63.4333 54.3599 62.5233L52.1599 58.8433L55.71 57.0634L57.0298 57.8233L58.3599 60.1234C58.9299 61.1134 59.22 62.0433 59.22 62.9233Z"
          stroke-linejoin="round"
        />
        <path
          d="M56.3899 56.7333L55.71 57.0633L52.1599 58.8433L50.1599 59.9933C49.5899 60.3133 48.9199 60.2533 48.1599 59.8133C47.3999 59.3733 46.7299 58.6633 46.1599 57.6733C45.5899 56.6933 45.2998 55.7633 45.2998 54.8833C45.2998 54.0033 45.5598 53.3933 46.0598 53.0233L47.3999 52.2633L49.5 51.0733C50.26 50.6333 51.16 50.7233 52.21 51.3233C53.26 51.9333 54.1699 52.8933 54.9299 54.2133L56.3899 56.7333Z"
          stroke-linejoin="round"
        />
        <path
          d="M35.3398 49.1332C35.3698 50.0232 35.0998 50.6333 34.5298 50.9633C33.9598 51.2933 33.2898 51.2333 32.5298 50.7933C31.7598 50.3533 31.0998 49.6333 30.5298 48.6533L28.5198 45.1933L32.6799 43.1133L34.5298 46.3733C35.0398 47.3233 35.3098 48.2432 35.3398 49.1332Z"
          stroke-linejoin="round"
        />
        <path
          d="M32.6799 43.1133L28.5198 45.1933L26.3298 46.3433C25.8798 46.5433 25.3598 46.5033 24.7598 46.2233C24.5998 46.1633 24.4398 46.0733 24.2798 45.9733C23.4898 45.4833 22.8398 44.7933 22.3298 43.9133C21.7498 42.9333 21.47 42.0033 21.47 41.1233C21.47 40.2433 21.7498 39.6533 22.3298 39.3233L23.0798 38.8933L25.7598 37.3633C26.5198 36.9333 27.43 37.0133 28.48 37.6233C29.52 38.2233 30.4299 39.1933 31.1899 40.5033L32.6799 43.1133Z"
          stroke-linejoin="round"
        />
        <path
          d="M98.48 73.0133C98.48 79.0633 97.47 84.1733 95.47 88.3433C93.47 92.5033 90.7498 95.5733 87.3198 97.5233L67.3198 107.523C70.3198 105.813 72.78 103.253 74.7 99.8433C74.96 99.3633 75.22 98.8633 75.47 98.3433C77.47 94.1733 78.48 89.0633 78.48 83.0133C78.48 80.1433 78.2598 77.2233 77.7998 74.2633C77.5598 72.6833 77.2599 71.0833 76.8799 69.4733C76.4899 67.7333 76.02 65.9833 75.47 64.2133C73.97 59.3633 72.0798 54.6733 69.7798 50.1433C69.7598 50.1133 69.75 50.0833 69.73 50.0533C68.97 48.5533 68.1698 47.0733 67.3198 45.6133C66.8498 44.7933 66.3599 43.9933 65.8699 43.1933C62.7699 38.2033 59.21 33.5633 55.22 29.2733C50.58 24.2933 45.6198 20.2833 40.3398 17.2333C35.2698 14.3033 30.48 12.6033 25.99 12.1433C25.82 12.1233 25.64 12.1033 25.47 12.0933C21.72 11.7833 18.3699 12.2433 15.4099 13.4633L33.3699 4.46329C36.7999 2.50329 40.83 1.7133 45.47 2.0933C50.11 2.4733 55.0698 4.19331 60.3398 7.23331C65.6198 10.2833 70.58 14.2933 75.22 19.2733C79.85 24.2433 83.8898 29.6933 87.3198 35.6133C90.7498 41.5333 93.47 47.7333 95.47 54.2133C97.47 60.6933 98.48 66.9533 98.48 73.0133Z"
          stroke-linejoin="round"
        />
      </svg>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 40,
          mt: 2,
          fontWeight: 900,
        }}
      >
        Make it home
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: 300,
          opacity: 0.6,
          mb: 10,
        }}
      >
        Add widgets to your to-do list and explore 32+ themes
      </Typography>
      <ThemeContextProvider>
        <ThemeSelector />
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box sx={{ maxWidth: 1000, mx: "auto" }}>
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
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        gap: 2,
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
