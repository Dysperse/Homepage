import {
  AppBar,
  Icon,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

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
          <Link href="/" className="nav-btn">
            Solutions
            <Icon>expand_more</Icon>
          </Link>
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
