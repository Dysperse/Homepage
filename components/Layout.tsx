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
        background: "#101010",
        color: "#fff",
        p: 8,
      }}
    >
      <Grid spacing={8} container>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
            Smartlist
          </Typography>
          <Typography sx={{ mb: 2 }} gutterBottom>
            Made by a high-school student for everyone
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
              borderRadius: 2,
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              Proudly made in the USA&nbsp;
              <img
                src="data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23B22334' d='M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z'/%3E%3Cpath fill='%23EEE' d='M.068 27.679c.017.093.036.186.059.277.026.101.058.198.092.296.089.259.197.509.333.743L.555 29h34.89l.002-.004c.135-.233.243-.483.332-.741.034-.099.067-.198.093-.301.023-.09.042-.182.059-.275.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9c0-.233.03-.457.068-.679C.028 8.542 0 8.767 0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297-.034.098-.066.196-.092.297zM18 9h18c0-.233-.028-.459-.069-.68-.017-.092-.035-.184-.059-.274-.027-.103-.059-.203-.094-.302-.089-.258-.197-.507-.332-.74.001-.001 0-.003-.001-.004H18v2z'/%3E%3Cpath fill='%233C3B6E' d='M18 5H4C1.791 5 0 6.791 0 9v10h18V5z'/%3E%3Cpath fill='%23FFF' d='M2.001 7.726l.618.449-.236.725L3 8.452l.618.448-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449-.236.725.617-.448.618.448-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9 9l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L5 13l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9 13l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449-.236.725L7 8.452l.618.448-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 7l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448-.236-.725.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 11l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448-.236-.725.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 15l-.235.726zm4 0l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 15l-.235.726z'/%3E%3C/svg%3E"
                style={{ width: "30px" }}
              />
            </Typography>
          </Box>
          <Box
            onClick={() => {
              window.open("https://www.producthunt.com/products/smartlist");
            }}
            sx={{
              transition: "all .2s",
              borderRadius: 2,
              userSelect: "none",
              my: 1,
              gap: "10px",
              "&:active": {
                transform: "scale(.95)",
                transition: "none",
              },
              pr: 2,
              cursor: "pointer",
            }}
          >
            <img
              style={{
                width: "100%",
                maxWidth: "400px",
              }}
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321053&theme=dark"
              alt="Featured on ProductHunt"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
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
          <Typography sx={{ mb: 2 }} variant="h6" gutterBottom>
            Sponsors
          </Typography>
          <Box
            sx={{
              my: 1,
              mb: 2,
              pb: 0.3,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                transition: "all .2s",
                cursor: "pointer",
                "&:active": { transform: "scale(.95)", transition: "none" },
              }}
              onClick={() => {
                window.open(
                  "https://vercel.com/?utm_source=smartlist&utm_campaign=oss"
                );
              }}
            >
              <img
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                alt="Vercel"
                style={{
                  width: "80%",
                }}
              />
            </Box>
            <Box
              onClick={() => {
                window.open("https://infinitzhost.com?smartlist");
              }}
              sx={{
                transition: "all .2s",
                display: "inline-flex",
                alignItems: "center",
                background: "#000",
                borderRadius: 2,
                userSelect: "none",
                p: 1,
                my: 1,
                gap: "10px",
                "&:active": {
                  transform: "scale(.95)",
                  transition: "none",
                },
                pr: 2,
                cursor: "pointer",
              }}
            >
              <img
                src="data:image/svg+xml,%3Csvg class='w-10 h-10' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Capa_1' x='0' y='0' version='1.1' viewBox='6 -6 512 512' xml:space='preserve' style='enable-background:new 6 -6 512 512'%3E%3Cstyle type='text/css'%3E.st0%7Bfill:%23fff%7D.st1%7Bfill:none;stroke:%23fff;stroke-width:16;stroke-miterlimit:10%7D%3C/style%3E%3Ccircle cx='262' cy='250' r='108' class='st0'/%3E%3Ccircle cx='404.8' cy='104' r='40.3' class='st0'/%3E%3Ccircle cx='60.8' cy='289.5' r='24.9' class='st0'/%3E%3Ccircle cx='262' cy='250' r='204.4' class='st1'/%3E%3C/svg%3E"
                alt="InfinitzHost"
                style={{
                  width: "80%",
                  maxWidth: "40px",
                }}
              />{" "}
              <Typography sx={{ fontWeight: "600" }}>
                InfinitzHost (DB hosting)
              </Typography>
            </Box>
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
  button: { textTransform: "none", borderRadius: 4, px: 2 },
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
          ...styles.button,
        }}
      >
        Apps
        <Typography
          className="disableFont"
          sx={{
            marginLeft: "5px",
            opacity: 0.8,
            transform: open && "rotate(180deg)",
            transition: "all .2s",
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
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
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
            backdropFilter: "blur(25px)",
          },
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
            borderBottomRightRadius: "28px !important",
          },
          elevation: 0,
        }}
        MenuListProps={{
          sx: {
            width: "100%",
          },
          "aria-labelledby": "basic-button",
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
            justifyContent: "center",
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
                  fontWeight: "600",
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
                      background: "rgba(0,0,0,0.15)!important",
                    }),
                  display: { xs: "none", sm: "none", md: "inline-flex" },
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
                    window.location.pathname === "/privacy" && {
                      background: "rgba(0,0,0,0.15)!important",
                    }),
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Privacy
              </Button>
            </Link>
            <Link href="/developer">
              <Button
                size="large"
                color="inherit"
                sx={{
                  ...styles.button,
                  ...(typeof window !== "undefined" &&
                    window.location.pathname === "/developer" && {
                      background: "rgba(0,0,0,0.15)!important",
                    }),
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Developer
              </Button>
            </Link>
            <Link href="https://status.smartlist.tech">
              <Button
                size="large"
                color="inherit"
                sx={{
                  ...styles.button,
                  ...(typeof window !== "undefined" &&
                    window.location.pathname === "/developer" && {
                      background: "rgba(0,0,0,0.15)!important",
                    }),
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Status
              </Button>
            </Link>
            <ProductsMenu />
            <Button
              size="large"
              href="/discord"
              color="inherit"
              sx={{
                ...styles.button,
                display: { xs: "none", sm: "inline-flex" },
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
                display: { xs: "none", md: "inline-flex" },
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
                  background: "rgba(0,0,0,.2)",
                },
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
                  marginLeft: "10px",
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
                    xs: 2.2,
                  },
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
              zIndex: 1,
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
