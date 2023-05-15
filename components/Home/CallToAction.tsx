import {
  Box,
  Button,
  Container,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";

export function CallToAction() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Image
          src="/grainy.svg"
          width={100}
          height={100}
          alt="Dysperse logo"
          style={{
            filter: isDark ? "invert(1)" : "invert(0)",
          }}
        />
        <Typography
          className="font-serif"
          variant="h4"
          sx={{
            fontWeight: 900,
            my: 1,
          }}
        >
          meet your absolute productivity{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #ED213A, #93291E)",
              color: red["100"],
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            weapon.
          </span>
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6">
          <i className="font-serif">and it&apos;s free</i>
        </Typography>
        <Button
          variant="contained"
          size="large"
          target="_blank"
          href="//my.dysperse.com/auth/signup"
        >
          Get started
          <Icon>north_east</Icon>
        </Button>
      </Box>
    </Container>
  );
}
