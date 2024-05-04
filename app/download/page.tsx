import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { mintDark } from "../themes";

export default function Page() {
  return (
    <Box
      sx={{
        height: "100dvh",
        paddingTop: 20,
        display: "flex",
      }}
    >
      <Box
        sx={{
          padding: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Agrandir",
            fontSize: {
              xs: "50px",
              md: "60px",
              lg: "70px",
              xl: "100px",
            },
            lineHeight: {
              xs: "50px",
              md: "60px",
              lg: "70px",
              xl: "100px",
            },
            fontWeight: 900,
          }}
        >
          Discover&nbsp;<span style={{ color: mintDark.mint11 }}>portable</span>{" "}
          productivity.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: 3,
            gridTemplateColumns: "1fr 1fr",
            "& .material-symbols-rounded": {
              fontVariationSettings: `"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 40`,
            },
          }}
        >
          {[
            {
              icon: "globe",
              name: "Web",
              href: "https://app.dysperse.com",
              description: "Any modern browser",
            },
            {
              filled: true,
              icon: "window",
              name: "Windows",
              href: "https://click.dysperse.com/ms",
              description: "Windows 10 or later",
            },
            {
              icon: "desktop_mac",
              name: "Mac",
              //   href: "https://click.dysperse.com/mac",
              description: "macOS 10.15 or later",
              comingSoon: true,
            },
            {
              icon: "android",
              name: "Android",
              href: null,
              comingSoon: true,
            },
            {
              icon: "ios",
              name: "iPhone & iPad",
              href: null,
              comingSoon: true,
            },
          ].map((item) => (
            <Link
              href={item.href || "/"}
              key={item.name}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  gap: 2,
                  borderRadius: 5,
                  border: `2px solid ${mintDark.mint5}`,
                  backgroundColor: mintDark.mint3,
                  "&:hover": {
                    backgroundColor: mintDark.mint4,
                  },
                  "&:active": {
                    backgroundColor: mintDark.mint5,
                  },
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 1.5,
                }}
              >
                <span
                  className="material-symbols-rounded"
                  style={{
                    fontSize: 30,
                    ...(item.filled && {
                      fontVariationSettings: `"FILL" 1, "wght" 300, "GRAD" 0, "opsz" 40`,
                    }),
                  }}
                >
                  {item.icon}
                </span>
                <Box>
                  <Typography fontWeight={900}>{item.name}</Typography>
                  <Typography sx={{ opacity: 0.6 }} fontWeight={300}>
                    {item.comingSoon ? "Coming soon" : item.description}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          aspectRatio: "1551/1620",
          height: "100%",
          position: "relative",
          ml: "auto",
        }}
      >
        <Image src="/portable.png" alt="Download Dysperse" fill />
      </Box>
    </Box>
  );
}
