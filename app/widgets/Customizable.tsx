"use client";
import { Box, Typography } from "@mui/material";
import { CardContainer, jetBrainsMono } from "../page";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"] });

export const Customizable = () => (
  <CardContainer>
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        mt: 1.5,
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
          transform: "rotate(-60deg)",
        }}
        width={30}
        height={30}
      />
      <Typography
        sx={{ transform: "rotate(-2deg)", mt: -0.3 }}
        className={caveat.className}
      >
        Customize literally anything
      </Typography>
    </Box>
  </CardContainer>
);
