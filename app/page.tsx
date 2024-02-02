import { Box, Button, Chip, Typography } from "@mui/material";
import { mintDark } from "./themes";
import Image from "next/image";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function Page() {
  return (
    <Box
      sx={{
        bgcolor: mintDark.mint11,
        height: "100vh",
        width: "100vw",
        padding: "3px",
        userSelect: "none",
        boxSizing: "border-box",
        color: mintDark.mint12,
      }}
    >
      <Box
        sx={{
          bgcolor: mintDark.mint2,
          minHeight: "100%",
          display: "flex",
          px: 5,
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 10,
          alignItems: { sm: "center" },
          "& *": {
            fontFamily: jost.style.fontFamily,
          },
        }}
      >
        <Image
          width={70}
          height={70}
          src="/logo.svg"
          alt="logo"
          style={{
            marginTop: 20,
            borderRadius: 99,
            marginBottom: "auto",
            alignSelf: "center",
          }}
        />
        <Typography
          className={jost.className}
          sx={{
            fontWeight: 300,
            marginBottom: 2,
            opacity: 0.6,
          }}
        >
          coming spring 2024
        </Typography>
        <Typography
          className={jost.className}
          sx={{
            textAlign: { sm: "center" },
            fontWeight: 900,
            fontSize: { xs: 30, sm: 50, md: 70 },
            "& span": {
              color: mintDark.mint12,
            },
          }}
          variant="h2"
        >
          productivity for the <span>human</span>.
        </Typography>
        <Typography
          className={jost.className}
          variant="h5"
          sx={{
            textAlign: { sm: "center" },
            fontWeight: 200,
            marginTop: 2,
            fontSize: { xs: 16, sm: 30 },
          }}
        >
          we're not just building a product, we're building a movement.
        </Typography>
        {/* <Button
          sx={{
            marginTop: 3,
            background: mintDark.mint10,
            color: mintDark.mint2,
            "&:hover": {
              background: mintDark.mint11,
            },
            "&:active": {
              background: mintDark.mint12,
            },
            textTransform: "none",
            borderRadius: 99,
            transition: "none",
            gap: 2,
          }}
          disableElevation
          disableRipple
          size="large"
          variant="contained"
          className={jost.className}
          href="https://my.dysperse.com"
          target="_blank"
        >
          Induct myself <span className="material-symbols-outlined">east</span>
        </Button> */}
        <Button
          sx={{
            marginTop: 3,
            background: mintDark.mint2,
            color: mintDark.mint8,
            "&:hover": {
              background: mintDark.mint3,
            },
            "&:active": {
              background: mintDark.mint4,
            },
            textTransform: "none",
            borderRadius: 99,
            transition: "none",
            gap: 2,
          }}
          disableElevation
          disableRipple
          size="large"
          className={jost.className}
          href="https://my.dysperse.com"
          target="_blank"
        >
          Visit old site
        </Button>
        <Box sx={{ marginBottom: "auto" }} />
      </Box>
    </Box>
  );
}
