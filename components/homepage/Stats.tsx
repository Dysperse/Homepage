import { Box, Grid, Typography } from "@mui/material";

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
        <Grid item xs={12} md={4} className="stats-card text-center">
          <Typography className="stats-item">ten thousand</Typography>
          <Typography>active users</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="stats-card text-center">
          <Typography className="stats-item">one million</Typography>
          <Typography>daily requests</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="stats-card text-center">
          <Typography className="stats-item">six thousand</Typography>
          <Typography>items &amp; tasks stored</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}