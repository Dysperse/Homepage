import {
  AppBar,
  Icon,
  Menu,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

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
            width: 400,
            maxWidth: "100vw",
            overflowY: "scroll",
            maxHeight: 300,
            p: 0,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          elevation: 0,
          className: "bg-black rounded-2xl",
        }}
      >
        <Link className="dropdown-item" href="/">
          <Icon className="outlined">category</Icon>
          <Box>
            <Typography variant="h6">Carbon</Typography>
            <Typography variant="body2">
              Manage your home inventory, organize your memos, and set goals.
            </Typography>
          </Box>
        </Link>
        <Link className="dropdown-item" href="//availability.smartlist.tech">
          <Icon className="outlined">today</Icon>
          <Box>
            <Typography variant="h6" className="flex items-center">
              Availability
              <span className="rounded-full text-xs px-3 py-1 ml-3 bg-red-500 ">
                NEW
              </span>
            </Typography>
            <Typography variant="body2">
              Manage your home inventory, organize your memos, and set goals.
            </Typography>
          </Box>
        </Link>
      </Menu>
    </>
  );
}

export function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });
  return (
    <AppBar
      className={
        trigger
          ? "border-b border-[rgba(200,200,200,.3)] backdrop-blur-lg text-gray-900 py-1 fixed top-0 left-0 w-full elevated"
          : "border-b border-[rgba(200,200,200,.3)] backdrop-blur-lg text-gray-900 py-1 fixed top-0 left-0 w-full"
      }
      sx={{
        background: trigger ? "rgba(255,255,255,.9)" : "transparent",
        color: "inherit",
      }}
      elevation={0}
    >
      <Toolbar className="w-full">
        <picture className="mr-auto">
          <img
            src="https://cdn.jsdelivr.net/gh/Smartlist-App/Assets@master/v2/rounded.png"
            alt="Carbon"
            className="w-10 h-10"
          />
        </picture>
        <Box className="mx-auto flex items-center gap-2">
          <Link href="/" className="nav-btn">
            Open source
          </Link>
          <Link href="/" className="nav-btn">
            Community
          </Link>
          <Solutions />
          <Link href="/" className="nav-btn">
            Use cases
            <Icon>expand_more</Icon>
          </Link>
        </Box>
        <Link href="/" className="nav-btn ml-auto">
          My account
        </Link>
      </Toolbar>
    </AppBar>
  );
}
