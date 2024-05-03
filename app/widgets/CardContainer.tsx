"use client";
import { Box, SxProps } from "@mui/material";
import { mintDark, addHslAlpha } from "../themes";

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
      color: mintDark.mint11,
      flex: 1,
      bgcolor: addHslAlpha(mintDark.mint2, 0.5),
      backdropFilter: "blur(10px)",
      display: "flex",
      px: 5,
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
