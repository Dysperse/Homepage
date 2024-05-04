"use client";
import { Box, Chip, Typography } from "@mui/material";
import { CardContainer } from "./CardContainer";
import { jadeDark, orangeDark } from "../themes";
import { useState } from "react";
import { useColorTheme } from "../useColor";

export const Task = () => {
  const theme = useColorTheme();
  const [done, setDone] = useState(false);

  return (
    <CardContainer
      sx={{
        flex: 1.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: 2,
        px: 3,
        color: theme[12],
        "&, & *": {
          cursor: "pointer",
        },
        "&:hover": {
          backgroundColor: theme[4],
        },
        "&:active": {
          backgroundColor: theme[2],
        },
      }}
      onClick={() => setDone(!done)}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderWidth: 1,
          borderRadius: 99,
          borderColor: theme[9],
          backgroundColor: done ? theme[9] : "transparent",
          borderStyle: "solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {done && (
          <span
            className="material-symbols-rounded"
            style={{
              color: theme[3],
              fontSize: 24,
              fontVariationSettings: `'wght' 500`,
            }}
          >
            check
          </span>
        )}
      </Box>
      <Box>
        <Typography
          fontWeight={900}
          sx={{
            textDecoration: done ? "line-through" : "none",
            opacity: done ? 0.6 : 1,
            textDecorationThickness: 2,
          }}
        >
          Football Practice @ 8PM
        </Typography>
        <Typography sx={{ opacity: done ? 0.4 : 0.5 }}>
          remember to bring gear and water bottle!!!
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 0.5, opacity: done ? 0.7 : 1 }}>
          <Chip
            sx={{
              background: orangeDark.orange5,
              color: orangeDark.orange11,
            }}
            label="Urgent"
            icon={
              <span
                className="material-symbols-rounded"
                style={{ color: theme[11] }}
              >
                priority_high
              </span>
            }
          />
          <Chip
            sx={{
              background: theme[5],
              color: theme[11],
            }}
            icon={
              <span
                className="material-symbols-rounded"
                style={{ color: theme[11] }}
              >
                calendar_today
              </span>
            }
            label="In 9 hours"
          />
        </Box>
      </Box>
    </CardContainer>
  );
};
