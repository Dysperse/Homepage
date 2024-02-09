"use client";
import { Box, Typography } from "@mui/material";
import { orangeDark } from "../themes";
import { useEffect, useState } from "react";
import { CardContainer } from "../CardContainer";
import { JetBrains_Mono, Jost } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
});

const jost = Jost({
  subsets: ["latin"],
  weight: "variable",
});

export const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CardContainer
      sx={{
        alignItems: "center",
        background: `linear-gradient(180deg, ${orangeDark.orange3} 0%, ${orangeDark.orange2} 100%)`,
        borderColor: orangeDark.orange6,
        minHeight: 150,
      }}
    >
      <Box
        sx={{
          width: 232,
          height: 54,
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            whiteSpace: "nowrap",
            color: orangeDark.orange9,
            fontFamily: jetBrainsMono.style.fontFamily + "!important",
          }}
        >
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "numeric",
          })}
        </Typography>
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.2,
            color: orangeDark.orange8,
            whiteSpace: "nowrap",
            fontFamily: jetBrainsMono.style.fontFamily + "!important",
          }}
        >
          00:00 AM
        </Typography>
      </Box>
      <Typography
        sx={{ color: orangeDark.orange10, mt: 0.5, opacity: 0.8 }}
        fontWeight={300}
        variant="h5"
        className={jost.className}
      >
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    </CardContainer>
  );
};
