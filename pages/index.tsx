import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as colors from "@mui/material/colors";

function Header() {
  return (
    <Box sx={{ p: { xs: 1, sm: 5 }, pt: 3 }}>
      <Box
        sx={{
          width: "100%",
          py: { xs: 5, sm: 7 },
          borderRadius: 5,
          pt: 15,
          mt: 1,
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 8 }, px: { xs: 4, sm: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: colors.green["600"],
              fontSize: { xs: "40px", sm: "70px" },
            }}
          >
            It's time to organize your home &#8212;
            <br />{" "}
            <span style={{ color: colors["green"][800] }}>the modern way</span>
          </Typography>
          <Typography
            sx={{
              color: colors.green["900"],
              my: 2,

              fontSize: { xs: "15px", sm: "15px" },
            }}
          >
            Ever been stuck at the grocery store wondering what you need to get?
            <br />
            Smartlist helps you track your home inventory and expenses for free
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              mr: 1.5,
              background: "#000 !important",
              color: "#fff",
              fontWeight: "700",
              transition: "transform .2s",
              "&:active": { transform: "scale(.98)", transition: "none" },
              border: "1px solid " + "#000  !important",
              textTransform: "none",
              borderRadius: 4,
              mt: 1.5,
            }}
            size="large"
          >
            Get started <span className="material-symbols-rounded"></span>
          </Button>
          <Button
            variant="outlined"
            disableElevation
            sx={{
              fontWeight: "700",
              mr: 0,
              border: "2px solid #000  !important",
              textTransform: "none",
              transition: "transform .2s",
              "&:active": { transform: "scale(.98)", transition: "none" },
              borderRadius: 4,
              color: "#000",
              mt: 1.5,
            }}
            size="large"
          >
            Tell me more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}
