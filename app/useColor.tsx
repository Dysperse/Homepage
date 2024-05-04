import { useMediaQuery } from "@mui/material";
import { Children, Dispatch, SetStateAction, useMemo } from "react";
import * as colors from "./themes";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  color: "mint",
  setColor: (s: any) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: any) => {
  const [color, setColor] = useState("mint");
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const addHslAlpha = (hsl: string, alpha: number) =>
  hsl.replace(")", `, ${alpha})`).replace("hsl", "hsla");

/**
 * Returns a color palette.
 * @param base Base color from radix-ui/colors
 * @param dark True if dark mode
 * @returns Color palette
 */

export function useColorTheme() {
  const { color: base } = useThemeContext();
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const getColorPalette = useMemo(() => {
    const paletteKey = isDark ? `${base}Dark` : base;

    const colorPalette = colors[paletteKey];
    const _colorPalette: Record<string, string> = {};

    for (const key in colorPalette) {
      if (key.includes(base)) {
        const index = parseInt(key.replace(base, ""));
        _colorPalette[index] = colorPalette[key];
      }
    }

    return _colorPalette;
  }, [base, isDark]);

  return getColorPalette;
}
