import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

export default function Render() {
  return (
    <Box sx={{ px: { xs: 5, sm: 14 }, pb: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4, mt: 8 }}>
        Our <span style={{ color: green[700] }}>impact.</span>
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        At Smartlist, our goal is to provide quality resources to the world.
        Read more to learn how our products attempt to help others.
      </Typography>
    </Box>
  );
}
