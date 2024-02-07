import { Box, Button, Chip, Link, SxProps, Typography } from "@mui/material";
import { mintDark } from "./themes";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Jost, JetBrains_Mono } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
});

function Emoji({
  size = 24,
  emoji,
  style = {},
}: {
  size?: number;
  emoji: string;
  style?: any;
}) {
  return (
    <img
      style={{
        width: size,
        height: size,
      }}
      alt="Emoji"
      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji?.toLowerCase()}.png`}
    />
  );
}

const CardContainer = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box
    sx={{
      bgcolor: mintDark.mint2,
      display: "flex",
      px: 5,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 7,
      border: `1px solid ${mintDark.mint5}`,
      "& *": {
        fontFamily: jost.style.fontFamily,
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

const Familiar = () => (
  <CardContainer sx={{ flex: 2 }}>
    <Typography
      className={jetBrainsMono.className}
      fontSize={12}
      fontWeight={900}
    >
      Familiar.
    </Typography>
    <Typography className={jost.className} fontWeight={200}>
      Like your everyday browser, but for navigating <i>productivity</i>.
    </Typography>
  </CardContainer>
);

const Synced = () => (
  <CardContainer>
    <Typography
      className={jetBrainsMono.className}
      fontSize={12}
      fontWeight={900}
    >
      Synced.
    </Typography>
    <Typography className={jost.className} fontWeight={200}>
      Always up to date, no matter where you are.
    </Typography>
  </CardContainer>
);
const Flexible = () => {
  const options = [
    { icon: "calendar_today", text: "Agenda" },
    { icon: "view_kanban", text: "Kanban" },
    { icon: "view_agenda", text: "Stream" },
    { icon: "view_cozy", text: "Grid" },
    { icon: "exercise", text: "Workload" },
  ];
  return (
    <CardContainer>
      <Typography
        className={jetBrainsMono.className}
        fontSize={16}
        fontWeight={900}
      >
        Flexible.
      </Typography>
      <Typography className={jost.className} fontWeight={200}>
        Want precision? Or a more relaxed view? Maybe both? We got you.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1,
          flexWrap: "wrap",
        }}
      >
        {options.map((option) => (
          <Box key={option.text}>
            <Chip
              label={option.text}
              icon={
                <span
                  style={{ color: mintDark.mint11 }}
                  className="material-symbols-rounded"
                >
                  {option.icon}
                </span>
              }
              sx={{
                color: mintDark.mint11,
                bgcolor: mintDark.mint4,
                borderRadius: 99,
              }}
            />
          </Box>
        ))}
      </Box>
    </CardContainer>
  );
};

const Sophisticated = () => (
  <CardContainer>
    <Typography
      className={jetBrainsMono.className}
      fontSize={12}
      fontWeight={900}
    >
      Sophisticated.
    </Typography>
    <Typography className={jost.className} fontWeight={200}>
      Integrated AI which understands you.
    </Typography>
  </CardContainer>
);

const Integrated = () => (
  <CardContainer>
    <Typography
      className={jetBrainsMono.className}
      fontSize={12}
      fontWeight={900}
    >
      Integrated.
    </Typography>
    <Typography className={jost.className} fontWeight={200}>
      Connects with your favorite apps.
    </Typography>
  </CardContainer>
);

const Customizable = () => (
  <CardContainer>
    <Typography
      className={jetBrainsMono.className}
      fontSize={12}
      fontWeight={900}
    >
      Customizable.
    </Typography>
    <Typography className={jost.className} fontWeight={200}>
      Make it your own with themes, emojis, & more.
    </Typography>
  </CardContainer>
);

function About() {
  return (
    <CardContainer>
      <Image
        src="/logo.svg"
        alt="logo"
        width={70}
        height={70}
        style={{
          alignSelf: "center",
          marginTop: 20,
          marginBottom: "auto",
        }}
      />

      <Typography
        className={jetBrainsMono.className}
        sx={{
          mt: -2,
          fontWeight: 300,
          opacity: 0.6,
        }}
      >
        arriving spring 2024
      </Typography>
      <Typography
        className={jost.className}
        sx={{
          fontWeight: 900,
          fontSize: { xs: 30, sm: 50, md: 70 },
          "& .humans": {
            color: mintDark.mint11,
          },
          "& .productivity": {
            fontWeight: 100,
          },
        }}
        variant="h2"
      >
        <span className="productivity">productivity&nbsp;for</span>
        <br />
        <span className="humans">humans</span>
      </Typography>
      <Typography
        className={jost.className}
        variant="h5"
        sx={{
          mt: 1,
          fontWeight: 400,
          fontSize: { xs: 16, sm: 30 },
          opacity: 0.3,
        }}
      >
        #dysperse makes organization simple again
      </Typography>
      <Box sx={{ gap: 2, display: "flex", flexDirection: "row" }}>
        <Button
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
            gap: 1,
          }}
          disableElevation
          disableRipple
          size="large"
          variant="contained"
          className={jost.className}
          href="https://app.dysperse.com/auth/sign-up"
          target="_blank"
        >
          Induct myself{" "}
          <span className="material-symbols-rounded">north_east</span>
        </Button>
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
            gap: 1,
          }}
          disableElevation
          disableRipple
          size="large"
          className={jost.className}
          href="https://app.dysperse.com/auth/sign-in"
          target="_blank"
        >
          Login
        </Button>
      </Box>
      <Box sx={{ marginBottom: "auto" }} />
    </CardContainer>
  );
}

export default function Page() {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        color: mintDark.mint12,
        display: "flex",
        userSelect: "none",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          flexDirection: "row",
          height: "100dvh",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ width: "500px", height: "100%", display: "flex" }}>
          <About />
        </Box>
        <Box
          sx={{
            gap: 2,
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ gap: 2, display: "flex", flex: 1 }}>
            <Familiar />
            <Sophisticated />
            <Synced />
          </Box>
          <Box sx={{ gap: 2, display: "flex", flex: 2 }}>
            <Box
              sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Flexible />
              <Integrated />
            </Box>
            <Box
              sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Customizable />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: `1px solid ${mintDark.mint5}`,
          backdropFilter: "blur(10px)",
          py: 5,
          px: 10,

          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 2,
          "& .MuiLink-root": {
            color: mintDark.mint8,
            textDecorationColor: mintDark.mint6,
            "&:hover": {
              color: mintDark.mint10,
              textDecorationColor: mintDark.mint8,
            },
          },
        }}
      >
        <Link href="/" sx={{ mr: "auto" }}>
          What's new
        </Link>

        <Link href="/">Status</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Terms</Link>
        <Link href="/">Privacy Policy</Link>
      </Box>
    </Box>
  );
}
