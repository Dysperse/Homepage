import "@/styles/globals.css";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ ...(isDark && { background: "#000", color: "#fff" }) }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
