import { Box, Button, Icon, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Header() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const videoRef: any = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.8;
  });
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Box
        sx={{
          height: "100dvh",
          maxWidth: "100vw",
          flexDirection: "column",
          overflow: "hidden",
          display: "flex",
          alignItems: "start",
          justifyContent: { xs: "end", sm: "center" },
          position: "relative",
          userSelect: "none",
          px: { xs: 3, sm: 15 },
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(transparent, #${
              isDark ? "000" : "fff"
            })`,
            width: "100%",
            height: "100dvh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        />
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            ...(!isDark && {
              filter: "invert(1) grayscale(1)",
            }),
          }}
        >
          <source src="/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            height: "100dvh",
            maxWidth: "100vw",
            flexDirection: "column",
            overflow: "hidden",
            display: "flex",
            alignItems: "start",
            justifyContent: { xs: "end", sm: "center" },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.7,
            }}
          >
            <Button
              sx={{
                border: isDark ? "2px solid #aaa" : "2px solid #000",
                borderRadius: 999,
                px: { xs: 2, md: 4 },
                py: { xs: 0.5, md: 1 },
                fontSize: { xs: "14px", md: "16px" },
                mb: 4,
                color: isDark ? "#ddd" : "#000",
                "&:hover": {
                  backdropFilter: "blur(1px)",
                },
              }}
              size="large"
              color="inherit"
              href="https://blog.dysperse.com/introducing-dysperse-ai"
              target="_blank"
            >
              New: AI, Availability &amp; more.
              <Icon>outbound</Icon>
            </Button>
          </motion.div>
          <Typography
            sx={{
              fontSize: { xs: 53, md: 60 },
              mb: 1,
              textAlign: { xs: "left", md: "center" },
              whiteSpace: { md: "nowrap" },
              "& .text": {
                background: `linear-gradient(#${isDark ? "fff" : "000"}, #${
                  isDark ? "606060" : "555"
                })`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
              "& .highlight": {
                background: `linear-gradient(90deg, #f3dfc7, #dcd4fc)`,
                color: "#000",
                px: 2,
                py: 1,
                verticalAlign: "end",
                borderRadius: 4,
                transform: "skewX(-13deg)",
                display: "inline-block",
                mx: 0.5,
                "& span": {
                  display: "inline-block",
                  // transform: "skewX(4deg)",
                },
              },
            }}
            className="font-serif"
          >
            <span className="text">It&apos;s&nbsp;time </span>
            <span style={{ whiteSpace: "nowrap" }}>
              <span className="text">to </span>
              <span className="highlight">
                <span>accelerate</span>
              </span>
            </span>
            <span className="text"> your efficiency.</span>
          </Typography>
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
                fontWeight: 700,
                mb: 2,
                color: "#909090",
                fontSize: { xs: "15px", md: "20px" },
                "& span": {
                  textDecoration: "line-through",
                  opacity: 0.5,
                },
                "& .e": {
                  display: { xs: "inline", sm: "block" },
                },
              }}
            >
              To-do lists don&apos;t work. And Dysperse{" "}
              <span>is more than that</span> isn&apos;t that.
              <span className="e" /> We&apos;re here to redefine the standard
              for productivity.
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
              href="//my.dysperse.com/auth/signup"
              target="_blank"
              sx={{
                width: "auto",
                borderRadius: 999,
                color: isDark ? "#fff" : "#000",
                backdropFilter: "blur(2px)",
                mb: { xs: 3, sm: 0 },
              }}
            >
              Isn&apos;t that captivating? <Icon>lightbulb</Icon>
            </Button>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}
