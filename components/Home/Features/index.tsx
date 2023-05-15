import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Icon,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useDeferredValue, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AgendaFeature } from "./agenda";
import { BoardsFeature } from "./boards";
import Image from "next/image";
import { InventoryFeature } from "./inventory";
import { MoodTrackingFeature } from "./moodTracking";
import { CoachFeature } from "./coach";

function Encryption({ featureStyles }: any) {
  const [value, setValue] = useState("Throw the trash");
  const [data, setData] = useState(
    "1DmX+/BysRLmebEs6tac25/WyKa3N0pIZBYBaDy14v9yyEF6tlFU+WXRcUWDFpM10n4aph2uTCHK8jW2HUvKzg=="
  );
  const deferredValue = useDeferredValue(value);

  const handleChange = useCallback(
    async (e: any) => {
      setValue(e.target.value);
      const data = await fetch(
        `/api/encrypt?data=${deferredValue.trim() || "Throw the trash"}`
      ).then((res) => res.json());
      setData(data);
    },
    [deferredValue]
  );
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const styles = {
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    border: `1px solid #${isDark ? "303030" : "eee"}`,
    height: "100%",
    borderRadius: 8,
    p: 3,
  };

  return (
    <Card
      sx={{ ...featureStyles.card, borderColor: isDark ? "#303030" : "#ddd" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          AES-256 bit encryption
        </Typography>
        <Typography>
          Dysperse encrypts all your user data with AES-256 GCM, zero-access
          encryption.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              height: "100%",
              mb: { xs: 4 },
            }}
          >
            <Box sx={{ ...styles, position: "relative" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                What (only) you can see
              </Typography>
              <TextField
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon
                        sx={{
                          color: isDark ? "#fff" : "#000",
                        }}
                      >
                        check_circle
                      </Icon>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: {
                    background: `hsl(240,11%,${isDark ? 10 : 95}%)`,
                    px: 2,
                    py: 1,
                    color: isDark ? "#fff" : "#000",
                    borderRadius: 5,
                  },
                }}
                variant="standard"
                fullWidth
                value={value}
                onChange={handleChange}
                size="small"
                placeholder="Throw the trash"
                defaultValue="Throw the trash"
              />
              <Tooltip
                open
                title={
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Icon
                      sx={{
                        fontSize: "23px!important",
                      }}
                    >
                      magic_button
                    </Icon>
                    Try me!
                  </Box>
                }
                arrow
                placement="bottom-start"
                PopperProps={{
                  sx: {
                    "&, & *": {
                      fontSize: "14px!important",
                    },
                    zIndex: "9",
                  },
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 40,
                  }}
                ></span>
              </Tooltip>
            </Box>
            <Icon
              sx={{
                position: "relative",
                right: -10,
                transform: { xs: "rotate(90deg)", sm: "none" },
              }}
            >
              east
            </Icon>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                ...styles,
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, display: "flex" }}>
                What&apos;s stored on our end
                <Tooltip title="For security reasons, this is not a 100% accurate representation of account information stored in our servers.">
                  <Icon sx={{ opacity: "0.6", ml: "auto" }}>info</Icon>
                </Tooltip>
              </Typography>
              <Box
                sx={{
                  background: `hsl(240,11%,${isDark ? 10 : 95}%)`,
                  px: 2,
                  py: 1,
                  borderRadius: 5,
                  wordWrap: "break-word",
                }}
              >
                {data}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function Features({ statsRef }: any) {
  const agendaRef: any = useRef(null);
  const boardsRef: any = useRef(null);
  const coachRef: any = useRef(null);
  const moodRef: any = useRef(null);
  const inventoryRef: any = useRef(null);

  const [showToolbar, setShowToolbar] = useState(false);
  const [activeFeature, setActiveFeature] = useState("agenda");

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const refs = [
      { ref: agendaRef, feature: "agenda" },
      { ref: boardsRef, feature: "boards" },
      { ref: coachRef, feature: "coach" },
      { ref: inventoryRef, feature: "inventory" },
      { ref: moodRef, feature: "mood" },
    ];

    for (const { ref, feature } of refs) {
      if (!ref) continue;
      const { top } = ref.current.getBoundingClientRect();
      if (top < document.documentElement.clientHeight) {
        setActiveFeature(feature);
      }
    }

    if (latest > screenHeight - 200) {
      setShowToolbar(true);
    }

    if (statsRef.current) {
      const statsRect = statsRef.current.getBoundingClientRect();
      if (statsRect.top < document.documentElement.clientHeight) {
        setShowToolbar(false);
      } else {
        setShowToolbar(latest > screenHeight - 200);
      }
    }
  });

  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const featureStyles = {
    featureTitle: {
      fontWeight: 800,
      textAlign: "center",
      fontSize: { xs: "2rem", sm: "2.5rem" },
    },
    featureSubTitle: {
      mb: 4,
      textAlign: "center",
      fontSize: { xs: "2rem", sm: "2.5rem" },
    },
    featureDescription: {
      textAlign: "center",
      maxWidth: "80%",
      width: "550px",
      fontSize: { xs: "1.1rem", sm: "1.5rem" },
      fontWeight: 600,
      margin: "auto",
      mt: -7,
    },
    textDescriptionTitle: {
      fontWeight: 800,
      display: "flex",
      gap: 2,
      mt: "-3px",
      mb: 1,
    },
    textDescriptionParagraph: {
      mt: 1,
    },
    card: {
      width: "100%",
      border: "1px solid",
      height: "100%",
      borderRadius: 8,
      boxShadow: "none",
      position: "relative",
      color: isDark ? "white" : "black",
      "& .MuiCardContent-root": {
        p: 4,
      },
    },
    cardImage: {
      height: "auto",
      zIndex: 9,
      position: "relative",
      float: "right",
      borderTopLeftRadius: "28px",
      maxWidth: "calc(100% - 40px)",
      width: "400px",
    },
    blur: {
      opacity: 0.2,
      zIndex: -1,
      width: { xs: 150, md: 300 },
      height: { xs: 150, md: 300 },
      borderRadius: 999,
      filter: "blur(30px)",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
  };

  const buttonStyles = (isActive: boolean) => ({
    "& .MuiIcon-root, & .MuiIcon-root *": {
      transition: "all .2s!important",
    },
    ...(isDark && { color: "#ccc" }),

    ...(isActive && {
      background: isDark
        ? "rgba(255,255,255,.1)!important"
        : "rgba(200,200,200,.3)!important",
      color: isDark ? "#fff" : "#000",
      "& .MuiIcon-root": {
        fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
      },
    }),
  });

  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container
      sx={{
        maxWidth: "100vw",
      }}
    >
      {/* Separate the content below the header */}
      <Box
        sx={{
          mb: 10,
          borderTop: isDark
            ? "1px solid rgba(255,255,255,.1)"
            : "1px solid rgba(0,0,0,0.05)",
        }}
      />

      <Box
        sx={{
          mt: { xs: -10, sm: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: isDark ? "#303030" : "#ddd",
                }}
              >
                <CardContent>
                  <Image
                    src="/devices.svg"
                    width={500}
                    height={500}
                    alt="Sync with all your devices!"
                    style={{
                      width: "80%",
                      ...(isDark && { filter: "invert(1)" }),
                      margin: "auto",
                      display: "block",
                      height: "auto",
                      marginBottom: "5px",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Sync across devices
                  </Typography>
                  <Typography>
                    Sign into your Dysperse account on any device
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Encryption featureStyles={featureStyles} />
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: isDark ? "#303030" : "#ddd",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Customize your Dysperse
                  </Typography>
                  <Typography>
                    Change the colors and theme to make Dysperse your own
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: isDark ? "#303030" : "#ddd",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Collaborative by default
                  </Typography>
                  <Typography>Invite up to 5 people to your group</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      <AppBar
        elevation={0}
        color="inherit"
        sx={{
          transition: "all .2s",
          top: showToolbar ? "60px" : "50px",
          pointerEvents: showToolbar ? "all" : "none",
          opacity: showToolbar ? 1 : 0,
          position: "fixed",
          backdropFilter: "blur(10px)",
          background: showToolbar
            ? isDark
              ? "rgba(0,0,0,0.5)"
              : "rgba(255,255,255,.5)"
            : "transparent",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.05)",
          height: "45px",
          overflow: "scroll",
          px: { sm: 5 },
        }}
      >
        <Toolbar
          sx={{
            height: "45px!important",
            minHeight: "45px!important",
            "& *": {
              flexShrink: 0,
            },
            gap: 2.5,
          }}
        >
          <Button
            id="agendaTrigger"
            size="small"
            sx={buttonStyles(activeFeature === "agenda")}
            onClick={() => handleScroll(agendaRef)}
          >
            <Icon>check_circle</Icon>
            Agenda
          </Button>
          <Button
            id="boardsTrigger"
            size="small"
            sx={buttonStyles(activeFeature === "boards")}
            onClick={() => handleScroll(boardsRef)}
          >
            <Icon>view_kanban</Icon>
            Boards
          </Button>
          <Button
            id="coachTrigger"
            size="small"
            sx={buttonStyles(activeFeature === "coach")}
            onClick={() => handleScroll(coachRef)}
          >
            <Icon>rocket_launch</Icon>
            Coach
          </Button>
          <Button
            id="inventoryTrigger"
            size="small"
            sx={buttonStyles(activeFeature === "inventory")}
            onClick={() => handleScroll(inventoryRef)}
          >
            <Icon>inventory_2</Icon>
            Inventory
          </Button>
          <Button
            id="moodTrigger"
            size="small"
            sx={buttonStyles(activeFeature === "mood")}
            onClick={() => handleScroll(moodRef)}
          >
            <Icon>stress_management</Icon>
            Mood tracking
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ mb: 10 }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Box ref={agendaRef} sx={{ scrollMarginTop: "200px" }}>
          <AgendaFeature featureStyles={featureStyles} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Box ref={boardsRef} sx={{ scrollMarginTop: "200px" }}>
          <BoardsFeature featureStyles={featureStyles} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Box ref={coachRef} sx={{ scrollMarginTop: "200px" }}>
          <CoachFeature featureStyles={featureStyles} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Box ref={inventoryRef} sx={{ scrollMarginTop: "200px" }}>
          <InventoryFeature featureStyles={featureStyles} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Box ref={moodRef} sx={{ scrollMarginTop: "200px" }}>
          <MoodTrackingFeature featureStyles={featureStyles} />
        </Box>
      </motion.div>
    </Container>
  );
}
