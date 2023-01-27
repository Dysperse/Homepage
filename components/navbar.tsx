import {
  AppBar,
  Icon,
  Menu,
  NoSsr,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function UseCases() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link
        href="#!"
        className="hidden-on-mobile nav-btn"
        onClick={handleClick}
      >
        Use cases
        <Icon>expand_more</Icon>
      </Link>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 3,
            ml: 8,
            width: "auto",
            maxWidth: "100vw",
            borderRadius:4,
            overflowY: "scroll",
            maxHeight: 350,
            p: 2,
            py: 1,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          elevation: 0,
          className: "bg-black",
        }}
      >
        <Link
          className="items-center dropdown-item small"
          href="/for/study-groups"
          onClick={handleClose}
        >
          <Icon className="outlined">book</Icon>
          <Typography>Study groups</Typography>
        </Link>
        <Link
          className="items-center dropdown-item small"
          href="/for/students"
          onClick={handleClose}
        >
          <Icon className="outlined">school</Icon>
          <Typography>Students</Typography>
        </Link>
        <Link
          className="items-center dropdown-item small"
          href="/"
          onClick={handleClose}
        >
          <Icon className="outlined">house</Icon>
          <Typography>Families</Typography>
        </Link>
      </Menu>
    </>
  );
}

function Solutions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link
        href="#!"
        className="nav-btn hidden-on-mobile"
        onClick={handleClick}
      >
        Solutions
        <Icon>expand_more</Icon>
      </Link>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 3,
            ml: 8,
            width: 450,
            borderRadius:4,
            maxWidth: "100vw",
            overflowY: "scroll",
            maxHeight: 350,
            p: 2,
            py: 1,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          elevation: 0,
          className: "bg-black",
        }}
      >
        <Link className="dropdown-item" href="/">
          <Box sx={{ pt: 1.5 }}>
            <Icon className="outlined">category</Icon>
          </Box>
          <Box>
            <Typography variant="h6">Dysperse</Typography>
            <h6 className="text-gray-400 text-sm">
              Manage your home inventory, organize your memos, and set goals.
            </h6>
          </Box>
        </Link>
        <Link
          className="dropdown-item"
          href="https://availability.dysperse.com"
          target="_blank"
        >
          <Box sx={{ pt: 1.5 }}>
            <Icon className="outlined">today</Icon>
          </Box>
          <Box>
            <Typography variant="h6" className="flex items-center">
              Availability
              <span className="rounded-full text-xs px-3 py-1 ml-3 bg-red-500 ">
                NEW
              </span>
            </Typography>
            <h6 className="text-gray-400 text-sm">
              Manage your home inventory, organize your memos, and set goals.
            </h6>
          </Box>
        </Link>
      </Menu>
    </>
  );
}

export function Navbar() {
  const router = useRouter();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      className={
        trigger
          ? "border-b border-[rgba(200,200,200,.3)] backdrop-blur-lg text-gray-900 py-1 w-full elevated"
          : "border-b border-[rgba(200,200,200,.3)] backdrop-blur-lg text-gray-900 py-1 w-full"
      }
      sx={{
        background: trigger ? "rgba(255,255,255,.9)" : "transparent",
        color: "inherit",
      }}
      elevation={0}
    >
      <SwipeableDrawer
        open={open}
        disableBackdropTransition
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        anchor="bottom"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
        PaperProps={{
          sx: {
            maxHeight: "90vh",
            borderRadius: "1rem 1rem 0 0",
            background: "rgb(20 83 45)",
            p: 2,
          },
        }}
      >
        <Box className="flex items-center justify-between p-3 mb-3 sticky top-0 backdrop-blur-md rounded-2xl">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="flex items-center text-green-100 gap-4 text-xl font-[700]"
          >
            <picture>
              <img
                src="https://cdn.jsdelivr.net/gh/Dysperse/Assets@latest/v5/windows11/Square44x44Logo.altform-unplated_targetsize-256.png"
                alt="Dysperse"
                className="w-10 h-10"
              />
            </picture>
            Dysperse
          </Link>
          <Link
            href="#!"
            onClick={() => setOpen(false)}
            className="nav-btn active:scale-90 transition-all"
          >
            <Icon className="outlined">close</Icon>
          </Link>
        </Box>
        <Box sx={{ p: 2, pt: 0 }}>
          <Link
            href="/support"
            className="nav-btn p-2 rounded-2xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Icon className="outlined">help</Icon>
            Support
          </Link>
          <Link
            href="https://discord.gg/9EJSxkJhnQ"
            target="_blank"
            className="nav-btn p-2 rounded-2xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Icon className="outlined">chat_bubble</Icon>
            Community
          </Link>
           <Link
            href="https://discord.gg/9EJSxkJhnQ"
            target="_blank"
            className="nav-btn p-2 rounded-2xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Icon className="outlined">dns</Icon>
            Server status
          </Link>
          <h2 className="text-green-200 my-5 mb-2 text-sm uppercase ml-1">
            SOLUTIONS
          </h2>
          <Box className="flex flex-col gap-1">
            <Link
              href="/"
              className="nav-btn p-2 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              <Icon className="outlined">category</Icon>
              <span>Dysperse</span>
            </Link>
            <Link
              href="https://availability.dysperse.com"
              target="_blank"
              className="nav-btn p-2 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              <Icon className="outlined">today</Icon>
              <span>Dysperse Availability</span>
            </Link>
          </Box>
          <h2 className="text-green-200 my-5 mb-2 text-sm uppercase ml-1">
            USE CASES
          </h2>
          <Box className="flex flex-col gap-1">
            <Link
              href="/for/families"
              className="nav-btn p-2 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              <Icon className="outlined">family_restroom</Icon>
              <span>For Families</span>
            </Link>
            <Link
              href="/for/students"
              className="nav-btn p-2 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              <Icon className="outlined">school</Icon>
              <span>For Students</span>
            </Link>
            <Link
              href="/for/study-groups"
              className="nav-btn p-2 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              <Icon className="outlined">book</Icon>
              <span>For Study Groups</span>
            </Link>
          </Box>
        </Box>
      </SwipeableDrawer>
      <Toolbar className="w-full">
        <Link
          href="#!"
          onClick={() => {
            setOpen(true);
          }}
          className="nav-btn mr-auto px-1 sm:px-4 sm:hidden"
        >
          <Icon className="outlined">menu</Icon>
        </Link>

        <Link href={"/"} className="mr-3 sm:mr-auto">
          <picture>
            <img
              src="https://cdn.jsdelivr.net/gh/Dysperse/Assets@latest/v5/windows11/Square44x44Logo.altform-unplated_targetsize-256.png"
              alt="Dysperse"
              className="w-10 h-10"
            />
          </picture>
        </Link>

        <Box className="sm:mx-auto flex items-center gap-2">
          <Link
            href="https://github.com/Dysperse"
            className="nav-btn hidden-on-mobile"
            target="_blank"
          >
            Open source
          </Link>
          <Link
            href="https://discord.gg/9EJSxkJhnQ"
            className="nav-btn hidden-on-mobile"
            target="_blank"
          >
            Community
          </Link>
          <Link
            href="https://status.dysperse.com"
            className="nav-btn hidden-on-mobile"
            target="_blank"
          >
            Server status
          </Link>
          <Link
            href="/support"
            className={
              "hidden-on-mobile nav-btn" +
              (router.pathname === "/support" ||
              router.pathname.includes("/articles")
                ? " active"
                : "")
            }
          >
            Support
          </Link>
          <Solutions />
          <UseCases />
        </Box>
        <Link
          href="https://my.dysperse.com"
          className="nav-btn ml-auto px-1 sm:px-4"
          target="_blank"
        >
          <Icon className="outlined">account_circle</Icon>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
