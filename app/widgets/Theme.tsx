import { Typography } from "@mui/material";
import { JetBrains_Mono } from "next/font/google";
import themes from "../themes.json";
import { rubyDark } from "../themes";
import { useColorTheme, useThemeContext } from "../useColor";
import { CardContainer } from "./CardContainer";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export function Theme() {
  const theme = useColorTheme();
  const { color } = useThemeContext();

  return (
    <CardContainer
      sx={{
        flex: 1,
        p: 3,
        background: `radial-gradient(circle, ${theme[4]} 0%, ${theme[6]} 100%)`,
        borderColor: theme[5],
        color: theme[12],
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
        style={{ fontSize: 70, color: theme[12] }}
      >
        hexagon
      </span>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 900,
        }}
      >
        {(themes as any)[color].name}
      </Typography>
      <Typography sx={{ mb: "auto", opacity: 0.6 }}>
        {(themes as any)[color].description}
      </Typography>
    </CardContainer>
  );
}
