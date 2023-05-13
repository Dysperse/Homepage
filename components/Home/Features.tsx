import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function Features() {
  const [showToolbar, setShowToolbar] = useState(false);

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) =>
    setShowToolbar(latest > screenHeight - 200)
  );

  return (
    <Box>
      <AppBar
        elevation={0}
        color="inherit"
        sx={{
          transition: "all .2s",
          top: showToolbar ? "60px" : "20px",
          opacity: showToolbar ? 1 : 0,
          position: "fixed",
          backdropFilter: "blur(10px)",
          background: showToolbar ? "rgba(255,255,255,.5)" : "transparent",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          height: "40px",
        }}
      >
        <Toolbar
          sx={{
            height: "40px!important",
            minHeight: "40px!important",
            gap: 1,
          }}
        >
          <Button size="small" variant="contained" sx={{ ml: 6.5 }}>
            Agenda
          </Button>
          <Button size="small" variant="contained">
            Boards
          </Button>
          <Button size="small" variant="contained">
            Coach
          </Button>
          <Button size="small" variant="contained">
            Inventory
          </Button>
          <Button size="small" variant="contained">
            Mood tracking
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          background: "linear-gradient(transparent, #fff)",
          width: "100%",
          mt: "-100vh",
          height: "100vh",
        }}
      />
      <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.05)" }} />
      <Box>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{ textAlign: "center", mt: 5 }}
        >
          Task visualization
          <br /> <i>reimagined</i>
        </Typography>
      </Box>
    </Box>
  );
}
