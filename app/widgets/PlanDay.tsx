"use client";
import { Box, Typography } from "@mui/material";
import { purpleDark } from "../themes";
import { CardContainer } from "./CardContainer";

export const PlanDay = () => (
  <CardContainer
    sx={{
      backgroundColor: purpleDark.purple3,
      borderColor: purpleDark.purple6,
      flex: 1,
      color: purpleDark.purple11,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      gap: 2,
      px: 3,
    }}
  >
    <span
      className="material-symbols-rounded"
      style={{ fontSize: 50, color: purpleDark.purple11 }}
    >
      stylus_note
    </span>
    <Box>
      <Typography fontWeight={900} fontSize={20}>
        Plan your day
      </Typography>
      <Typography sx={{ opacity: 0.6 }}>Tap to begin</Typography>
    </Box>
    <span
      className="material-symbols-rounded"
      style={{ fontSize: 24, color: purpleDark.purple11, marginLeft: "auto" }}
    >
      arrow_forward_ios
    </span>
  </CardContainer>
);
