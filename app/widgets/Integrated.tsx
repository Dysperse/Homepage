"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { useColorTheme } from "../useColor";
import { ArrowContainer } from "./ArrowContainer";
import { CardContainer } from "./CardContainer";

export const Integrated = () => {
  const theme = useColorTheme();

  return (
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
              border: `1px solid ${theme[5]}`,
              backdropFilter: "blur(10px)",
              minWidth: { xs: 30, sm: 40 },
              maxWidth: { xs: 50, sm: 70 },
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={app}
          >
            <Image
              alt=""
              src={`/integrations/${app}?t`}
              width={35}
              height={35}
            />
          </Box>
        ))}
      </Box>
      <ArrowContainer text="Connected with the apps you love" />
    </CardContainer>
  );
};
