"use client";
import { Box, Typography, Link } from "@mui/material";
import { mintDark } from "./themes";
import Image from "next/image";
import { useState } from "react";

export function Footer() {
  const [time, setTime] = useState<any>(new Date().getFullYear());

  return (
    <Box
      sx={{
        mt: 5,
        py: 10,
        color: mintDark.mint11,
        borderTop: `2px solid ${mintDark.mint5}`,
        backdropFilter: "blur(2px)",
        p: 5,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 4,
          "& *": {
            fontWeight: 300,
            color: `${mintDark.mint8}!important`,
            textDecorationColor: `${mintDark.mint7}!important`,
          },
          "& .mrauto": {
            mr: { xs: "0", sm: "auto" },
          },
        }}
      >
        <Link href="//github.com/dysperse" target="_blank">
          Open source
        </Link>
        <Link
          href="//instagram.com/dysperse"
          target="_blank"
          className="mrauto"
        >
          Instagram
        </Link>
        <Link href="https://status.dysperse.com/" target="_blank">
          Status
        </Link>
        <Link href="https://blog.dysperse.com/terms-of-service" target="_blank">
          Terms
        </Link>
        <Link href="https://blog.dysperse.com/privacy-policy" target="_blank">
          Privacy
        </Link>
      </Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          opacity: 0.5,
          justifyContent: "center",
        }}
        fontWeight={700}
      >
        <Image src="/usa.png" alt="USA flag" width={24} height={24} />
        Proudly made in the US &bull; Copyright {time}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          mt: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {[
          { text: "cloudflare", href: "https://www.cloudflare.com" },
          { text: "neon", href: "https://neon.tech" },
        ].map((sponsor) => (
          <Link target="_blank" key={sponsor.text} href={sponsor.href}>
            <Image
              src={`/sponsors/${sponsor.text}.png`}
              alt="Dysperse"
              width={374 / 2}
              height={75 / 2}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
