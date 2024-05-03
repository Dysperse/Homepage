import { Button, Typography } from "@mui/material";
import { addHslAlpha, rubyDark } from "../themes";
import { CardContainer } from "./CardContainer";
import { JetBrains_Mono } from "next/font/google";
const mono = JetBrains_Mono({ subsets: ["latin"] });
export function Theme() {
  return (
    <CardContainer
      sx={{
        flex: 2,
        p: 3,
        background: rubyDark.ruby3,
        borderColor: rubyDark.ruby6,
        color: rubyDark.ruby11,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: mono.style.fontFamily,
          mb: "auto",
          fontSize: 12,
        }}
      >
        #03
      </Typography>
      <span
        className="material-symbols-rounded"
        style={{ fontSize: 70, color: rubyDark.ruby11 }}
      >
        hexagon
      </span>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 900,
        }}
      >
        Scarlet Temptest
      </Typography>
      <Typography sx={{ mb: "auto", opacity: 0.6 }}>
        A stormy hue that embodies passionate fervor
      </Typography>
    </CardContainer>
  );
}
