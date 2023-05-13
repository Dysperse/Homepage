import { AppBar, Box, Button, Icon, Toolbar } from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [highlightBackground, setHighlightBackground] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // If the user has scrolled down 100vh, show the toolbar using framer motion else hide it
    setHighlightBackground(latest > screenHeight - 200);
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 999,
        background: highlightBackground ? "" : "transparent",
        height: "60px",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        p: 0,
      }}
      color="inherit"
    >
      <Toolbar
        sx={{
          minHeight: "60px!important",
          height: "60px!important",
          pr: 0,
          pl: 1,
          gap: 2,
        }}
      >
        <Image src="/logo.svg" width={30} height={30} alt="logo" />
        <Box sx={{ mr: "auto" }}>
          {[
            { label: "Open source", href: "/" },
            { label: "Community", href: "/" },
            { label: "Support", href: "/" },
          ].map((button) => (
            <Button
              key={button.label}
              href={button.href}
              color="inherit"
              target="_blank"
              sx={{ px: 2 }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
        <Button>
          <Icon>account_circle</Icon>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
