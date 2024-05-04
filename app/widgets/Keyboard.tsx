import { Box, Chip } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Jost } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";
import VirtualKeyboard from "react-simple-keyboard";
import { useColorTheme } from "../useColor";
import { ArrowContainer } from "./ArrowContainer";
import { CardContainer } from "./CardContainer";

const jost = Jost({ subsets: ["latin"] });

export function Keyboard() {
  const keyboardRef = useRef(null);
  const [key, setKey] = useState("ctrl 5");
  const [layoutName, setLayoutName] = useState("default");
  const theme = useColorTheme();

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
        background: theme[2],
        borderColor: theme[5],
        color: theme[11],
        maxWidth: {
          xs: "5vw",
          md: "27vw",
          lg: "37vw",
          xl: "32vw",
        },
        minWidth: { sm: 550 },
        "& *": { fontFamily: jost.style.fontFamily, fontWeight: 400 },
        ...Object.entries(theme).reduce(
          (acc, [key, value]) => ({ ...acc, [`--mint${key}`]: value }),
          {}
        ),
      }}
    >
      <VirtualKeyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        buttonTheme={[
          {
            class: "shortcut",
            buttons: key,
          },
        ]}
        onRender={() => console.log("Rendered")}
        layout={{
          default: [
            "esc 1 2 3 4 5 6 7 8 9 0 del",
            "{tab} q w e r t y u i o p",
            "caps a s d f g h j k l",
            "shift z x c v b n m , . {shift}",
            "[ctrl alt] {space} {alt}",
          ],
          shift: [
            "esc ` ! @ # $ % ^ & * ( ) del",
            "{tab} Q W E R T Y U I O P",
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
                      bgcolor: theme[4],
                      display: "flex",
                      fontWeight: 400,
                      alignItems: "center",
                      fontSize: 15,
                      lineHeight: 25,
                      justifyContent: "center",
                    }}
                    className="monospace"
                  >
                    {shortcut.keybind}
                  </Box>
                }
                sx={{
                  mx: 1,
                  p: 0.2,
                  height: 34,
                  bgcolor: theme[3],
                  borderRadius: 999,
                  "& *": {
                    fontWeight: 400,
                  },
                  borderWidth: 1,
                  borderColor: theme[4],
                  borderStyle: "solid",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <ArrowContainer text="Insanely fast keyboard shortcuts" reverse />
    </CardContainer>
  );
}
