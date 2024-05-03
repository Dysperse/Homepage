"use client";
import { Box, SxProps } from "@mui/material";
import { mintDark, addHslAlpha } from "../themes";

export const CardContainer = ({
  children,
  sx,
  onClick,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
}) => (
  <Box
    onClick={onClick}
    className="card"
    sx={{
      userSelect: "none",
      color: mintDark.mint11,
      flex: 1,
      bgcolor: mintDark.mint2,
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
