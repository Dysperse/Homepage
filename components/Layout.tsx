import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Link from "next/link";

function Footer() {
  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        p: 8
      }}
    >
      <Grid spacing={8} container>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
            Smartlist
          </Typography>
          <Typography sx={{ mb: 2 }} gutterBottom>
            We're a philanthropic nonprofit striving to help everyone{" "}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </Typography>
          <Box
            sx={{
              my: 1,
              mb: 2,
              background: "rgba(200,200,200,.1)",
              p: 1,
              borderRadius: 2
            }}
          >
            <Typography gutterBottom variant="h6">
              Proudly made in the USA&nbsp;
              <span role="img" aria-label="USA flag">
                🇺🇸
              </span>
            </Typography>
          </Box>
          <img
            style={{
              width: "100%",
              maxWidth: "400px"
            }}
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321053&theme=dark"
            alt="Featured on ProductHunt"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography gutterBottom variant="h6">
            Apps
          </Typography>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Smartlist
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Smartlist Availability
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Smartlist Recipe Generator
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Smartlist Dressing
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Smartlist Collaborate
          </MuiLink>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography gutterBottom variant="h6">
            Company
          </Typography>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Join our team
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Terms of service
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Privacy policy
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Our&nbsp;team
          </MuiLink>

          <Typography sx={{ mt: 4 }} gutterBottom>
            Links
          </Typography>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Contact us
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Knowledge base
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            hello@smartlist.tech
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            Official Discord
          </MuiLink>
          <MuiLink
            underline="none"
            sx={{ display: "block", mb: 1, color: "#eee" }}
          >
            GitHub
          </MuiLink>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ mb: 2 }} variant="h6" gutterBottom>
            Sponsors
          </Typography>
          <Box
            sx={{
              my: 1,
              mb: 2,
              background: "rgba(200,200,200,.2)",
              p: 1,
              pb: 0.3,
              borderRadius: 2
            }}
          >
            <a href="https://infinitzhost.com?smartlist">
              <img
                src="https://cdn.discordapp.com/attachments/833204440295014432/846615097186844692/ihlogo.png"
                alt="InfinitzHost"
                style={{
                  width: "80%"
                }}
              />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function App({ name, description, url = "/" }: any) {
  return (
    <Grid item xs={12} sm={6}>
      <Card
        elevation={0}
        sx={{ background: "rgba(200,200,200,.3)", borderRadius: 5 }}
      >
        <CardActionArea href={url} target="_blank">
          <CardContent>
            <Typography sx={{ fontWeight: "600" }} gutterBottom>
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

const styles = {
  button: { textTransform: "none", borderRadius: 4, px: 2 }
};
function ProductsMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openProductsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };
  global.openProductsMenu = openProductsMenu;
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={openProductsMenu}
        size="large"
        color="inherit"
        sx={{
          ...styles.button
        }}
      >
        Apps
        <Typography
          className="disableFont"
          sx={{
            marginLeft: "5px",
            opacity: 0.8,
            transform: open && "rotate(180deg)",
            transition: "all .2s"
          }}
        >
          <span
            style={{ verticalAlign: "middle" }}
            className="material-symbols-rounded"
          >
            expand_more
          </span>
        </Typography>
      </Button>
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        onClose={handleClose}
        BackdropProps={{
          sx: {
            minWidth: "500px",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(25px)"
          }
        }}
        PaperProps={{
          sx: {
            position: "fixed!important",
            left: "0!important",
            background: "rgba(240,240,240,.9)",
            backdropFilter: "blur(20px)",
            top: "70px!important",
            right: "0!important",
            p: 2,
            width: "calc(100vw - 64px) !important",
            boxShadow: 0,
            overscrollBehavior: "none",
            maxHeight: "70vh",
            px: 4,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: "28px!important",
            borderBottomRightRadius: "28px !important"
          },
          elevation: 0
        }}
        MenuListProps={{
          sx: {
            width: "100%"
          },
          "aria-labelledby": "basic-button"
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }}>
              Apps
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }}>
              Explore all of our apps - free of cost.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ pr: 2 }}>
            <Grid container spacing={2}>
              <App
                name="Smartlist"
                description="Smart and easy home inventory and finance management"
              />
              <App
                url="https://availability.smartlist.tech"
                name="Smartlist Availability"
                description="Smart and easy home inventory and finance management"
              />
              <App
                url="https://collaborate.smartlist.tech"
                name="Smartlist Collaborate"
                description="Smart and easy home inventory and finance management"
              />
              <App
                href="https://recipe-generator.smartlist.tech"
                name="Smartlist recipe generator"
                description="Smart and easy home inventory and finance management"
              />
              <App
                href="https://recipe-generator.smartlist.tech"
                name="Smartlist dressing"
                description="Find sizes of clothes compatible with every store."
              />
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
}

export default function Layout(props: any) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            color: "hsl(240, 11%, 25%)",
            background: "rgba(250,250,250,.9)",
            backdropFilter: "blur(15px)",
            height: "70px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Toolbar>
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                  "&:active": { opacity: 0.7 },
                  mr: 3,
                  fontWeight: "600"
                }}
              >
                Smartlist
              </Typography>
            </Link>
            <Link href="/our-impact">
              <Button
                size="large"
                color="inherit"
                sx={{
                  ...styles.button,
                  ...(typeof window !== "undefined" &&
                    window.location.pathname === "/our-impact" && {
                      background: "rgba(0,0,0,0.15)!important"
                    }),
                  display: { xs: "none", sm: "none", md: "inline-flex" }
                }}
              >
                Our&nbsp;impact
              </Button>
            </Link>
            <Link href="/privacy">
            <Button
              size="large"
              color="inherit"
              sx={{
                ...styles.button,
                ...(typeof window !== "undefined" &&
                    window.location.pathname === "/our-impact" && {
                      background: "rgba(0,0,0,0.15)!important"
                    }),
                display: { xs: "none", sm: "inline-flex" }
              }}
            >
              Privacy
            </Button>
            </Link>
            <Button
              size="large"
              color="inherit"
              sx={{
                ...styles.button,
                display: { xs: "none", sm: "inline-flex" }
              }}
            >
              Developer
            </Button>
            <ProductsMenu />
            <Button
              size="large"
              color="inherit"
              sx={{
                ...styles.button,
                display: { xs: "none", sm: "inline-flex" }
              }}
            >
              Community
            </Button>
            <Button
              href="https://team.smartlist.ga"
              target="_blank"
              size="large"
              color="inherit"
              sx={{
                ...styles.button,
                display: { xs: "none", md: "inline-flex" }
              }}
            >
              Our&nbsp;team
            </Button>
            <Typography sx={{ flexGrow: 1 }} />
            <Button
              href="https://login.smartlist.tech"
              target="_blank"
              size="large"
              color="inherit"
              sx={{
                ...styles.button,
                background: "rgba(0,0,0,.1)",
                "&:hover": {
                  background: "rgba(0,0,0,.2)"
                }
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
                Continue&nbsp;to&nbsp;my&nbsp;account
              </Box>
              <Box sx={{ display: { xs: "inline-block", sm: "none" } }}>
                Sign&nbsp;in
              </Box>
              <span
                className="material-symbols-rounded"
                style={{
                  marginLeft: "10px"
                }}
              >
                chevron_right
              </span>
            </Button>
          </Toolbar>
        </AppBar>
      </>
      <Toolbar sx={{ height: "70px" }} />
      <Collapse in={open}>
        <Box sx={{ p: 1 }}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                sx={{
                  mt: {
                    sm: "-4px",
                    xs: 2.2
                  }
                }}
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span className="material-symbols-rounded">close</span>
              </IconButton>
            }
            severity="info"
            sx={{
              background: "linear-gradient(to right, #237A57, #093028)",
              width: "100%",
              borderRadius: 4,
              boxSizing: "border-box",
              zIndex: 1
            }}
            variant="filled"
          >
            Smartlist now supports over 2000+ banks. New features such as goals,
            lessons, and loans are now here!
          </Alert>
        </Box>
      </Collapse>

      {props.children}
      <Footer />
    </>
  );
}
