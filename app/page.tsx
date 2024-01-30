import { Box, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function Page() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
      }}
    >
      <Grid container sx={{ flex: 1 }}>
        <Grid xs={12} sm={4}>
          <Card sx={{ flex: 1 }}>Dysperse</Card>
        </Grid>
        <Grid xs={12} sm={4}></Grid>
      </Grid>
    </Box>
  );
}
