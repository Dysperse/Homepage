import { Box, Chip, Typography } from "@mui/material";
import { JetBrains_Mono, Jost } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";
import VirtualKeyboard from "react-simple-keyboard";
import { CardContainer } from "../page";
import { mintDark } from "@radix-ui/colors";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const jost = Jost({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export function Keyboard() {
  const keyboardRef = useRef(null);
  const [key, setKey] = useState("ctrl 5");
  const [layoutName, setLayoutName] = useState("default");

  const onChange = () => {};

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnHover: false,
        stopOnInteraction: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const slides = useMemo(
    () => [
      {
        keybind: "ctrl+[1-9]",
        label: "Switch between tabs",
        keyboard: "ctrl+5",
      },
      { keybind: "ctrl+tab", label: "Next tab" },
      { keybind: "ctrl+shift+tab", label: "Previous tab" },
      { keybind: "d", label: "Mark as done" },
      { keybind: "r", label: "Quick reschedule" },
      { keybind: "ctrl+delete", label: "Delete task" },
      { keybind: "n", label: "Create task" },
      { keybind: "ctrl+j", label: "Join meeting" },
      { keybind: "ctrl+o", label: "Open collection" },
      { keybind: "ctrl+n", label: "New collection" },
    ],
    []
  );

  useEffect(() => {
    emblaApi?.on("select", () => {
      const selected = emblaApi.selectedScrollSnap();
      const t = (slides[selected].keyboard || slides[selected].keybind)
        .replaceAll("+", " ")
        .replace("delete", "del");
      setKey(t);
    });
  }, [emblaApi, setKey, slides]);

  return (
    <CardContainer
      sx={{
        p: 1,
        flex: 1,
        maxWidth: 400,
        display: "block",
        "& *": { fontFamily: jost.style.fontFamily, fontWeight: 700 },
      }}
    >
      <VirtualKeyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        // Highlight specific keys by adding a class to them
        buttonTheme={[
          {
            class: "shortcut",
            buttons: key,
          },
        ]}
        onRender={() => console.log("Rendered")}
        layout={{
          default: [
            "~ 1 2 3 4 5 6 7 8 9 0 del",
            "tab q w e r t y u i o p",
            "caps a s d f g h j k l",
            "shift z x c v b n m , . {shift}",
            "[ctrl alt] {space} {alt}",
          ],
          shift: [
            "` ! @ # $ % ^ & * ( ) del",
            "tab Q W E R T Y U I O P",
            "caps A S D F G H J K L",
            "shift Z X C V B N M , . {shift}",
            "[ctrl alt] {space} {alt}",
          ],
        }}
      />
      <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
        <Box sx={{ display: "flex" }}>
          {slides.map((shortcut) => (
            <Box
              key={shortcut.keybind}
              sx={{
                mb: 1,
                flex: "0 0 100%",
                display: "flex",
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              <Chip
                label={shortcut.label}
                icon={
                  <Box
                    sx={{
                      minWidth: 25,
                      px: 1,
                      height: 25,
                      borderRadius: 99,
                      bgcolor: mintDark.mint4,
                      display: "flex",
                      fontWeight: 400,
                      alignItems: "center",
                      fontSize: 15,
                      lineHeight: 25,
                      justifyContent: "center",
                    }}
                    className={jetBrainsMono.className}
                  >
                    {shortcut.keybind}
                  </Box>
                }
                sx={{
                  mx: 1,
                  p: 0.2,
                  height: 34,
                  bgcolor: mintDark.mint3,
                  borderRadius: 999,
                  "& *": {
                    fontWeight: 400,
                  },
                  borderWidth: 1,
                  borderColor: mintDark.mint4,
                  borderStyle: "solid",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </CardContainer>
  );
}
