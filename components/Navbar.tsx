import { AppBar, Box, Button, Icon, Toolbar } from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [blurBackground, setBlurBackground] = useState(false);
  const [highlightBackground, setHighlightBackground] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setBlurBackground(latest > 0);
    setHighlightBackground(latest > screenHeight - 200);
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 999,
        background: highlightBackground
          ? "rgba(255,255,255,.6)"
          : "transparent",
        height: "60px",
        backdropFilter: blurBackground ? "blur(10px)" : "",
        borderBottom: "1px solid",
        transition: "all .2s",
        borderColor: blurBackground ? "rgba(0,0,0,0.05)" : "transparent",
        p: 0,
        px: { sm: 5 },
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
        <Link href="/">
          <Button
            size="small"
            sx={{
              fontWeight: 600,
              color: "#000",
              fontSize: "15px",
            }}
          >
            <Image src="/logo.svg" width={30} height={30} alt="logo" />
            Dysperse
          </Button>
        </Link>
        <Box sx={{ mx: "auto", pr: 8 }}>
          {[
            { label: "Open source", href: "//github.com/dysperse" },
            { label: "Server status", href: "//status.dysperse.com" },
            { label: "Community", href: "/" },
            { label: "Blog", href: "//blog.dysperse.com" },
            { label: "Support", href: "//blog.dysperse.com/series/support" },
          ].map((button) => (
            <Button
              key={button.label}
              href={button.href}
              color="inherit"
              size="large"
              target="_blank"
              sx={{ px: 2 }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
        <Button sx={{ minWidth: "50px" }}>
          <Icon>account_circle</Icon>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
