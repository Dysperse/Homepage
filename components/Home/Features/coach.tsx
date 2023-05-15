import {
  Box,
  Card,
  CardContent,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { purpleDark } from "@radix-ui/colors";

export function CoachFeature({ featureStyles }: any) {
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
            background: `${purpleDark[isDark ? "purple3" : "purple11"]}`,
            ...featureStyles.blur,
          }}
        />
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureTitle,
            color: `${purpleDark[isDark ? "purple11" : "purple5"]}!important`,
          }}
        >
          Achieve more
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${purpleDark[isDark ? "purple10" : "purple7"]}!important`,
          }}
        >
          with Coach
        </Typography>
      </Box>
      <Typography
        sx={{
          ...featureStyles.featureDescription,
          color: purpleDark[isDark ? "purple9" : "purple8"],
        }}
      >
        Achieve personal goals by adding small tasks to enrich your daily
        routine. Receive daily reminders to nudge yourself.
      </Typography>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: "ios_share",
              name: "Share your progress",
              description:
                "Share your progress with your friends via your favorite social media",
            },
            {
              icon: "notifications",
              name: "Daily reminders",
              description: "Receive daily nudges to work towards goals",
            },
            {
              icon: "local_fire_department",
              name: "Coach streak",
              description: "Maintain a streak to keep yourself motivated",
            },
            {
              icon: "view_column",
              name: "Adapt to your needs",
              description: "Sort columns by priority, due date, or name",
            },
          ].map((feature) => (
            <Grid item xs={12} md={6} key={feature.name}>
              <Card
                sx={{
                  ...{ ...featureStyles.card },
                  borderColor: purpleDark[isDark ? "purple1" : "purple12"],
                }}
              >
                <Box
                  sx={{
                    background: `${
                      purpleDark[isDark ? "purple2" : "purple12"]
                    }`,
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
