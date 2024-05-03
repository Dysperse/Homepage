"use client";
import { Box } from "@mui/material";
import { Caveat } from "next/font/google";
import { useState } from "react";
import { CardContainer } from "./CardContainer";
import { Emoji } from "../Emoji";
import { mintDark, addHslAlpha, mauveDark } from "../themes";
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
    "1f680",
    "1f681",
    "1f682",
    "1f683",
    "1f684",
    "1f685",
    "1f686",
    "1f687",
    "1f688",
    "1f689",
    "1f68a",
    "1f68b",
    "1f68c",
    "1f68d",
    "1f68e",
    "1f68f",
    "1f690",
    "1f691",
    "1f692",
    "1f693",
    "1f694",
    "1f695",
    "1f696",
    "1f697",
    "1f698",
    "1f699",
    "1f69a",
    "1f69b",
    "1f69c",
    "1f69d",
    "1f69e",
    "1f69f",
    "1f6a0",
    "1f6a1",
    "1f6a2",
    "1f6a3",
    "1f6a4",
    "1f6a5",
    "1f6a6",
    "1f6a7",
    "1f6a8",
    "1f6a9",
    "1f6aa",
    "1f6ab",
    "1f6ac",
    "1f6ad",
    "1f6ae",
    "1f6af",
    "1f6b0",
    "1f6b1",
    "1f6b2",
    "1f6b3",
    "1f6b4",
    "1f6b5",
    "1f6b6",
    "1f6b7",
    "1f6b8",
    "1f6b9",
    "1f6ba",
    "1f6bb",
    "1f6bc",
    "1f6bd",
    "1f6be",
    "1f6bf",
    "1f6c0",
    "1f6c1",
    "1f6c2",
    "1f6c3",
    "1f6c4",
    "1f6c5",
    "1f6c6",
    "1f6c7",
    "1f6c8",
    "1f6c9",
    "1f6ca",
    "1f6cb",
    "1f6cc",
    "1f6cd",
    "1f6ce",
    "1f6cf",
    "1f6d0",
    "1f6d1",
  ];
  return (
    <CardContainer
      sx={{
        px: 2,
        py: 2,
        borderColor: mauveDark.mauve5,
        backgroundColor: mauveDark.mauve2,
        color: mauveDark.mauve11,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          maxHeight: { xs: 190, lg: 275 },
          gap: "7px",
        }}
      >
        {emojis.map((emoji) => (
          <Box
            key={emoji}
            onClick={() => setSelected(emoji)}
            sx={{
              flex: {
                xs: "calc(16% - 7px)",
                xl: "calc(20% - 7px)",
              },
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
            background: `linear-gradient(transparent, ${mauveDark.mauve2})`,
            zIndex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
      <ArrowContainer text="Customize literally anything" />
    </CardContainer>
  );
};
