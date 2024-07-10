import { Box, CircularProgress } from "@mui/material";
import { mintDark } from "@radix-ui/colors";

export function LoadingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CircularProgress
        size={30}
        style={{
          color: mintDark.mint11,
        }}
      />
    </Box>
  );
}
