import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { redDark } from "@radix-ui/colors";
import Image from "next/image";

export function AgendaFeature({ featureStyles }: any) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: 200,
          my: 4,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: `${redDark[isDark ? "red2" : "red11"]}`,
            ...featureStyles.blur,
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${redDark[isDark ? "red11" : "red5"]}!important`,
          }}
        >
          Schedule anything
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${redDark[isDark ? "red10" : "red7"]}!important`,
          }}
        >
          with Agenda
        </Typography>
      </Box>
      <Typography
        sx={{
          ...featureStyles.featureDescription,
          color: redDark[isDark ? "red9" : "red8"],
        }}
      >
        View your to-do list and schedule tasks by time, so you can stay on
        track and make the most of your day.
      </Typography>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: redDark[isDark ? "red1" : "red12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: redDark[isDark ? "red11" : "red4"],
                    }}
                    gutterBottom
                  >
                    Make it yours
                  </Typography>
                  <Typography
                    sx={{ color: redDark[isDark ? "red10" : "red7"] }}
                  >
                    Prioritize, color-code, and attach files/emojis to your
                    tasks
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/boards/emojis${isDark ? "-dark" : ""}.png`}
                alt="features"
                style={{
                  position: "sticky",
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    redDark[isDark ? "red1" : "red12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: redDark[isDark ? "red1" : "red12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: redDark[isDark ? "red11" : "red4"],
                    }}
                    gutterBottom
                  >
                    See unfinished tasks
                  </Typography>
                  <Typography
                    sx={{ color: redDark[isDark ? "red10" : "red7"] }}
                  >
                    You can view unfinished tasks in your backlog
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/agenda/Backlog${isDark ? "-dark" : ""}.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    redDark[isDark ? "red1" : "red12"]
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
