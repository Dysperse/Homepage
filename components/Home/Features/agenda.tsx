import {
  Box,
  Card,
  CardContent,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { blueDark } from "@radix-ui/colors";
import Image from "next/image";

export function AgendaFeature({ featureStyles }: any) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

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
            color: `${blueDark[isDark ? "blue10" : "blue7"]}!important`,
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
        <Typography
          sx={{
            ...featureStyles.featublueescription,
            color: blueDark[isDark ? "blue9" : "blue8"],
          }}
        >
          View your to-do list and schedule tasks by time, so you can stay on
          track and make the most of your day.
        </Typography>
      </Box>
      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: blueDark[isDark ? "blue1" : "blue12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: blueDark[isDark ? "blue11" : "blue4"],
                    }}
                    gutterBottom
                  >
                    Make it yours
                  </Typography>
                  <Typography
                    sx={{ color: blueDark[isDark ? "blue10" : "blue7"] }}
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
                borderColor: blueDark[isDark ? "blue1" : "blue12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: blueDark[isDark ? "blue11" : "blue4"],
                    }}
                    gutterBottom
                  >
                    See unfinished tasks
                  </Typography>
                  <Typography
                    sx={{ color: blueDark[isDark ? "blue10" : "blue7"] }}
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
