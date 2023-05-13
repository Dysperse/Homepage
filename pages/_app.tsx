import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";

const theme = createTheme({
  components: {
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
            color: "#606060",
            "&:hover": {
              color: "#000",
              background: "rgba(0,0,0,0.04)",
            },
            "&:active": {
              color: "#000",
              background: "rgba(0,0,0,0.06)",
            },
          }),
        contained: ({ theme }) =>
          theme.unstable_sx({
            background: "rgba(0,0,0,0.1)",
            "&:hover": {
              color: "#000",
              background: "rgba(0,0,0,0.15)",
            },
            "&:active": {
              color: "#000",
              background: "rgba(0,0,0,0.2)",
            },
          }),
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
