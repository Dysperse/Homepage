"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { Jost } from "next/font/google";
import { useState } from "react";
import { Emoji } from "../Emoji";
import { useColorTheme } from "../useColor";
import { ArrowContainer } from "./ArrowContainer";
import { CardContainer } from "./CardContainer";

const jost = Jost({
  subsets: ["latin"],
  weight: "variable",
});

export const Familiar = () => {
  const theme = useColorTheme();
  const [selected, setSelected] = useState(0);

  return (
    <CardContainer
      sx={{
        display: "flex",
        justifyContent: "start",
        overflow: "hidden",
        p: 1.5,
        pb: 3,
        flex: 1.5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          mb: 1,
          gap: 0.5,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          maxHeight: 150,
          overflow: "hidden",
        }}
      >
        {[
          {
            emoji: "2708",
            primary: "trip to paris",
            secondary: "Kanban",
          },
          {
            emoji: "1f392",
            primary: "my assignments",
            secondary: "Agenda",
          },
          {
            emoji: "1f91e",
            primary: "wishlist",
            secondary: "Grid",
          },
          {
            emoji: "1f4d6",
            primary: "books to read",
            secondary: "List",
          },
        ].map((button, index) => (
          <Box
            onClick={() => setSelected(index)}
            key={button.primary}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              height: 50,
              flexShrink: 0,
              gap: 2,
              borderRadius: 5,
              background: selected === index ? theme[3] : undefined,
              "&:hover": {
                background: theme[selected === index ? 4 : 3],
              },
              "&:active": {
                background: theme[selected === index ? 5 : 4],
              },
              overflow: "hidden",
            }}
          >
            <Emoji emoji={button.emoji} size={30} />
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                fontSize={15}
                fontWeight={700}
                className={jost.className}
              >
                {button.primary}
              </Typography>
              <Typography
                fontSize={12}
                marginTop={-0.2}
                fontWeight={400}
                sx={{ opacity: 0.6 }}
              >
                {button.secondary}
              </Typography>
            </Box>
            {selected === index && (
              <IconButton
                sx={{ marginLeft: "auto", mr: -1, transition: "none" }}
              >
                <span className="material-symbols-rounded">close</span>
              </IconButton>
            )}
          </Box>
        ))}
        <Box
          sx={{
            height: 50,
            pointerEvents: "none",
            background: `linear-gradient(transparent, ${theme[2]})`,
            zIndex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>

      <ArrowContainer text="Focus on what matters with tabs" />
    </CardContainer>
  );
};
