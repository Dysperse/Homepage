import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import { cyanDark } from "@radix-ui/colors";
import Image from "next/image";

export function MoodTrackingFeature({ featureStyles }: any) {
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
            background: `${cyanDark["cyan11"]}`,
            ...featureStyles.blur,
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${cyanDark["cyan5"]}!important`,
          }}
        >
          Understand yourself
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${cyanDark["cyan7"]}!important`,
          }}
        >
          with Mood Tracking
        </Typography>
      </Box>
      <Typography
        sx={{ ...featureStyles.featureDescription, color: cyanDark["cyan8"] }}
      >
        Complete quick daily check-ins to track your mood and reflect on your
        day. View your mood history to see how your mood has changed over time.
      </Typography>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: cyanDark["cyan12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: cyanDark["cyan4"] }}
                    gutterBottom
                  >
                    Practice basic mindfulness
                  </Typography>
                  <Typography sx={{ color: cyanDark["cyan7"] }}>
                    Complete 2-minute daily check-ins to track your mood and
                    stress levels
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src="/features/agenda/Backlog1.png"
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${cyanDark["cyan12"]}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: cyanDark["cyan12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: cyanDark["cyan4"] }}
                    gutterBottom
                  >
                    See your mood history
                  </Typography>
                  <Typography sx={{ color: cyanDark["cyan7"] }}>
                    View up to 30 days of your mood history to see how your
                    moods have changed over time
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src="/features/agenda/Backlog1.png"
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${cyanDark["cyan12"]}`,
                }}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {[
            {
              icon: "lock",
              name: "Only you can see your mood history",
              description:
                "Your mood history is private and only visible to you",
            },
            {
              icon: "notifications",
              name: "Notification reminders",
              description:
                "We'll check in with you during the day to see how you're feeling",
            },
          ].map((feature) => (
            <Grid item xs={12} md={6} key={feature.name}>
              <Card
                sx={{
                  height: "100%",
                  ...featureStyles.card,
                  borderColor: cyanDark["cyan12"],
                }}
              >
                <Box
                  sx={{
                    background: `${cyanDark["cyan12"]}`,
                    ...featureStyles.blur,
                    opacity: 0.4,
                  }}
                />
                <CardContent sx={{ zIndex: 9, position: "relative" }}>
                  <Typography sx={featureStyles.textDescriptionTitle}>
                    <Icon>{feature.icon}</Icon> {feature.name}
                  </Typography>
                  <Typography sx={featureStyles.textDescriptionParagraph}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
