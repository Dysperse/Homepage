import { Box, Grid, Typography } from "@mui/material";
import { scroll } from "motion";
import { useEffect, useState } from "react";
import styles from "../../styles/stats.module.scss";

export function Stats() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const statsContainer = document.getElementById("stats");
    const scrollOptions: any = {
      target: statsContainer,
      offset: ["start end", "400px end"],
    };
    scroll(({ y }) => {
      setScrollPosition(y.progress);
    }, scrollOptions);
  }, []);

  return (
    <Box className="relative text-white p-14 py-10" id="stats">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/blur.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          mt: -(5 - scrollPosition * 5),
        }}
      >
        <Grid spacing={5} container sx={{}}>
          <Grid
            item
            xs={12}
            md={4}
            className="text-center"
            sx={{
              position: "relative",
              right: 50 - scrollPosition * 50 + "px",
              opacity: scrollPosition,
            }}
          >
            <h2 className={styles.statsItem}>ten thousand</h2>
            <Typography>active users</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="text-center"
            sx={{
              position: "relative",
              bottom: -(50 - scrollPosition * 50) + "px",
              opacity: scrollPosition,
            }}
          >
            <h2 className={styles.statsItem}>one million</h2>
            <Typography>daily requests</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="text-center"
            sx={{
              position: "relative",
              opacity: scrollPosition,
              left: 50 - scrollPosition * 50 + "px",
            }}
          >
            <h2 className={styles.statsItem}>nine thousand</h2>
            <Typography>items &amp; tasks stored</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
