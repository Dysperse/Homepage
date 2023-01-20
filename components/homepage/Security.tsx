import { Box, Grid, Icon, Typography } from "@mui/material";
import Link from "next/link";

export function Security() {
  return (
    <Box className="my-18 relative text-gray-900">
      <Box
        sx={{
          p: { xs: 5, sm: 10 },
        }}
      >
        <h4 className="sm:text-center font-[700] text-4xl mt-4">
          Secure by design
        </h4>
        <h5 className="sm:text-center text-gray-500 mt-2 mb-5">
          refined to perfection
        </h5>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} className="security-card">
            <Icon className="outlined">visibility</Icon>
            <Box>
              <h5 className="security-title">transparency by default</h5>
              <Link
                href="https://github.com/Dysperse/Smartlist"
                target="_blank"
                className="security-btn"
              >
                Take a peek at our source code &rarr;
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Icon className="outlined">lock</Icon>
            <Box>
              <h5 className="security-title">256-bit encryption</h5>
              <Link className="security-btn" href="/articles/encryption">
                Learn more &rarr;
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Icon className="outlined">link</Icon>
            <Box>
              <h5 className="security-title">Invite-only access</h5>
              <Link
                className="security-btn"
                href="/articles/invite-only-access"
              >
                Learn more &rarr;
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Icon className="outlined">account_circle</Icon>
            <Box>
              <h5 className="security-title">multi-factor authentication</h5>
              <Link
                className="security-btn"
                href="/articles/multi-factor-authentication"
              >
                Learn more &rarr;
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
