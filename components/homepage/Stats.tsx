import { Box, Grid, Typography } from "@mui/material";
import styles from "../../styles/stats.module.scss";

export function Stats() {
  return (
    <Box className="relative text-white p-14 py-10">
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
      <Grid spacing={2} container>
        <Grid item xs={12} md={4} className="text-center">
          <h2 className={styles.statsItem}>ten thousand</h2>
          <Typography>active users</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="text-center">
          <h2 className={styles.statsItem}>one million</h2>
          <Typography>daily requests</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="text-center">
          <h2 className={styles.statsItem}>six thousand</h2>
          <Typography>items &amp; tasks stored</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
