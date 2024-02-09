"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { mintDark } from "../themes";
import { CardContainer, jetBrainsMono } from "../page";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const Integrated = () => (
  <CardContainer sx={{ flex: undefined, py: 1 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mt: 1,
        justifyContent: "center",
      }}
    >
      {[
        "zoom.png",
        "notion.png",
        "spotify.png",
        "google-calendar.png",
        "gmail.png",
        "canvas.webp",
      ].map((app) => (
        <Box
          sx={{
            border: `1px solid ${mintDark.mint5}`,
            backdropFilter: "blur(10px)",
            minWidth: 40,
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={app}
        >
          <Image alt="" src={`/integrations/${app}?t`} width={35} height={35} />
        </Box>
      ))}
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        my: 1,
        justifyContent: "center",
        opacity: 0.6,
      }}
    >
      <Typography
        sx={{ transform: "rotate(-2deg)" }}
        className={caveat.className}
      >
        Connected with the apps you love
      </Typography>
      <Image
        alt=""
        src="/arrow.png"
        style={{ filter: "invert(1)", transform: "rotate(-105deg) scaleY(-1)" }}
        width={30}
        height={30}
      />
    </Box>
  </CardContainer>
);
