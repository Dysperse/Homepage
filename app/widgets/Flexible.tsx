"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CardContainer } from "./CardContainer";
import { mintDark } from "../themes";

export const Flexible = () => {
  const [selected, setSelected] = useState("Kanban");
  const options = {
    Planner: "transition_slide",
    Kanban: "view_kanban",
    Stream: "whatshot",
    Grid: "view_cozy",
    Workload: "exercise",
    List: "view_agenda",
    Matrix: "target",
    Calendar: "calendar_today",
  };

  return (
    <CardContainer
      sx={{
        flex: undefined,
        p: 1,
        justifyContent: "flex-start",
        overflow: "hidden",
        minWidth: 170,
        maxHeight: 390,
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 50,
          pointerEvents: "none",
          background: `linear-gradient(transparent, ${mintDark.mint2})`,
          zIndex: 1,
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 0.3,
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {Object.keys(options).map((t) => {
          const option = options[t];

          return (
            <Box
              key={option}
              onClick={() => setSelected(option)}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                px: 1.5,
                py: 1.5,
                borderRadius: 5,
                backgroundColor:
                  selected === option ? mintDark.mint4 : "transparent",
                "&:hover": {
                  backgroundColor:
                    selected === option ? mintDark.mint5 : mintDark.mint3,
                },
                "&:active": {
                  backgroundColor:
                    selected === option ? mintDark.mint6 : mintDark.mint4,
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
                {option}
              </span>
              <Typography
                sx={{
                  color: mintDark.mint11,
                  fontSize: 16,
                  fontWeight: 300,
                }}
              >
                {t}
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
          );
        })}
      </Box>
    </CardContainer>
  );
};
