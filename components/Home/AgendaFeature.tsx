import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { redDark } from "@radix-ui/colors";
import Image from "next/image";

export function AgendaFeature({ featureStyles }: any) {
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
            background: `${redDark["red11"]}`,
            opacity: 0.2,
            zIndex: -1,
            width: 200,
            height: 200,
            borderRadius: 999,
            filter: "blur(30px)",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${redDark["red5"]}!important`,
          }}
        >
          Schedule anything
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${redDark["red7"]}!important`,
          }}
        >
          with Agenda
        </Typography>
      </Box>
      <Typography
        sx={{
          ...featureStyles.featureDescription,
          color: redDark["red8"],
        }}
      >
        View your to-do list and schedule tasks by time, so you can stay on
        track and make the most of your day.
      </Typography>

      <Box sx={{ p: 4, px: 8, mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ ...featureStyles.card, borderColor: redDark["red12"] }}>
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: redDark["red4"] }}
                    gutterBottom
                  >
                    See unfinished tasks
                  </Typography>
                  <Typography sx={{ color: redDark["red7"] }}>
                    You can view unfinished tasks in your backlog
                  </Typography>
                </Box>
              </CardContent>
              <Box
                sx={{
                  background: `${redDark["red12"]}`,
                  ...featureStyles.blur,
                }}
              />
              <Image
                width={400}
                height={300}
                src="/features/agenda/Backlog1.png"
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  borderColor: redDark["red12"],
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ ...featureStyles.card, borderColor: redDark["red12"] }}>
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: redDark["red4"] }}
                    gutterBottom
                  >
                    Make it yours
                  </Typography>
                  <Typography sx={{ color: redDark["red7"] }}>
                    Prioritize, color-code, and attach files/emojis to your
                    tasks
                  </Typography>
                </Box>
              </CardContent>
              <Box
                sx={{
                  background: `${redDark["red12"]}`,
                  ...featureStyles.blur,
                }}
              />
              <Image
                width={400}
                height={300}
                src="/features/boards/emojis.png?"
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  borderColor: redDark["red12"],
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
