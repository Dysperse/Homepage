"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useColorTheme } from "../useColor";
import { CardContainer } from "./CardContainer";

export const Flexible = () => {
  const theme = useColorTheme();

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
        backgroundColor: theme[2],
        borderColor: theme[5],
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 50,
          pointerEvents: "none",
          background: `linear-gradient(transparent, ${theme[2]})`,
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
        {Object.keys(options).map((t: any) => {
          const option = (options as any)[t];

          return (
            <Box
              key={option}
              onClick={() => setSelected(t)}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                px: 1.5,
                py: 1.5,
                borderRadius: 5,
                backgroundColor: selected === t ? theme[4] : "transparent",
                "&:hover": {
                  backgroundColor: theme[selected === t ? 5 : 3],
                },
                "&:active": {
                  backgroundColor: theme[selected === t ? 6 : 4],
                },
              }}
            >
              <span
                style={{
                  color: theme[11],
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
                  color: theme[11],
                  fontSize: 16,
                  fontWeight: 300,
                }}
              >
                {t}
              </Typography>
              {selected === t && (
                <span
                  style={{ marginLeft: "auto", color: theme[11] }}
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
