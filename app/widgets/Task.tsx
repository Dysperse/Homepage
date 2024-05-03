"use client";
import { Box, Chip, Typography } from "@mui/material";
import { CardContainer } from "./CardContainer";
import { jadeDark, orangeDark } from "../themes";
import { useState } from "react";

export const Task = () => {
  const [done, setDone] = useState(false);
  return (
    <CardContainer
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: 2,
        px: 3,
        backgroundColor: jadeDark.jade3,
        borderColor: jadeDark.jade5,
        color: jadeDark.jade12,
        "&, & *": {
          cursor: "pointer",
        },
        "&:hover": {
          backgroundColor: jadeDark.jade4,
        },
        "&:active": {
          backgroundColor: jadeDark.jade2,
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
          borderColor: jadeDark.jade9,
          backgroundColor: done ? jadeDark.jade9 : "transparent",
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
              color: jadeDark.jade3,
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
                style={{ color: orangeDark.orange11 }}
              >
                priority_high
              </span>
            }
          />
          <Chip
            sx={{
              background: jadeDark.jade5,
              color: jadeDark.jade11,
            }}
            icon={
              <span
                className="material-symbols-rounded"
                style={{ color: jadeDark.jade11 }}
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
