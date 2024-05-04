"use client";
import { Box, Button, useScrollTrigger } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { addHslAlpha, mintDark } from "./themes";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const status = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box
      sx={{
        p: 2,
        width: "100vw",
        position: "fixed",
        top: 0,
        zIndex: 99,
        left: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3.5,
          py: 2,
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
        }}
      >
        <Link href="/" style={{ display: "block" }}>
          <Image src="/logo.svg" alt="Dysperse logo" width={60} height={60} />
        </Link>
        <Box sx={{ mx: "auto", pl: 10, gap: 1, display: "flex" }}>
          <Button
            color="primary"
            size="large"
            onClick={() => router.push("/templates")}
            sx={{
              ...(pathname === "/templates" && {
                backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
              }),
            }}
          >
            templates
          </Button>
          <Button
            color="primary"
            size="large"
            onClick={() => router.push("/download")}
            sx={{
              ...(pathname === "/download" && {
                backgroundColor: addHslAlpha(mintDark.mint9, 0.1),
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
        </Box>
        <Button
          color="primary"
          size="large"
          href="//app.dysperse.com/auth/sign-in"
          variant="outlined"
          sx={{
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
      </Box>
    </Box>
  );
}
