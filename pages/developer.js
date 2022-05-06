import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
export default function Render() {
  return (
    <Box sx={{ px: { xs: 5, sm: 17 }, pb: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4, mt: 8 }}>
        Developer <span style={{ color: green[700] }}>resources</span>
      </Typography>
      <Typography sx={{ textAlign: "center", mb: 4 }}>
        Smartlist API coming soon — stay tuned for further updates!
      </Typography>
    </Box>
  );
}
