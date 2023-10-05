import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { blue, blueDark } from "@radix-ui/colors";
import Image from "next/image";

export function AgendaFeature({ featureStyles }: any) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const colors = isDark ? blueDark : blue;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            background: `linear-gradient(${colors.blue8}, ${colors.blue11})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Icon
            sx={{
              fontSize: "inherit!important",
            }}
          >
            check_circle
          </Icon>
          Tasks
        </Typography>
      </Box>
      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                    }}
                    gutterBottom
                  >
                    Make it yours
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Prioritize, color-code, and attach files/emojis to your
                    tasks
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Customize.png`}
                alt="features"
                style={{
                  position: "sticky",
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                    }}
                    gutterBottom
                  >
                    Burnout? Never.
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Turn on Focus Mode to blur unimportant tasks and stay
                    focused on what matters
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Focus.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                    }}
                    gutterBottom
                  >
                    Sync with your favorite apps
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Integrate your tasks with Google Calendar, Canvas LMS, and
                    more.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Integrations.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                    gutterBottom
                  >
                    Perspectives{" "}
                    <Chip
                      size="small"
                      sx={{
                        background: `linear-gradient(#00ff87, #60efff)`,
                        color: "#000!important",
                      }}
                      label="NEW"
                    />
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Redefine the way you view your to-do list with flexible
                    views
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Perspectives.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                    }}
                    gutterBottom
                  >
                    Find what you need. Fast.
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Quickly search for anything in under 5 seconds with
                    ⌘&nbsp;+&nbsp;K
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/CommandPalette.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.blue2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.blue11,
                    }}
                    gutterBottom
                  >
                    Organize anything
                  </Typography>
                  <Typography sx={{ color: colors.blue11, opacity: 0.8 }}>
                    Create kanban-style boards to organize items by your own
                    categories
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Boards.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    blueDark[isDark ? "blue1" : "blue12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
