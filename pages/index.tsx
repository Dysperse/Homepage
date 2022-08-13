import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as colors from "@mui/material/colors";

function Header() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "end",
        width: "100vw",
        backgroundImage:
          "url(https://i.ibb.co/q9yXNGW/blurry-gradient-haikei.png)",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 8 } }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: "40px", sm: "50px" } }}
            >
              It's time to organize your home &#8212;
              <br />{" "}
              <span style={{ color: colors["green"][900] }}>
                the modern way
              </span>
            </Typography>
            <Typography sx={{ fontWeight: { sm: "800" } }}>
              Ever been stuck at the grocery store wondering what you need to
              get? Smartlist helps you track your home inventory and expenses
              for free
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{
                mr: 1.5,
                background: colors.brown["700"] + "!important",
                transition: "transform .2s",
                "&:active": { transform: "scale(.98)", transition: "none" },
                border: "1px solid " + colors.brown["700"] + " !important",
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
                mr: 0,
                border: "2px solid " + colors.brown["700"] + " !important",
                textTransform: "none",
                transition: "transform .2s",
                "&:active": { transform: "scale(.98)", transition: "none" },
                borderRadius: 4,
                color: colors.brown["700"],
                mt: 1.5,
              }}
              size="large"
            >
              Tell me more
            </Button>
          </Grid>
        </Grid>
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
