import {
  AppBar,
  Icon,
  Menu,
  NoSsr,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
      <Link href="javascript:void(0)" className="nav-btn" onClick={handleClick}>
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
            overflowY: "scroll",
            maxHeight: 350,
            p: 2,
            py: 1,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          elevation: 0,
          className: "bg-black rounded-2xl",
        }}
      >
        <Link className="items-center dropdown-item small" href="/">
          <Icon className="outlined">book</Icon>
          <Typography>Study groups</Typography>
        </Link>
        <Link className="items-center dropdown-item small" href="/">
          <Icon className="outlined">school</Icon>
          <Typography>Students</Typography>
        </Link>
        <Link className="items-center dropdown-item small" href="/">
          <Icon className="outlined">house</Icon>
          <Typography>Families</Typography>
        </Link>
        <Link className="items-center dropdown-item small" href="/">
          <Icon className="outlined">elderly</Icon>
          <Typography>Senior citizens</Typography>
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
      <Link href="javascript:void(0)" className="nav-btn" onClick={handleClick}>
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
            maxWidth: "100vw",
            overflowY: "scroll",
            maxHeight: 350,
            p: 2,
            py: 1,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          elevation: 0,
          className: "bg-black rounded-2xl",
        }}
      >
        <Link className="dropdown-item" href="/">
          <Box sx={{ pt: 1.5 }}>
            <Icon className="outlined">category</Icon>
          </Box>
          <Box>
            <Typography variant="h6">Carbon</Typography>
            <h6 className="text-gray-400 text-sm">
              Manage your home inventory, organize your memos, and set goals.
            </h6>
          </Box>
        </Link>
        <Link
          className="dropdown-item"
          href="https://availability.smartlist.tech"
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
      <Toolbar className="w-full">
        <Link href={"/"} className="mr-auto">
          {" "}
          <picture>
            <img
              src="https://cdn.jsdelivr.net/gh/Smartlist-App/Assets@master/v2/rounded.png"
              alt="Carbon"
              className="w-10 h-10"
            />
          </picture>
        </Link>

        <Box className="mx-auto flex items-center gap-2">
          <Link
            href="https://github.com/Smartlist-App"
            className="nav-btn"
            target="_blank"
          >
            Open source
          </Link>
          <Link
            href="https://discord.gg/9EJSxkJhnQ"
            className="nav-btn"
            target="_blank"
          >
            Community
          </Link>
          <Link
            href="/support"
            className={
              "nav-btn" +
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
          href="https://my.smartlist.tech"
          className="nav-btn ml-auto"
          target="_blank"
        >
          My account
        </Link>
      </Toolbar>
    </AppBar>
  );
}
