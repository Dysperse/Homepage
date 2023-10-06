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
              background: "rgba(255,255,255,0.1)",
              "&:hover": {
                color: "#fff",
                background: "rgba(255,255,255,0.15)",
              },
              "&:active": {
                color: "#fff",
                background: "rgba(255,255,255,0.2)",
              },
            }),
        },
      },
    },
    palette: {
      mode: "dark",
    },
  });
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ background: "#000", color: "#fff" }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
