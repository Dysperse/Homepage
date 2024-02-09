"use client";
import { Box, Button, Link, Typography } from "@mui/material";
import { Caveat, JetBrains_Mono, Jost } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardContainer } from "./CardContainer";
import { addHslAlpha } from "./addHslAlpha";
import { mintDark } from "./themes";
import { Customizable } from "./widgets/Customizable";
import { Familiar } from "./widgets/Familiar";
import { Flexible } from "./widgets/Flexible";
import { Integrated } from "./widgets/Integrated";
import { Keyboard } from "./widgets/Keyboard";
import { Time } from "./widgets/Time";
import { UpNext } from "./widgets/UpNext";
import { Weather } from "./widgets/Weather";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
});

export const caveat = Caveat({
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: "variable",
});

function About() {
  return (
    <CardContainer
      sx={{
        background: { lg: addHslAlpha(mintDark.mint4, 0.5) },
        border: { xs: "none", lg: `1px solid ${mintDark.mint5}` },
        backdropFilter: { lg: "blur(10px)" },
        p: { xs: 1, sm: 4 },
        alignItems: { xs: "start", sm: "center", md: "center", lg: "start" },
        "& .logo": {
          alignSelf: { sm: "center" },
          mt: { sm: 2 },
          ml: { xs: -2, sm: 0 },
          mb: "auto",
        },
      }}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={70}
        height={70}
        className="logo"
      />

      <Typography
        className={jetBrainsMono.className}
        sx={{
          fontFamily: jetBrainsMono.style.fontFamily,
          mt: -2,
          fontWeight: 300,
          opacity: 0.6,
        }}
      >
        arriving spring 2024
      </Typography>
      <Typography
        className={jost.className}
        sx={{
          fontWeight: 800,
          textAlign: { xs: "start", sm: "center", lg: "start" },
          fontSize: { xs: 50, sm: 55, md: 70 },
          "& .humans": {
            color: mintDark.mint11,
          },
          "& .productivity": {
            fontWeight: 100,
          },
        }}
        variant="h2"
      >
        <span className="productivity">productivity</span>{" "}
        <span className="productivity">for</span>{" "}
        <span className="humans">humans</span>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 1,
          fontWeight: 400,
          fontSize: { xs: 16, sm: 30 },
          opacity: 0.3,
          textAlign: { xs: "start", sm: "center", lg: "start" },
        }}
        className={jost.className}
      >
        #dysperse makes organization simple again
      </Typography>
      <Box
        sx={{
          gap: { xs: 1, sm: 2 },
          display: "flex",
          width: { xs: "100%", sm: "auto" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          sx={{
            mt: 3,
            background: mintDark.mint10,
            color: mintDark.mint2,
            "&:hover": {
              background: mintDark.mint11,
            },
            "&:active": {
              background: mintDark.mint12,
            },
            textTransform: "none",
            borderRadius: 99,
            transition: "none",
            gap: 1,
            width: { xs: "100%", sm: "auto" },
          }}
          disableElevation
          disableRipple
          size="large"
          variant="contained"
          href="https://app.dysperse.com/auth/sign-up"
          target="_blank"
        >
          Induct myself{" "}
          <span className="material-symbols-rounded">north_east</span>
        </Button>
        <Button
          sx={{
            marginTop: { sm: 3 },
            background: "transparent",
            color: mintDark.mint8,
            "&:hover": {
              background: mintDark.mint3,
            },
            "&:active": {
              background: mintDark.mint4,
            },
            textTransform: "none",
            borderRadius: 99,
            transition: "none",
            gap: 1,
          }}
          disableElevation
          disableRipple
          size="large"
          href="https://app.dysperse.com/auth/sign-in"
          target="_blank"
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          mb: {
            xs: 3,
            mb: "auto",
          },
          mt: { xs: 3, sm: 0 },
          borderBottom: { xs: `2px solid ${mintDark.mint6}`, sm: "none" },
        }}
      />
    </CardContainer>
  );
}

function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieBanner") !== "true") {
      setOpen(true);
    }
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        p: 1,
        width: "100vw",
        maxWidth: { xs: "100%", sm: "350px" },
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          background: addHslAlpha(mintDark.mint4, 0.9),
          px: 3,
          py: 1,
          fontSize: 12,
          color: mintDark.mint11,
          gap: 2,
          display: open ? "flex" : "none",
          alignItems: "center",
          border: `1px solid ${mintDark.mint5}`,
          borderRadius: 5,
        }}
      >
        We use cookies (not the kind you eat) to keep our app functional. By
        using our app, you allow us to use cookies.
        <Button
          onClick={() => {
            localStorage.setItem("cookieBanner", "true");
            setOpen(false);
          }}
          sx={{
            color: mintDark.mint11,
          }}
        >
          🍪&nbsp;Yum!
        </Button>
      </Box>
    </Box>
  );
}

export default function Page() {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        color: mintDark.mint12,
        display: "flex",
        userSelect: "none",
        flexDirection: "column",
        "& *:not(.monospace,.material-symbols-rounded)": {
          fontFamily: jost.style.fontFamily + "!important",
        },
        "& .caveat": {
          fontFamily: caveat.style.fontFamily + "!important",
        },
        "& .monospace, & .monospace *": {
          fontFamily: jetBrainsMono.style.fontFamily + "!important",
        },
      }}
    >
      <CookieBanner />
      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          flexDirection: { xs: "column", lg: "row" },
          height: { sm: "auto", xl: "100dvh" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "400px" },
            height: { xs: "calc(100dvh + 30px)", sm: "calc(100dvh - 32px)" },
            display: "flex",
          }}
        >
          <About />
        </Box>
        <Box
          sx={{
            gap: 2,
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Time />
            <Familiar />
            <Weather />
          </Box>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flex: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                  flex: 1,
                }}
              >
                <Flexible />
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <Keyboard />
                </Box>
              </Box>
              <Integrated />
            </Box>
            <Box
              sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Customizable />
              <UpNext />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: `1px solid ${mintDark.mint5}`,
          backdropFilter: "blur(10px)",
          py: 5,
          pb: 3,
          px: 10,
          width: "100vw",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2,
            "& .MuiLink-root": {
              color: mintDark.mint8,
              textDecorationColor: mintDark.mint6,
              "&:hover": {
                color: mintDark.mint10,
                textDecorationColor: mintDark.mint8,
              },
            },
          }}
        >
          <Link href="/" sx={{ mr: { lg: "auto" } }}>
            What's new
          </Link>

          <Link target="_blank" href="//status.dysperse.com">
            Status
          </Link>
          <Link target="_blank" href="//blog.dysperse.com">
            Blog
          </Link>
          <Link
            target="_blank"
            href="https://blog.dysperse.com/terms-of-service"
          >
            Terms
          </Link>
          <Link target="_blank" href="https://blog.dysperse.com/privacy-policy">
            Privacy Policy
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexDirection: { xs: "column", lg: "row" },
            pt: 5,
          }}
        >
          <Link
            href="https://www.producthunt.com/posts/dysperse?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dysperse"
            target="_blank"
            sx={{
              marginRight: { lg: "auto" },
            }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=394715&theme=dark"
              alt="Dysperse - Dysperse&#0032;is&#0032;a&#0032;completely&#0032;different&#0044;&#0032;unified&#0032;productivity&#0032;app | Product Hunt"
              height={54 / 1.3}
              width={250 / 1.3}
            />
          </Link>
          <Link href="https://www.cloudflare.com" target="_blank">
            <Image
              alt="Cloudflare"
              width={374 / 2}
              height={75 / 2}
              src="/sponsors/cloudflare.png"
            />
          </Link>
          <Link href="https://www.neon.tech" target="_blank">
            <Image
              alt="Neon"
              width={374 / 2}
              height={75 / 2}
              src="/sponsors/neon.png"
            />
          </Link>
          <Link
            href="https://vercel.com/?utm_source=dysperse&utm_campaign=oss"
            target="_blank"
          >
            <Image
              alt="Vercel"
              width={374 / 2}
              height={75 / 2}
              src="/sponsors/vercel.svg"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
