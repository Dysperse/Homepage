"use client";
import { Box, Chip, Typography } from "@mui/material";
import { mintDark } from "../themes";
import { CardContainer, jetBrainsMono } from "../page";
import { useState } from "react";
import { Caveat } from "next/font/google";

export const Flexible = () => {
  const [selected, setSelected] = useState("Kanban");
  const options = [
    { icon: "calendar_today", text: "Agenda" },
    { icon: "view_kanban", text: "Kanban" },
    { icon: "view_agenda", text: "Stream" },
    { icon: "view_cozy", text: "Grid" },
    { icon: "exercise", text: "Workload" },
  ];
  return (
    <CardContainer
      sx={{
        flex: 1,
        px: 1,
        justifyContent: "flex-start",
        overflow: "hidden",
        minWidth: 180,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 0.3,
          mt: 1,
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {options.map((option) => (
          <Box
            key={option.text}
            onClick={() => setSelected(option.text)}
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              px: 2,
              py: 1.5,
              borderRadius: 5,
              backgroundColor:
                selected === option.text ? mintDark.mint4 : "transparent",
              "&:hover": {
                backgroundColor:
                  selected === option.text ? mintDark.mint5 : mintDark.mint3,
              },
              "&:active": {
                backgroundColor:
                  selected === option.text ? mintDark.mint6 : mintDark.mint4,
              },
            }}
          >
            <span
              style={{
                color: mintDark.mint11,
                // transition: "all .2s",
                fontVariationSettings: `"FILL" ${
                  selected === option.text ? 1 : 0
                }, "wght" 100, "GRAD" 0, "opsz" 40`,
              }}
              className="material-symbols-rounded"
            >
              {option.icon}
            </span>
            <Typography
              sx={{
                color: mintDark.mint11,
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              {option.text}
            </Typography>
            {selected === option.text && (
              <span
                style={{ marginLeft: "auto", color: mintDark.mint11 }}
                className="material-symbols-rounded"
              >
                check
              </span>
            )}
          </Box>
        ))}
      </Box>
    </CardContainer>
  );
};
