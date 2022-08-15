import "../styles/globals.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const buttonStyles = {
  textTransform: "none",
  px: { sm: 1.5 },
  py: 0.5,
  mr: { xs: 0.5, sm: 1 },
  borderRadius: 3,
  fontWeight: "500",
  color: "#000",
  fontSize: "15px",
  transition: "none",
  "&:hover": { background: "rgba(0,0,0,0.05)" },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ background: "transparent", px: { sm: 2 }, py: 0.5 }}
      >
        <Toolbar>
          <Button sx={{ ...buttonStyles, fontWeight: "700" }}>Smartlist</Button>
          <Button sx={{ ...buttonStyles }}>Features</Button>
          <Button sx={{ ...buttonStyles }}>Privacy</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
