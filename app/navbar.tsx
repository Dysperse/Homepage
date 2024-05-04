"use client";
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  useScrollTrigger,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { addHslAlpha, mintDark } from "./themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const status = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const buttons = (
    <>
      <Button
        color="primary"
        size="large"
        onClick={() => {
          router.push("/templates");
          setOpen(false);
        }}
        sx={{
          ...(pathname === "/templates" && {
            backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
            color: mintDark.mint11,
          }),
        }}
      >
        templates
      </Button>
      <Button
        color="primary"
        size="large"
        onClick={() => {
          router.push("/download");
          setOpen(false);
        }}
        sx={{
          ...(pathname === "/download" && {
            backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
            color: mintDark.mint11,
          }),
        }}
      >
        download
      </Button>
      <Button
        color="primary"
        size="large"
        href="https://blog.dysperse.com"
        target="_blank"
      >
        blog
      </Button>
    </>
  );

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2 },
        width: "100vw",
        position: "fixed",
        top: 0,
        zIndex: 99,
        left: 0,
        "& .MuiButton-root:hover": {
          backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
        },
        "& .MuiButton-root:active": {
          backgroundColor: addHslAlpha(mintDark.mint9, 0.2),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: { xs: 2, sm: 3.5 },
          py: { xs: 1, sm: 2 },
          width: "100%",
          borderRadius: 99,
          backdropFilter: status ? "blur(20px)" : "none",
          borderWidth: 2,
          borderColor: status
            ? addHslAlpha(mintDark.mint11, 0.1)
            : "transparent",
          borderStyle: "solid",
          backgroundColor: status
            ? addHslAlpha(mintDark.mint11, 0.05)
            : "transparent",
          transition: "background 0.5s, backdrop-filter 0.5s, border-color .5s",
          "& .MuiButton-root": {
            transition: "none",
            textTransform: "none",
            borderRadius: 999,
            gap: "10px",
            fontSize: 20,
            color: mintDark.mint11,
            fontWeight: 800,
          },
          "& img": {
            width: { xs: 45, sm: 60 },
            height: { xs: 45, sm: 60 },
            mt: { xs: 1, sm: 0 },
          },
        }}
      >
        <Link href="/" style={{ display: "block" }}>
          <Image src="/logo.svg" alt="Dysperse logo" width={60} height={60} />
        </Link>
        <Box
          sx={{
            mx: "auto",
            pl: 10,
            gap: 1,
            display: { xs: "none", sm: "flex" },
          }}
        >
          {buttons}
        </Box>
        <Button
          color="primary"
          size="large"
          href="//app.dysperse.com/auth/sign-in"
          variant="outlined"
          sx={{
            display: { xs: "none", sm: "flex" },
            borderColor: addHslAlpha(mintDark.mint9, 0.15),
            "&:hover": {
              borderColor: addHslAlpha(mintDark.mint9, 0.3),
              backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
            },
            "&:active": {
              borderColor: addHslAlpha(mintDark.mint9, 0.4),
              backgroundColor: addHslAlpha(mintDark.mint9, 0.2),
            },
          }}
        >
          launch
          <span className="material-symbols-rounded">arrow_right_alt</span>
        </Button>
        <IconButton
          sx={{
            display: { xs: "flex", sm: "none" },
            ml: "auto",
            border: `1px solid ${addHslAlpha(mintDark.mint9, 0.15)}`,
          }}
          onClick={() => setOpen(true)}
        >
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: 30,
              fontVariationSettings: `'wght' 200`,
            }}
          >
            menu
          </span>
        </IconButton>
      </Box>
      <SwipeableDrawer
        onOpen={() => setOpen(true)}
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            boxShadow: "none",
            borderRadius: "20px 20px 0 0",
            background: mintDark.mint4,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            "& *": {
              color: mintDark.mint11,
            },
            "& .MuiButton-root": {
              justifyContent: "flex-start",
              py: 2,
              px: 3,
              width: { xs: "100%", sm: "auto" },
            },
          },
        }}
        slotProps={{
          backdrop: { sx: { backdropFilter: "blur(20px)" } },
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 3,
            backgroundColor: mintDark.mint6,
            borderRadius: 99,
            mx: "auto",
            mb: 2,
          }}
        />
        {buttons}
        <Button
          variant="outlined"
          sx={{
            color: mintDark.mint11,
            borderColor: mintDark.mint7,
          }}
        >
          launch
          <span
            style={{ marginLeft: "auto" }}
            className="material-symbols-rounded"
          >
            arrow_right_alt
          </span>
        </Button>
      </SwipeableDrawer>
    </Box>
  );
}
