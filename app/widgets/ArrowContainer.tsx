"use client";
import { Box, Typography } from "@mui/material";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"] });

export const ArrowContainer = ({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "start",
      mt: 1,
      mb: reverse ? 0 : -1,
      justifyContent: "center",
      opacity: 0.6,
    }}
  >
    <Image
      alt=""
      src="/arrow.png"
      style={{
        filter: "invert(1)",
        marginTop: -5,
        order: reverse ? 1 : undefined,
        transform: reverse ? "rotate(-110deg) scaleY(-1)" : "rotate(-60deg)",
      }}
      width={30}
      height={30}
    />
    <Typography
      sx={{
        // transform: reverse ? "rotate(1deg)" : "rotate(-2deg)",
        mt: -0.3,
      }}
      className={caveat.className}
    >
      {text}
    </Typography>
  </Box>
);
