import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Icon,
  Toolbar,
  Typography,
} from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { AgendaFeature } from "./AgendaFeature";
import { BoardsFeature } from "./BoardsFeature";
import { purpleDark } from "@radix-ui/colors";
import Image from "next/image";

function CoachFeature({ featureStyles }: any) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: 200,
          my: 4,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: `${purpleDark["purple11"]}`,
            opacity: 0.2,
            zIndex: -1,
            width: 200,
            height: 200,
            borderRadius: 999,
            filter: "blur(30px)",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${purpleDark["purple5"]}!important`,
          }}
        >
          Achieve more
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${purpleDark["purple7"]}!important`,
          }}
        >
          with Coach
        </Typography>
      </Box>
      <Typography
        sx={{
          ...featureStyles.featureDescription,
          color: purpleDark["purple8"],
        }}
      >
        Achieve personal goals by adding small tasks to enrich your daily
        routine. Receive daily reminders to nudge yourself.
      </Typography>

      <Box sx={{ p: 4, px: 8, mt: 4 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: "ios_share",
              name: "Share your progress",
              description:
                "Share your progress with your friends via your favorite social media",
            },
            {
              icon: "notifications",
              name: "Daily reminders",
              description: "Receive daily nudges to work towards goals",
            },
            {
              icon: "local_fire_department",
              name: "Coach streak",
              description: "Maintain a streak to keep yourself motivated",
            },
            {
              icon: "view_column",
              name: "Adapt to your needs",
              description: "Sort columns by priority, due date, or name",
            },
          ].map((feature) => (
            <Grid item xs={12} md={6} key={feature.name}>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: purpleDark["purple12"],
                }}
              >
                <Box
                  sx={{
                    background: `${purpleDark["purple12"]}`,
                    ...featureStyles.blur,
                    opacity: 0.4,
                  }}
                />
                <CardContent sx={{ zIndex: 9, position: "relative" }}>
                  <Typography sx={featureStyles.textDescriptionTitle}>
                    <Icon>{feature.icon}</Icon> {feature.name}
                  </Typography>
                  <Typography sx={featureStyles.textDescriptionParagraph}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export function Features() {
  const [showToolbar, setShowToolbar] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) =>
    setShowToolbar(latest > screenHeight - 200)
  );

  const featureStyles = {
    featureTitle: {
      fontWeight: 800,
    },
    featureSubTitle: {
      mb: 4,
    },
    featureDescription: {
      textAlign: "center",
      maxWidth: "100vw",
      width: "550px",
      fontSize: "1.5rem",
      fontWeight: 600,
      margin: "auto",
      mt: -7,
    },
    textDescriptionTitle: {
      fontWeight: 800,
      display: "flex",
      gap: 2,
      mt: "-3px",
      mb: 1,
    },
    textDescriptionParagraph: {
      mt: 1,
    },
    card: {
      width: "100%",
      border: "1px solid",
      borderRadius: 8,
      boxShadow: "none",
      position: "relative",
      "& .MuiCardContent-root": {
        p: 4,
      },
    },
    cardImage: {
      width: "100%",
      height: "auto",
      maxWidth: "400px",
      zIndex: 9,
      position: "relative",
      float: "right",
      borderTop: "1px solid",
      borderLeft: "1px solid",
      borderTopLeftRadius: "28px",
    },
    blur: {
      width: 300,
      height: 300,
      borderRadius: 999,
      filter: "blur(40px)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Box>
      <Box sx={{ px: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={featureStyles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Sync across devices
                </Typography>
                <Typography>
                  Sign into your Dysperse account on any device
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={featureStyles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Spotlight anything
                </Typography>
                <Typography>
                  Search anything in seconds with our command menu
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Card sx={featureStyles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Customize your Dysperse
                </Typography>
                <Typography>
                  Change the colors and theme to make Dysperse your own
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={featureStyles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Collaborative by default
                </Typography>
                <Typography>Invite up to 5 people to your group</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <AppBar
        elevation={0}
        color="inherit"
        sx={{
          transition: "all .2s",
          top: showToolbar ? "60px" : "50px",
          pointerEvents: showToolbar ? "all" : "none",
          opacity: showToolbar ? 1 : 0,
          position: "fixed",
          backdropFilter: "blur(10px)",
          background: showToolbar ? "rgba(255,255,255,.5)" : "transparent",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          height: "45px",
          px: { sm: 5 },
        }}
      >
        <Toolbar
          sx={{
            height: "45px!important",
            minHeight: "45px!important",
            // justifyContent: "center",
            gap: 1,
          }}
        >
          <Button size="small" variant="contained">
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

      {/* Separate the content below the header */}
      <Box sx={{ mb: 10, borderTop: "1px solid rgba(0,0,0,0.05)" }} />

      <AgendaFeature featureStyles={featureStyles} />
      <BoardsFeature featureStyles={featureStyles} />
      <CoachFeature featureStyles={featureStyles} />
    </Box>
  );
}
