"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { mintDark } from "./themes";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: { default: "#1E1E1E" },
    },
    typography: {
      fontFamily: jost.style.fontFamily,
    },
    components: {
      MuiTypography: {
        defaultProps: {
          className: jost.className,
        },
      },
      MuiButton: {
        defaultProps: {
          style: {
            transition: "none",
            textTransform: "none",
            borderRadius: 999,
            gap: "10px",
          },
          className: jost.className,
        },
      },
      MuiChip: {
        defaultProps: {
          className: jost.className,
        },
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              px: 2,
              height: 40,
            }),
        },
      },
      MuiIconButton: {
        defaultProps: {
          style: {
            color: mintDark.mint11,
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}