import {
  Box,
  Button,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Home/Footer";

export default function Page() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const boxStyles = {
    border: "2px solid",
    borderColor: isDark ? "#fff" : "#000",
    p: 4,
    borderRadius: 5,
    display: "flex",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexBasis: { sm: 0 },
    flexGrow: { sm: 1 },
    minWidth: { sm: 0 },
    "&:hover": {
      backdropFilter: "blur(1px)",
      background: isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,0.1)",
    },
    "&:active": {
      backdropFilter: "blur(4px)",
    },
  };
  return (
    <>
      <Navbar />
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Box
          sx={{
            height: "100vh",
            maxWidth: "100vw",
            flexDirection: "column",
            overflow: "hidden",
            display: "flex",
            alignItems: { xs: "start", md: "center" },
            justifyContent: { xs: "end", sm: "center" },
            position: "relative",
            userSelect: "none",
            px: 3,
          }}
        >
          <Box
            sx={{
              background: `linear-gradient(transparent, #${
                isDark ? "000" : "fff"
              })`,
              width: "100%",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
          <Image
            blurDataURL={
              isDark
                ? "data:image/png;base64,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"
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFDQJcGv7LzQAAAABJRU5ErkJggg=="
            }
            placeholder="blur"
            height={1080}
            width={1920}
            src={isDark ? "/cover-darkMode.png" : "/cover.png"}
            alt="hero"
            style={{
              opacity: isDark ? 1 : 0.6,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              height: "100vh",
              maxWidth: "100vw",
              flexDirection: "column",
              overflow: "hidden",
              display: "flex",
              alignItems: { xs: "start", md: "center" },
              justifyContent: { xs: "end", sm: "center" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0,
              }}
              style={{
                display: "block",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 30, md: 45 },
                  mb: 2,
                  textAlign: { xs: "left", md: "center" },
                  fontWeight: 700,
                  background: `linear-gradient(#${isDark ? "fff" : "000"}, #${
                    isDark ? "606060" : "555"
                  })`,
                  whiteSpace: { md: "nowrap" },
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-serif"
              >
                The future of productivity{" "}
                <Typography
                  sx={{
                    display: { xs: "inline", md: "block" },
                    fontSize: "inherit",
                  }}
                  component="span"
                >
                  right at your fingertips.
                </Typography>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: { md: "center" },
                  fontWeight: 700,
                  mb: 3,
                  color: "#505050",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Download Dysperse on all your devices now.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }}
            >
              <Button
                size="large"
                variant="contained"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight - 100,
                    behavior: "smooth",
                  })
                }
                sx={{
                  width: "auto",
                  borderRadius: 999,
                  color: isDark ? "#fff" : "#000",
                  backdropFilter: "blur(2px)",
                  mb: { xs: 3, sm: 0 },
                }}
              >
                See platforms <Icon>south</Icon>
              </Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
      >
        <Box
          sx={{
            maxWidth: "100vw",
            width: "1000px",
            display: "flex",
            justifyContent: "center",
            mt: { sm: -9 },
            zIndex: 99,
            position: "sticky",
            alignItems: "center",
            mx: "auto",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            p: 4,
          }}
        >
          <Box
            sx={boxStyles}
            onClick={() => window.open("https://my.dysperse.com")}
          >
            <Icon
              sx={{
                fontSize: "65px!important",
              }}
            >
              language
            </Icon>
            <Typography variant="h6">Web</Typography>
            <Typography sx={{ mt: -2 }}>Stable</Typography>
          </Box>
          <Box sx={{ ...boxStyles, opacity: 0.5 }}>
            <picture>
              <img
                width={50}
                height={60}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                style={{
                  ...(isDark && { filter: "invert(1)" }),
                }}
              />
            </picture>
            <Typography variant="h6">iOS</Typography>
            <Typography sx={{ mt: -2 }}>Coming soon</Typography>
          </Box>
          <Box
            sx={boxStyles}
            onClick={() =>
              window.open("https://manu-codes.pages.dev/Dysperse-unsigned.apk")
            }
          >
            <picture>
              <img
                width={50}
                height={60}
                src="https://cdn.freebiesupply.com/logos/large/2x/android-logo-black-and-white.png"
                style={{
                  ...(isDark && { filter: "invert(1)" }),
                }}
              />
            </picture>
            <Typography variant="h6">Android</Typography>
            <Typography sx={{ mt: -2 }}>Pre-release</Typography>
          </Box>
          <Box sx={{ ...boxStyles, opacity: 0.5 }}>
            <Icon
              sx={{
                fontSize: "65px!important",
              }}
            >
              desktop_mac
            </Icon>
            <Typography variant="h6">Mac</Typography>
            <Typography sx={{ mt: -2 }}>Coming soon</Typography>
          </Box>
          <Box
            sx={boxStyles}
            onClick={() =>
              window.open("https://cdn1.cdn.pet/KI7OVf0kfnzCKXX.exe")
            }
          >
            <picture>
              <img
                width={50}
                height={50}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Windows_logo_2012-Black.svg/1024px-Windows_logo_2012-Black.svg.png"
                style={{
                  ...(isDark && { filter: "invert(1)" }),
                }}
              />
            </picture>
            <Typography variant="h6">Windows</Typography>
            <Typography sx={{ mt: -2 }}>Pre-release</Typography>
          </Box>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}
