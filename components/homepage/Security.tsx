import { Box, Grid, Typography } from "@mui/material";

export function Security() {
  return (
    <Box className="my-18 relative text-gray-900">
      <Box
        sx={{
          p: 10,
        }}
      >
        <h4 className="text-center font-[700]">
          Secure by <span className="text-green-600 underline">design</span>
        </h4>
        <h5 className="text-center text-gray-500 mt-2 mb-5">
          refined to perfection
        </h5>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              transparency by default
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              zero-access encryption
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              Invite-only access
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              multi-factor authentication
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
