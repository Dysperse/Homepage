"use client";
import { Box, Button, Link, SxProps, Tooltip, Typography } from "@mui/material";
import { JetBrains_Mono, Jost } from "next/font/google";
import Image from "next/image";
import { mintDark, skyDark } from "./themes";
import { Weather } from "./widgets/Weather";
import { Flexible } from "./widgets/Flexible";
import { Time } from "./widgets/Time";
import { Integrated } from "./widgets/Integrated";
import { UpNext } from "./widgets/UpNext";
import { Familiar } from "./widgets/Familiar";
import { Customizable } from "./widgets/Customizable";
import { Keyboard } from "./widgets/Keyboard";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
});

export const addHslAlpha = (hsl: string, alpha: number) =>
  hsl.replace(")", `, ${alpha})`).replace("hsl", "hsla");

export function Emoji({
  size = 24,
  emoji,
  style = {},
}: {
  size?: number;
  emoji: string;
  style?: any;
}) {
  return (
    <Image
      style={{
        width: size,
        height: size,
      }}
      width={size}
      height={size}
      alt="Emoji"
      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji?.toLowerCase()}.png`}
    />
  );
}

export const CardContainer = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box
    sx={{
      bgcolor: addHslAlpha(mintDark.mint2, 0.5),
      backdropFilter: "blur(10px)",
      display: "flex",
      px: 5,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 7,
      border: `1px solid ${mintDark.mint5}`,
      ...sx,
    }}
  >
    {children}
  </Box>
);

function About() {
  return (
    <CardContainer
      sx={{
        background: addHslAlpha(mintDark.mint3, 0.5),
      }}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={70}
        height={70}
        style={{
          alignSelf: "center",
          marginTop: 20,
          marginBottom: "auto",
        }}
      />

      <Typography
        className={jetBrainsMono.className}
        sx={{
          mt: -2,
          fontWeight: 300,
          opacity: 0.6,
        }}
      >
        arriving spring 2024
      </Typography>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: { xs: 30, sm: 50, md: 55 },
          "& .humans": {
            color: mintDark.mint11,
          },
          "& .productivity": {
            fontWeight: 100,
          },
        }}
        variant="h2"
      >
        <span className="productivity">productivity</span>
        <br />
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
        }}
      >
        #dysperse makes organization simple again
      </Typography>
      <Box sx={{ gap: 2, display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            marginTop: 3,
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
            marginTop: 3,
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
      <Box sx={{ marginBottom: "auto" }} />
    </CardContainer>
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          flexDirection: "row",
          height: "100dvh",
        }}
      >
        <Box sx={{ width: "400px", height: "100%", display: "flex" }}>
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
          <Box sx={{ gap: 2, display: "flex" }}>
            <Time />
            <Familiar />
            <Weather />
          </Box>
          <Box sx={{ gap: 2, display: "flex", flex: 2 }}>
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
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <Flexible />
                <Keyboard />
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
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
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
          <Link href="/" sx={{ mr: "auto" }}>
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
            gap: 2,
            pt: 5,
          }}
        >
          <Link
            href="https://www.producthunt.com/posts/dysperse?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dysperse"
            target="_blank"
            sx={{
              marginRight: "auto",
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
