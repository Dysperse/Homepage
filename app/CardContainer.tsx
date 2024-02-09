"use client";
import { Box, SxProps } from "@mui/material";
import { mintDark } from "./themes";
import { addHslAlpha } from "./addHslAlpha";

export const CardContainer = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box
    className="card"
    sx={{
      bgcolor: addHslAlpha(mintDark.mint2, 0.5),
      backdropFilter: "blur(10px)",
      display: "flex",
      px: 5,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 7,
      border: `1px solid ${mintDark.mint5}`,
      ...sx,
    }}
  >
    {children}
  </Box>
);
