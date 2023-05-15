import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
export function Stats() {
  const styles = {
    textAlign: "center",
    "& h4": {
      fontWeight: 700,
      mb: 0.5,
    },
  };

  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <Container sx={{ mt: 10 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Box
          sx={{
            p: 4,
            background: !isDark
              ? "linear-gradient(45deg, #FF66C4, #FFDE59)"
              : "linear-gradient(45deg, #261744, #392011)",
            borderRadius: 5,
            color: isDark ? "#fff" : "#000",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={styles}>
              <Typography variant="h4" className="font-serif">
                two thousand
              </Typography>
              <Typography>active users</Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={styles}>
              <Typography variant="h4" className="font-serif">
                five million
              </Typography>
              <Typography>tasks completed</Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={styles}>
              <Typography variant="h4" className="font-serif">
                four terabytes
              </Typography>
              <Typography>worth of data transferred</Typography>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
}
