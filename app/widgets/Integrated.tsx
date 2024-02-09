"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { CardContainer } from "../page";
import { mintDark } from "../themes";
import { ArrowContainer } from "./ArrowContainer";

export const Integrated = () => (
  <CardContainer sx={{ flex: undefined, py: 1, pb: 3 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        my: 1,
        flexWrap: { xs: "wrap", sm: "nowrap" },
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
            minWidth: { xs: 30, md: 40 },
            maxWidth: { xs: 50, md: 70 },
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
    <ArrowContainer text="Connected with the apps you love" />
  </CardContainer>
);
