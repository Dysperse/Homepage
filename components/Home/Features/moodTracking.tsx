import {
  Box,
  Card,
  CardContent,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { cyanDark } from "@radix-ui/colors";
import Image from "next/image";

export function MoodTrackingFeature({ featureStyles }: any) {
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
            background: `${cyanDark[isDark ? "cyan3" : "cyan11"]}`,
            ...featureStyles.blur,
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${cyanDark[isDark ? "cyan11" : "cyan5"]}!important`,
          }}
        >
          Understand yourself
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${cyanDark[isDark ? "cyan10" : "cyan7"]}!important`,
          }}
        >
          with Mood Tracking
        </Typography>
      </Box>
      <Typography
        sx={{
          ...featureStyles.featureDescription,
          color: cyanDark[isDark ? "cyan9" : "cyan8"],
        }}
      >
        Complete quick daily check-ins to track your mood and reflect on your
        day. View your mood history to see how your mood has changed over time.
      </Typography>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: "self_improvement",
              name: "Practice basic mindfulness",
              description:
                "Complete 2-minute daily check-ins to track your mood and stress levels",
            },
            {
              icon: "history",
              name: "See your mood history",
              description:
                "View up to 30 days of your mood history to see how your moods have changed over time",
            },
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
                  borderColor: cyanDark[isDark ? "cyan1" : "cyan12"],
                }}
              >
                <Box
                  sx={{
                    background: `${cyanDark[isDark ? "cyan1" : "cyan12"]}`,
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
