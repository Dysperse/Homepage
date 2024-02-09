"use client";
import { Box, Typography } from "@mui/material";
import { orangeDark } from "../themes";
import { useEffect, useState } from "react";
import { CardContainer, jetBrainsMono } from "../page";

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
          className={jetBrainsMono.className}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            whiteSpace: "nowrap",
            color: orangeDark.orange9,
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
          className={jetBrainsMono.className}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.3,
            color: orangeDark.orange8,
            whiteSpace: "nowrap",
          }}
        >
          00:00 AM
        </Typography>
      </Box>
      <Typography
        sx={{ color: orangeDark.orange10, mt: 0.5, opacity: 0.8 }}
        fontWeight={300}
        variant="h5"
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
