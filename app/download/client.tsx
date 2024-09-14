import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { mintDark } from "../themes";

export function Download() {
  return (
    <Box
      sx={{
        height: "auto",
        paddingTop: 16,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          padding: { xs: 3, sm: 10 },
          mt: -4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Agrandir",
            fontSize: {
              xs: "40px",
              md: "60px",
              lg: "70px",
              xl: "100px",
            },
            lineHeight: {
              xs: "40px",
              md: "60px",
              lg: "70px",
              xl: "100px",
            },
            fontWeight: 900,
          }}
        >
          Discover <span style={{ color: mintDark.mint11 }}>portable</span>{" "}
          productivity.
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 300,
            mt: 2.5,
            opacity: 0.6,
          }}
        >
          Download #dysperse on all your devices.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: 3,
            gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
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
              icon: "apple.svg",
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
                {item.icon.includes("svg") ? (
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                ) : (
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
                )}
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

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 300,
              opacity: 0.6,
            }}
          >
            Add #dysperse to your favorite browser
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              width: "100%",
            }}
          >
            {[
              {
                filled: true,
                icon: "google.svg",
                name: "Google Chrome",
                href: "https://click.dysperse.com/chrome-extension",
              },
              {
                filled: true,
                icon: "edge.svg",
                name: "Microsoft Edge",
                href: "https://click.dysperse.com/edge-extension",
              },
              {
                filled: true,
                icon: "firefox.svg",
                name: "Firefox",
                href: "https://click.dysperse.com/firefox-add-on",
              },
            ].map((item) => (
              <Link
                href={item.href || "/"}
                key={item.name}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  flex: 1,
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
                    mt: 2,
                  }}
                >
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
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
      </Box>
      <Box
        sx={{
          aspectRatio: "1551/1620",
          height: { xs: "auto", md: "600px" },
          width: { xs: "100vw", md: "auto" },
          position: "relative",
          ml: "auto",
          mt: "auto",
          mb: -5,
        }}
      >
        <Image src="/portable.png" alt="Download Dysperse" fill />
      </Box>
    </Box>
  );
}
