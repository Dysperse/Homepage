"use client";
import { Box, Typography } from "@mui/material";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { mintDark } from "../themes";
import { useColorTheme } from "../useColor";

const caveat = Caveat({ subsets: ["latin"] });

export const ArrowContainer = ({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) => {
  const theme = useColorTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        mt: 1,
        mb: reverse ? 0 : -1,
        justifyContent: "center",
        opacity: 0.5,
        transform: "scale(0.95)",
        transition: "opacity 0.2s, transform .2s cubic-bezier(.17,.67,.4,1.81)",
        ".card:hover &": {
          opacity: 1,
          transform: "scale(1)",
        },
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
          mt: -0.3,
          color: theme[12],
          fontSize: 18,
          fontFamily: caveat.style.fontFamily + "!important",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
