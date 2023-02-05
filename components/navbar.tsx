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
import Image from "next/image";
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
            borderRadius: 4,
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
            borderRadius: 4,
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
            <Image
              src="/logo.png"
              height={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,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"
              width={100}
              alt="Dysperse"
              className="w-10 h-10"
            />
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
          <Image
            src="/logo.png"
            height={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
            width={100}
            alt="Dysperse"
            className="w-10 h-10"
          />
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
