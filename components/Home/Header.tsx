import { Box, Button, Icon, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export function Header() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        flexDirection: "column",
        overflow: "hidden",
        display: "flex",
        alignItems: { xs: "start", md: "center" },
        justifyContent: "center",
        position: "relative",
        userSelect: "none",
        px: 3,
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(transparent, #${
            isDark ? "000" : "fff"
          })`,
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Image
        blurDataURL={
          isDark
            ? "data:image/png;base64,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"
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFDQJcGv7LzQAAAABJRU5ErkJggg=="
        }
        placeholder="blur"
        height={1080}
        width={1920}
        src={isDark ? "/cover-darkMode.png" : "/cover.png"}
        alt="hero"
        style={{
          opacity: isDark ? 1 : 0.6,
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
          border: isDark ? "2px solid #fff" : "2px solid #000",
          borderRadius: 999,
          px: { xs: 2, md: 4 },
          py: { xs: 0.5, md: 1 },
          fontSize: { xs: "14px", md: "16px" },
          mb: 2,
          color: isDark ? "#fff" : "#000",
          "&:hover": {
            backdropFilter: "blur(1px)",
          },
        }}
        size="large"
        color="inherit"
        href="https://blog.dysperse.com/introducing-dysperse-ai"
        target="_blank"
      >
        Introducing Dysperse AI
        <Icon>east</Icon>
      </Button>
      <Typography
        sx={{
          fontSize: { xs: 30, md: 45 },
          mb: 2,
          textAlign: { xs: "left", md: "center" },
          fontWeight: 700,
          background: `linear-gradient(#${isDark ? "fff" : "000"}, #${
            isDark ? "606060" : "555"
          })`,
          whiteSpace: { md: "nowrap" },
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-serif"
      >
        Dysperse is a radically different
        <Typography
          sx={{ display: { xs: "inline", md: "block" }, fontSize: "inherit" }}
          component="span"
        >
          {" "}
          unified productivity platform
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: { md: "center" },
          fontWeight: 700,
          mb: 3,
          color: "#505050",
          fontSize: { xs: "15px", md: "20px" },
        }}
      >
        Introducing the new benchmark for productivity
      </Typography>
      <Button
        size="large"
        variant="contained"
        href="//my.dysperse.com/auth/signup"
        target="_blank"
        sx={{
          width: "auto",
          borderRadius: 999,
          color: isDark ? "#fff" : "#000",
          backdropFilter: "blur(2px)",
        }}
      >
        Get started <Icon>north_east</Icon>
      </Button>
    </Box>
  );
}
