import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
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
        background: "#eee",
        p: 8,
        borderTopLeftRadius: "28px!important",
        borderTopRightRadius: "28px!important"
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={3} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
            Smartlist
          </Typography>
          <Typography variant="h6" gutterBottom>
            We release projects to benefit others
          </Typography>
          <img
            style={{
              width: "100%",
              maxWidth: "200px"
            }}
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321053&theme=dark"
            alt="Featured on ProductHunt"
          />
        </Grid>
        <Grid item xs={12} sm={3} sx={{ p: 2 }}>
          <Typography gutterBottom>Apps</Typography>
          <MuiLink sx={{ display: "block", mb: 1 }}>Smartlist</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>
            Smartlist Availability
          </MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>
            Smartlist Recipe Generator
          </MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Smartlist Dressing</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>
            Smartlist Collaborate
          </MuiLink>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ p: 2 }}>
          <Typography gutterBottom>Company</Typography>
          <MuiLink sx={{ display: "block", mb: 1 }}>Join our team</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Terms of service</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Privacy policy</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Our&nbsp;team</MuiLink>

          <Typography sx={{ mt: 4 }} gutterBottom>
            Links
          </Typography>
          <MuiLink sx={{ display: "block", mb: 1 }}>Contact us</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Knowledge base</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>
            hello@smartlist.tech
          </MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>Official Discord</MuiLink>
          <MuiLink sx={{ display: "block", mb: 1 }}>GitHub</MuiLink>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ p: 2 }}>
          <Typography sx={{ mb: 2 }} gutterBottom>
            Sponsors
          </Typography>
          <a href="https://infinitzhost.com?smartlist">
            <img
              src="https://cdn.discordapp.com/attachments/809043558220562463/847422401096056863/ih2.png"
              alt="InfinitzHost"
              style={{
                width: "80%",
                opacity: 0.4
              }}
            />
          </a>
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
  button: { mr: 1, textTransform: "none", borderRadius: 3 }
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
          className="material-symbols-rounded"
          sx={{
            marginLeft: "5px",
            transform: open && "rotate(180deg)",
            transition: "all .2s"
          }}
        >
          expand_more
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
            background: "rgba(0,0,0,0.1)",
            backdropFilter: "blur(15px)"
          }
        }}
        PaperProps={{
          sx: {
            position: "fixed!important",
            left: "0!important",
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
            background: "#fff",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
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
                sx={{ mr: 3, fontWeight: "600" }}
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
                  display: { xs: "none", sm: "none", md: "inline-flex" }
                }}
              >
                Our&nbsp;impact
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
              Privacy
            </Button>
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
        <Alert
          action={
            <IconButton
              aria-label="close"
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
            width: "100vw",
            boxSizing: "border-box",
            zIndex: 1,
            borderRadius: 0
          }}
          variant="filled"
        >
          Smartlist now supports over 2000+ banks. New features such as goals,
          lessons, and loans are now here!
        </Alert>
      </Collapse>
      {props.children}
      <Footer />
    </>
  );
}
