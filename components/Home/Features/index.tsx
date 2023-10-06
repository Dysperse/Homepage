import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Icon,
  InputAdornment,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueDark, purpleDark, redDark } from "@radix-ui/colors";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useCallback, useDeferredValue, useRef, useState } from "react";
import { AgendaFeature } from "./agenda";
import { InventoryFeature } from "./inventory";
import { StartFeature } from "./start";

export function CardAnimation({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}

function Difference() {
  return (
    <>
      <Typography
        variant="h2"
        className="font-serif"
        sx={{
          background: "linear-gradient(#fff 0%, #aaa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Another productivity app?
      </Typography>
      <Typography sx={{ opacity: 0.6, mt: 1 }} variant="h6">
        Think again
      </Typography>
      <Grid
        container
        sx={{
          mt: 2,
          mb: 4,
          mx: { sm: -1 },
          "& .MuiGrid-root": {
            p: 1,
          },
          "& .grid-item": {
            p: 2,
            border: `2px solid rgba(255,255,255,.2)`,
            borderRadius: 5,
            width: "100%",
          },
          "& .MuiChip-root": {
            fontWeight: 900,
          },
        }}
      >
        <Grid xs={12} sm={6}>
          <Box className="grid-item">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 1,
              }}
            >
              <Chip label="BEFORE" size="small" />
              <Typography variant="h6">Other apps</Typography>
            </Box>
            {[
              ["Endless to-do lists", "Never check anything off"],
              ["Predefined format", "Limited options for flexibility"],
              ["Forgotten tasks", "No organization"],
              ["Too many tools", "Calendars, to-do lists, and spreadsheets"],
              ["Hard to switch", "Limited connections with other apps"],
            ].map((bullet, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileInView={{ opacity: 1 }}
                key={bullet[0]}
              >
                <ListItem sx={{ gap: 2, p: 0, alignItems: "start", py: 0.5 }}>
                  <Icon sx={{ mt: 0.5 }}>radio_button_unchecked</Icon>
                  <ListItemText
                    primary={
                      <>
                        <b>{bullet[0]}</b>
                        {" - "}
                        <span style={{ opacity: 0.6 }}>{bullet[1]}</span>
                      </>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </Box>
        </Grid>
        <Grid xs={12} sm={6}>
          <Box className="grid-item" sx={{ borderColor: "#fff!important" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 1,
              }}
            >
              <Chip label="AFTER" size="small" />
              <Typography variant="h6">Dysperse</Typography>
            </Box>
            {[
              ["Burnout? Never.", "Only see what you need to work on"],
              ["Customizable", "35+ themes, multiple layouts, & more"],
              ["Forgotten tasks", "No organization"],
              [
                "Optional widgets",
                "Carefully crafted widgets for your session",
              ],
              [
                "Easy switch",
                "Connect with your favorite apps and import your data",
              ],
              [
                "Forget nothing",
                "Customizable, repeating notifications for your most important tasks",
              ],
            ].map((bullet, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileInView={{ opacity: 1 }}
                key={bullet[0]}
              >
                <ListItem sx={{ gap: 2, p: 0, alignItems: "start", py: 0.5 }}>
                  <Icon sx={{ mt: 0.5 }}>radio_button_unchecked</Icon>
                  <ListItemText
                    primary={
                      <>
                        <b>{bullet[0]}</b>
                        {" - "}
                        <span style={{ opacity: 0.6 }}>{bullet[1]}</span>
                      </>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

function Elements() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <>
      <Typography
        variant="h2"
        className="font-serif"
        sx={{
          background: "linear-gradient(#fff 0%, #aaa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        The four elements.
      </Typography>
      <Typography sx={{ mt: 1, opacity: 0.6 }}>
        Core principles that drive Dysperse&apos;s design.
      </Typography>
      <Grid
        container
        sx={{
          // border: "2px solid",
          p: 2,
          boxShadow: "inset 0px 0px 0px 2px rgba(255,255,255,.1)",
          borderRadius: 5,
          mt: 2,
          position: "relative",
          "& *": {
            pointerEvents: "none",
          },
          overflow: "hidden",
        }}
        onMouseMove={(e) => {
          setPosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          });
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Box
          sx={{
            opacity: show ? 1 : 0,
            position: "absolute",
            top: position.y,
            left: position.x,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            transition: "opacity .2s",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            background: "#fff",
            filter: "blur(100px)",
          }}
        />
        {[
          {
            heading: "Instinct",
            description: "Engineered for minimal effort",
            icon: "pan_tool_alt",
          },
          {
            heading: "Adaptation",
            description: "Flexible for any personality",
            icon: "airwave",
          },
          {
            heading: "Utility",
            description: "Conveniency, not feature bloat",
            icon: "auto_awesome_motion",
          },
          {
            heading: "Journey",
            description: "Unleash collective brilliance",
            icon: "conversion_path",
          },
        ].map((element, index) => (
          <Grid
            key={element.heading}
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
              transition={{ delay: 0.2 * index + 0.2 }}
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
    </>
  );
}

function Extras({ featureStyles }: any) {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 2,
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} md={4}>
            <CardAnimation>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: "#303030",
                  pb: 0,
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
                      filter: "invert(1)",
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
            </CardAnimation>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardAnimation>
              <Encryption featureStyles={featureStyles} />
            </CardAnimation>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }} />
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} md={8}>
            <CardAnimation>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: "#303030",
                  pb: 0,
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
            </CardAnimation>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardAnimation>
              <Card
                sx={{
                  ...featureStyles.card,
                  borderColor: "#303030",
                  pb: 0,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Collaborative by default
                  </Typography>
                  <Typography>Invite up to 5 people to your group</Typography>
                </CardContent>
              </Card>
            </CardAnimation>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

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
  const styles = {
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    border: `1px solid #303030`,
    height: "100%",
    borderRadius: 8,
    p: 3,
  };

  return (
    <Card
      sx={{
        ...featureStyles.card,
        pb: 0,
        borderColor: "#303030",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          AES-256 bit encryption
        </Typography>
        <Typography>
          Dysperse encrypts all your user data with AES-256 GCM, zero-access
          encryption.
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ mt: 0 }}>
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
                          color: "#fff",
                        }}
                      >
                        check_circle
                      </Icon>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  sx: {
                    background: `hsl(240,11%,10%)`,
                    px: 2,
                    py: 1,
                    color: "#fff",
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
                  background: `hsl(240,11%,10%)`,
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

  const featureStyles = {
    featureTitle: {},
    timelineConnector: {
      width: "4px",
      ml: "0px",
      borderRadius: 9,
    },
    timelineDot: {
      width: 35,
      height: 35,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#303030",
    },
    featureSubTitle: {
      fontSize: { xs: "3.5rem", sm: "4rem" },
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
      border: "2px solid",
      height: "100%",
      borderRadius: 8,
      boxShadow: "none",
      position: "relative",
      color: "white",
      "& .MuiCardContent-root": {
        p: 4,
      },
    },
    cardImage: {
      height: "auto",
      zIndex: 9,
      position: { xs: "static", sm: "absolute" },
      float: "right",
      borderTopLeftRadius: "28px",
      maxWidth: "calc(100% - 40px)",
      width: "400px",
      bottom: 0,
      right: 0,
    },
  };

  const buttonStyles = (isActive: boolean) => ({
    "& .MuiIcon-root, & .MuiIcon-root *": {
      transition: "all .2s!important",
    },
    color: "#ccc",

    ...(isActive && {
      background: "rgba(255,255,255,.1)!important",
      color: "#fff",
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
      fixed
      sx={{
        maxWidth: "100vw",
      }}
    >
      {/* Separate the content below the header */}
      <Box
        sx={{
          mb: 10,
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      />

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
          background: showToolbar ? "rgba(0,0,0,0.5)" : "transparent",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          height: "55px",
          overflowX: "scroll",
          overflowY: "hidden",
          px: { sm: 5 },
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            height: "55px!important",
            minHeight: "55px!important",
            "& *": {
              flexShrink: 0,
            },
            gap: 2.5,
          }}
        >
          {[
            {
              ref: startRef,
              id: "startTrigger",
              icon: "change_history",
              text: "Start",
            },
            {
              ref: tasksRef,
              id: "tasksTrigger",
              icon: "check_circle",
              text: "Tasks",
            },
            {
              ref: inventoryRef,
              id: "inventoryTrigger",
              icon: "inventory_2",
              text: "Inventory",
            },
          ].map((item) => (
            <Button
              key={item.id}
              id={item.id}
              size="small"
              sx={buttonStyles(activeFeature === item.text.toLowerCase())}
              onClick={() => handleScroll(item.ref)}
            >
              <Icon
                sx={{
                  transition: "all .4s!important",
                  fontSize: "30px!important",
                }}
              >
                {item.icon}
              </Icon>
              {item.text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box sx={{ mb: 10 }} />
      <Difference />
      <Elements />
      <Timeline
        sx={{
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            p: 0,
            flex: 0,
          },
          "& .MuiTimelineContent-root": {
            p: 0,
            mb: 3,
          },
          m: "0!important",
        }}
      >
        <TimelineItem>
          <TimelineSeparator sx={{ mt: "-50px" }}>
            <TimelineDot sx={{ ...featureStyles.timelineDot, opacity: 0 }} />
            <TimelineConnector
              sx={{
                ...featureStyles.timelineConnector,
                height: "50px",
                background: `linear-gradient(transparent, ${redDark.red10})`,
              }}
            />
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                ...featureStyles.timelineDot,
                color: redDark.red1,
                background: redDark.red10,
              }}
            >
              1
            </TimelineDot>
            <TimelineConnector
              sx={{
                ...featureStyles.timelineConnector,
                background: `linear-gradient(${redDark.red10} 80%, ${blueDark.blue10})`,
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
                color: blueDark.blue1,
                background: blueDark.blue10,
              }}
            >
              2
            </TimelineDot>
            <TimelineConnector
              sx={{
                ...featureStyles.timelineConnector,
                background: `linear-gradient(${blueDark.blue10} 80%, ${purpleDark.purple10})`,
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
                color: purpleDark.purple1,
                background: purpleDark.purple10,
              }}
            >
              3
            </TimelineDot>
            <TimelineConnector
              sx={{
                ...featureStyles.timelineConnector,
                background: `linear-gradient(${purpleDark.purple10} 80%, transparent)`,
              }}
            />
          </TimelineSeparator>
          <TimelineContent ref={inventoryRef}>
            <InventoryFeature featureStyles={featureStyles} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Extras featureStyles={featureStyles} />
    </Container>
  );
}
