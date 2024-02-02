"use client";
import { Box, TextField, Typography } from "@mui/material";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      <Image
        alt="Grain background"
        src="/grain.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        quality={100}
      />
      <Box
        sx={(theme: any) => ({
          width: "100%",
          zIndex: 1,
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          color: theme.palette[11],
          background: theme.palette[1],
        })}
      >
        <Typography
          variant="h3"
          className={jost.className}
          sx={{ fontWeight: 500 }}
        >
          We&apos;re building the future of productivity
        </Typography>
        <Typography variant="h5" className={jost.className}>
          Your new productivity weapon awaits. Arriving Spring 2024.
        </Typography>
      </Box>
    </>
  );
}
