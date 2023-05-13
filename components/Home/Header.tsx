import { Box, Button, Icon, Typography } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        flexDirection: "column",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(transparent, #fff)",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Image
        height={1080}
        width={1920}
        src="/cover.png"
        alt="hero"
        style={{
          opacity: 0.6,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      />
      <Button
        sx={{
          border: "2px solid #000",
          borderRadius: 999,
          px: 4,
          mb: 2,
          color: "#000",
          "&:hover": {
            backdropFilter: "blur(1px)",
          },
        }}
        size="large"
        color="inherit"
      >
        Introducing Dysperse AI
        <Icon>east</Icon>
      </Button>
      <Typography
        sx={{
          fontSize: { xs: 20, sm: 50 },
          mb: 2,
          textAlign: "center",
          fontWeight: 700,
          background: "linear-gradient(#000, #555)",
          whiteSpace: "nowrap",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-serif"
      >
        Dysperse is a radically different
        <br /> unified productivity platform
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 3,
          color: "#505050",
        }}
      >
        Introducing the new benchmark for productivity
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{
          borderRadius: 999,
          color: "#000",
          backdropFilter: "blur(2px)",
        }}
      >
        Get started <Icon>north_east</Icon>
      </Button>
    </Box>
  );
}
