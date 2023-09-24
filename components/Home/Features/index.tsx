import {
  TimelineSeparator,
  TimelineDot,
  timelineItemClasses,
  TimelineItem,
  TimelineContent,
  Timeline,
  TimelineConnector,
} from "@mui/lab";
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
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useCallback, useDeferredValue, useRef, useState } from "react";
import { AgendaFeature } from "./agenda";
import { InventoryFeature } from "./inventory";
import { StartFeature } from "./start";
import { blueDark, purpleDark, redDark } from "@radix-ui/colors";

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
  const startRef: any = useRef(null);
  const tasksRef: any = useRef(null);
  const inventoryRef: any = useRef(null);

  const [showToolbar, setShowToolbar] = useState(false);
  const [activeFeature, setActiveFeature] = useState("agenda");

  const { scrollY } = useScroll();
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const refs = [
      { ref: startRef, feature: "start" },
      { ref: tasksRef, feature: "tasks" },
      { ref: inventoryRef, feature: "inventory" },
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
    featureTitle: {},
    timelineDot: {
      width: 35,
      height: 35,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: isDark ? "#303030" : "#eee",
    },
    featureSubTitle: {
      fontSize: { xs: "2rem", sm: "4rem" },
      display: "flex",
      alignItems: "center",
      mt: 2,
    },
    featureDescription: {
      maxWidth: "80%",
      width: "550px",
      fontSize: { xs: "1.1rem", sm: "1rem" },
      fontWeight: 600,
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
        fontVariationSettings: `'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 48`,
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
            delay: 2,
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
          {[
            { id: "startTrigger", icon: "change_history", text: "Start" },
            { id: "tasksTrigger", icon: "check_circle", text: "Tasks" },
            { id: "inventoryTrigger", icon: "inventory_2", text: "Inventory" },
          ].map((item) => (
            <Button
              id={item.id}
              size="small"
              sx={buttonStyles(activeFeature === item.text.toLowerCase())}
              onClick={() => handleScroll(item.text.toLowerCase())}
            >
              <Icon>{item.icon}</Icon>
              {item.text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box sx={{ mb: 10 }} />
      <Typography variant="h2" className="font-serif">
        The four elements.
      </Typography>
      <Typography sx={{ mt: 1, opacity: 0.6 }}>
        Core principles that drive Dysperse&apos;s design.
      </Typography>
      <Grid
        container
        sx={{
          border: "2px solid",
          p: 2,
          borderColor: "rgba(255,255,255,.1)",
          borderRadius: 5,
          mt: 2,
        }}
      >
        {[
          {
            heading: "Instinct",
            description: "Engineered for minimal effort",
            icon: "pan_tool_alt",
          },
          {
            heading: "Adaptation",
            description: "Flexible for any personality",
            icon: "circle",
          },
          {
            heading: "Utility",
            description: "Designed for conveniency",
            icon: "auto_awesome_motion",
          },
          {
            heading: "Journey",
            description: "Unleash collective brilliance",
            icon: "conversion_path",
          },
        ].map((element, index) => (
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              "& .motion": {
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
              },
            }}
          >
            <motion.div
              className="motion"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 * index + 0.5 }}
              viewport={{ once: true }}
            >
              <Icon sx={{ fontSize: "60px!important" }}>{element.icon}</Icon>
              <Box>
                <Typography variant="h6">{element.heading}</Typography>
                <Typography sx={{ opacity: 0.6 }}>
                  {element.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Timeline
        sx={{
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            p: 0,
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator sx={{ mt: "-50px" }}>
            <TimelineDot sx={{ ...featureStyles.timelineDot, opacity: 0 }} />
            <TimelineConnector
              sx={{
                height: "50px",
                background: `linear-gradient(transparent, ${
                  redDark[isDark ? "red10" : "red7"]
                })`,
              }}
            />
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                ...featureStyles.timelineDot,
                color: redDark[isDark ? "red1" : "red12"],
                background: redDark[isDark ? "red10" : "red7"],
              }}
            >
              1
            </TimelineDot>
            <TimelineConnector
              sx={{
                background: `linear-gradient(${
                  redDark[isDark ? "red10" : "red7"]
                } 90%, ${blueDark[isDark ? "blue10" : "blue7"]})`,
              }}
            />
          </TimelineSeparator>
          <TimelineContent ref={startRef}>
            <StartFeature featureStyles={featureStyles} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                ...featureStyles.timelineDot,
                color: blueDark[isDark ? "blue1" : "blue12"],
                background: blueDark[isDark ? "blue10" : "blue7"],
              }}
            >
              2
            </TimelineDot>
            <TimelineConnector
              sx={{
                background: `linear-gradient(${
                  blueDark[isDark ? "blue10" : "blue7"]
                } 90%, ${purpleDark[isDark ? "purple10" : "purple7"]})`,
              }}
            />
          </TimelineSeparator>
          <TimelineContent ref={tasksRef}>
            <AgendaFeature featureStyles={featureStyles} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                ...featureStyles.timelineDot,
                color: purpleDark[isDark ? "purple1" : "purple12"],
                background: purpleDark[isDark ? "purple10" : "purple7"],
              }}
            >
              3
            </TimelineDot>
            <TimelineConnector
              sx={{
                background: `linear-gradient(${
                  purpleDark[isDark ? "purple10" : "purple7"]
                } 90%, ${purpleDark[isDark ? "purple10" : "purple7"]})`,
              }}
            />
          </TimelineSeparator>
          <TimelineContent ref={inventoryRef}>
            <InventoryFeature featureStyles={featureStyles} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
