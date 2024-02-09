"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { mintDark } from "../themes";
import { useState } from "react";
import { CardContainer, Emoji } from "../page";
import { Caveat } from "next/font/google";
import Image from "next/image";
const caveat = Caveat({ subsets: ["latin"] });

export const Familiar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <CardContainer
      sx={{
        display: "flex",
        justifyContent: "start",
        overflow: "hidden",
        p: 1.5,
        flex: 1.5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          gap: 0.5,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          maxHeight: 135,
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
              background: selected === index ? mintDark.mint3 : undefined,
              "&:hover": {
                background: mintDark[selected === index ? "mint4" : "mint3"],
              },
              "&:active": {
                background: mintDark[selected === index ? "mint5" : "mint4"],
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

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          mt: 1.5,
          justifyContent: "center",
          opacity: 0.6,
        }}
      >
        <Image
          alt=""
          src="/arrow.png"
          style={{
            filter: "invert(1)",
            marginTop: -5,
            transform: "rotate(-60deg)",
          }}
          width={30}
          height={30}
        />
        <Typography
          sx={{ transform: "rotate(-2deg)", mt: -0.3 }}
          className={caveat.className}
        >
          Focus on what matters with tabs
        </Typography>
      </Box>
    </CardContainer>
  );
};
