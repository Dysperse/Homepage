"use client";
import { Box } from "@mui/material";
import { Caveat } from "next/font/google";
import { useState } from "react";
import { CardContainer } from "../CardContainer";
import { Emoji } from "../Emoji";
import { addHslAlpha } from "../addHslAlpha";
import { mintDark } from "../themes";
import { ArrowContainer } from "./ArrowContainer";

const caveat = Caveat({ subsets: ["latin"] });

export const Customizable = () => {
  const [selected, setSelected] = useState("1f4a9");

  const emojis = [
    "1f600",
    "1f970",
    "1f60d",
    "1f929",
    "1f525",
    "1f389",
    "1f392",
    "1f4a1",
    "1f4a9",
    "1f4a3",
    "1f4a4",
    "1f393",
    "1f4ab",
    "1f4ac",
    "1f4ad",
    "1f4ae",
    "1f4af",
    "1f4b0",
    "1f4b1",
    "1f4b2",
    "1f4b3",
    "1f4b4",
    "1f4bb",
    "2708",
  ];
  return (
    <CardContainer sx={{ px: 2, py: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxHeight: 190,
          position: "relative",
          overflow: "hidden",
          gap: "7px",
        }}
      >
        {emojis.map((emoji) => (
          <Box
            key={emoji}
            onClick={() => setSelected(emoji)}
            sx={{
              flex: "calc(20% - 7px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1 / 1",
              borderRadius: 2,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "transparent",
              ...(selected === emoji && {
                borderColor: mintDark.mint6,
                bgcolor: addHslAlpha(mintDark.mint4, 0.5),
              }),
              "&:hover": {
                borderColor: mintDark[selected === emoji ? "mint7" : "mint4"],
                bgcolor: addHslAlpha(
                  mintDark[selected === emoji ? "mint5" : "mint3"],
                  0.5
                ),
              },
              "&:active": {
                borderColor: mintDark[selected === emoji ? "mint8" : "mint5"],
                bgcolor: addHslAlpha(
                  mintDark[selected === emoji ? "mint6" : "mint4"],
                  0.5
                ),
              },
            }}
          >
            <Emoji emoji={emoji} size={30} />
          </Box>
        ))}
        <Box
          sx={{
            height: 50,
            pointerEvents: "none",
            background: `linear-gradient(transparent, #091b19)`,
            zIndex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
      <ArrowContainer text="Customize literally everything" />
    </CardContainer>
  );
};
