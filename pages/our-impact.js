import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

export default function Render() {
  return (
    <Box>
      <Typography>
        Our <span style={{ color: green[700] }}>impact.</span>
      </Typography>
    </Box>
  );
}
