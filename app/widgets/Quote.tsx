"use client";
import { Fraunces } from "next/font/google";
import { CardContainer } from "./CardContainer";
import { Typography } from "@mui/material";
import { brownDark } from "../themes";
import { useColorTheme } from "../useColor";

const fraunces = Fraunces({ subsets: ["latin"] });

export const Quote = () => {
  const theme = useColorTheme();

  return (
    <CardContainer
      sx={{
        flex: 2,
        py: 5,
        gap: 1,
        maxWidth: 330,
        color: theme[11],
      }}
    >
      <Typography
        sx={{
          fontFamily: fraunces.style.fontFamily,
          fontWeight: 900,
          fontSize: 25,
        }}
      >
        &ldquo;The only way to do great work is to love what you do.&rdquo;
      </Typography>
      <Typography fontWeight={900} style={{ opacity: 0.6 }}>
        &mdash; Steve Jobs
      </Typography>
    </CardContainer>
  );
};
