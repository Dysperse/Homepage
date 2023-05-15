import "@/styles/globals.css";
import {
  Box,
  CssBaseline,
  IconButton,
  NoSsr,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import React from "react";
import Countdown from "react-countdown";

export default function App({ Component, pageProps }: AppProps) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    components: {
      MuiCard: {
        defaultProps: {
          style: {
            background: "transparent",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
          color: "inherit",
        },
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              textTransform: "none",
              transition: "none",
              gap: "10px",
              borderRadius: 999,
              background: "transparent",
              color: isDark ? "#eee" : "#606060",
              "&:hover": {
                color: isDark ? "#fff" : "#000",
                background: isDark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.04)",
              },
              "&:active": {
                color: isDark ? "#fff" : "#000",
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.06)",
              },
            }),
          contained: ({ theme }) =>
            theme.unstable_sx({
              background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              "&:hover": {
                color: isDark ? "#fff" : "#000",
                background: isDark
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(0,0,0,0.15)",
              },
              "&:active": {
                color: isDark ? "#fff" : "#000",
                background: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.2)",
              },
            }),
        },
      },
    },
  });
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NoSsr>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 4,
          }}
        >
          <Box>
            <Box
              sx={{
                ...(!open && {
                  transform: "scale(.95)",
                  opacity: 0,
                  pointerEvents: "none",
                }),
                transition: "all .2s",
                position: "fixed",
                bottom: 0,
                right: 0,
                zIndex: 999,
                backdropFilter: "blur(10px)",
                background: "hsla(240,11%,10%,.9)",
                gap: 2,
                m: "20px",
                p: 3,
                color: "#fff",
                borderRadius: 5,
                width: "340px",
                maxWidth: "calc(100vw - 40px)",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 700 }}>
                  Product launch countdown
                </Typography>
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ color: "#fff" }}
                >
                  <span className="material-symbols-outlined">close</span>
                </IconButton>
              </Box>
              <Typography sx={{ mb: 2 }}>
                We&apos;re going live in May 2023 -<br /> are you excited?
              </Typography>
              <Countdown
                date={new Date("2023-05-27T00:00:00")}
                renderer={({ days, hours, minutes, seconds, completed }) => {
                  if (completed) {
                    // Render a completed state
                    return "Completed!";
                  } else {
                    const styles = {
                      background: "hsla(240,11%,40%,.2)",
                      color: "#fff",
                      p: 2,
                      py: 1,
                      borderRadius: 5,
                      width: "100%",
                    };
                    // Render a countdown
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          alignitems: "center",
                          gap: 1,
                          width: "100%",
                        }}
                      >
                        <Box sx={styles}>
                          <Typography variant="h6">{days}</Typography>
                          <Typography variant="body2">days</Typography>
                        </Box>
                        <Box sx={styles}>
                          <Typography variant="h6">{hours}</Typography>
                          <Typography variant="body2">hours</Typography>
                        </Box>
                        <Box sx={styles}>
                          <Typography variant="h6">{minutes}</Typography>
                          <Typography variant="body2">minutes</Typography>
                        </Box>
                      </Box>
                    );
                  }
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </NoSsr>

      <Box sx={{ ...(isDark && { background: "#000", color: "#fff" }) }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
