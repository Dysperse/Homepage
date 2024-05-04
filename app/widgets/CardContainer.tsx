"use client";
import { Box, SxProps } from "@mui/material";
import { useColorTheme } from "../useColor";

export const CardContainer = ({
  children,
  sx,
  onClick,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
}) => {
  const theme = useColorTheme();

  return (
    <Box
      onClick={onClick}
      className="card"
      sx={{
        userSelect: "none",
        color: theme[11],
        flex: 1,
        bgcolor: theme[2],
        display: "flex",
        px: 5,
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 7,
        border: `1px solid ${theme[5]}`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
