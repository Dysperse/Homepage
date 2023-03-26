import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Countdown from "react-countdown";
import { FAQ } from "../components/homepage/FAQ";
import { Features } from "../components/homepage/Features";
import { Footer } from "../components/homepage/Footer";
import { Header } from "../components/homepage/Header";
import { Security } from "../components/homepage/Security";
import { Stats } from "../components/homepage/Stats";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Box
        sx={{
          ...(!open && {
            transform: "scale(.95)",
            opacity: 0,
            pointerEvents: "none",
          }),
          transition: "all .2s",
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 999,
          backdropFilter: "blur(10px)",
          background: "hsla(240,11%,10%,.9)",
          gap: 2,
          m: "20px",
          p: 3,
          color: "#fff",
          borderRadius: 5,
          width: "340px",
          maxWidth: "calc(100vw - 40px)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography gutterBottom variant="h6" sx={{ fontWeight: 700 }}>
            Product launch countdown
          </Typography>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <span className="material-symbols-outlined">close</span>
          </IconButton>
        </Box>
        <Typography sx={{ mb: 2 }}>
          We&apos;re going live in May 2023 -<br /> are you excited?
        </Typography>
        <Countdown
          date={new Date("2023-05-27T00:00:00-07:00")}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a completed state
              return "Completed!";
            } else {
              const styles = {
                background: "hsla(240,11%,40%,.2)",
                color: "#fff",
                p: 2,
                py: 1,
                borderRadius: 5,
                width: "100%",
              };
              // Render a countdown
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignitems: "center",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Box sx={styles}>
                    <Typography variant="h6">{days}</Typography>
                    <Typography variant="body2">days</Typography>
                  </Box>
                  <Box sx={styles}>
                    <Typography variant="h6">{hours}</Typography>
                    <Typography variant="body2">hours</Typography>
                  </Box>
                  <Box sx={styles}>
                    <Typography variant="h6">{minutes}</Typography>
                    <Typography variant="body2">minutes</Typography>
                  </Box>
                </Box>
              );
            }
          }}
        />
      </Box>
      <Header useCase={false} />
      <Features useCase={false} />
      <Stats />
      <Security />
      <FAQ />
      <Footer />
    </>
  );
}
