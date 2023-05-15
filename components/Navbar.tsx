import {
  AppBar,
  Box,
  Button,
  Divider,
  Icon,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [blurBackground, setBlurBackground] = useState(false);
  const [highlightBackground, setHighlightBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setBlurBackground(latest > 0);
    setHighlightBackground(latest > screenHeight - 200);
  });

  const buttons = (
    <>
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
          sx={{ px: 2, justifyContent: { xs: "start", sm: "center" } }}
        >
          {button.label}
        </Button>
      ))}
    </>
  );
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 999,
        background: highlightBackground
          ? isDark
            ? "rgba(0,0,0,0.6)"
            : "rgba(255,255,255,.6)"
          : "transparent",
        height: "60px",
        backdropFilter: blurBackground ? "blur(10px)" : "",
        borderBottom: "1px solid",
        transition: "all .2s",
        borderColor: blurBackground
          ? isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.05)"
          : "transparent",
        p: 0,
        px: { md: 5 },
      }}
      color="inherit"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 3,
        }}
      >
        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen
          anchor="bottom"
          PaperProps={{
            sx: {
              borderRadius: 5,
              m: "20px",
              width: "calc(100% - 40px)",
              boxShadow: 0,
              ...(isDark && {
                background: "#000",
              }),
            },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(10px)",
              background: "rgba(0,0,0,.1)",
            },
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 2,
              background: isDark ? "#303030" : "#ddd",
              mx: "auto",
              my: 2,
            }}
          />
          <Button
            size="small"
            sx={{
              fontWeight: 600,
              color: isDark ? "#fff" : "#000",
              py: 2,
              justifyContent: "start",
              px: 2,
              background: "transparent!important",
              pt: 1,
              fontSize: "15px",
            }}
          >
            <Image
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              src="/grainy.svg"
              width={30}
              height={30}
              alt="logo"
              style={{
                filter: isDark ? "invert(1)" : "invert(0)",
              }}
            />
            Dysperse
          </Button>
          <Divider sx={{ mb: 2 }} />
          {buttons}
        </SwipeableDrawer>
        <Toolbar
          sx={{
            minHeight: "60px!important",
            height: "60px!important",
            pr: 0,
            pl: 1,
            gap: { md: 2 },
          }}
        >
          <Button
            sx={{
              display: { md: "none" },
              mr: "auto",
              minWidth: { xs: "45px", md: "75px" },
            }}
            onClick={() => setOpen(true)}
          >
            <Icon>menu</Icon>
          </Button>
          <Link href="/">
            <Button
              size="small"
              sx={{
                fontWeight: 600,
                color: isDark ? "#fff" : "#000",
                fontSize: "15px",
                "& span": {
                  display: { xs: "none", md: "unset" },
                },
              }}
            >
              <Image
                src="/grainy.svg"
                width={30}
                height={30}
                alt="logo"
                style={{
                  filter: isDark ? "invert(1)" : "invert(0)",
                }}
              />
              <span>Dysperse</span>
            </Button>
          </Link>
          <Box sx={{ mx: "auto", pr: 8, display: { xs: "none", md: "block" } }}>
            {buttons}
          </Box>
          <Button
            sx={{
              mr: { xs: 2, md: "-40px" },
              minWidth: { xs: "45px", md: "75px" },
              ml: { xs: "auto", md: "unset" },
            }}
            target="_blank"
            href="//my.dysperse.com"
          >
            <Icon>account_circle</Icon>
          </Button>
        </Toolbar>
      </motion.div>
    </AppBar>
  );
}
