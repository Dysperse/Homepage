"use client";
import { Box, Typography } from "@mui/material";
import { skyDark } from "@radix-ui/colors";
import { CardContainer } from "../CardContainer";
import { JetBrains_Mono } from "next/font/google";

export const Weather = () => (
  <CardContainer
    sx={{
      background: `linear-gradient(180deg, ${skyDark.sky4} 0%, ${skyDark.sky2} 100%)`,
      flexDirection: "row",
      borderColor: skyDark.sky6,
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 150,
      px: 4,
    }}
  >
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          ml: -0.5,
          mb: 0.5,
        }}
      >
        <span className="material-symbols-rounded">location_on</span>
        <Typography fontWeight={600} fontSize={13}>
          San Francisco
        </Typography>
      </Box>
      <Typography variant="h3" fontWeight={900} className="monospace">
        74°
      </Typography>
      <Typography
        fontWeight={500}
        fontSize={20}
        marginTop={-0.5}
        sx={{ opacity: 0.7 }}
      >
        Partly cloudy
      </Typography>
    </Box>
    <span
      className="material-symbols-rounded"
      style={{ color: "white", fontSize: 50 }}
    >
      partly_cloudy_night
    </span>
  </CardContainer>
);
