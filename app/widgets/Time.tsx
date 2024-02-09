"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CardContainer } from "../CardContainer";
import { orangeDark } from "../themes";
import { addHslAlpha } from "../addHslAlpha";

export const Time = () => {
  const [timeZone, setTimeZone] = useState("PST");
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
        minHeight: { xs: 200, nd: 150 },
      }}
    >
      <Box
        sx={{
          background: orangeDark.orange5,
          borderRadius: 50,
          display: "flex",
          mb: 1,
          mt: -2,
          p: 0.3,
          "& > *": {
            flex: 1,
            textAlign: "center",
            fontWeight: 500,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            width: 50,
            color: orangeDark.orange9,
            border: `1px solid transparent`,
            "&.active": {
              border: `1px solid ${addHslAlpha(orangeDark.orange8, 0.5)}`,
              background: orangeDark.orange7,
              color: orangeDark.orange11,
            },
          },
        }}
      >
        {["PST", "EST"].map((t) => (
          <Box
            key={t}
            onClick={() => setTimeZone(t)}
            className={timeZone === t ? "active" : ""}
          >
            {t}
          </Box>
        ))}
      </Box>
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
          }}
          className="monospace"
        >
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "numeric",
            timeZone:
              timeZone === "PST" ? "America/Los_Angeles" : "America/New_York",
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
          }}
          className="monospace"
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
          timeZone:
            timeZone === "PST" ? "America/Los_Angeles" : "America/New_York",
        })}
      </Typography>
    </CardContainer>
  );
};
