import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import { greenDark } from "@radix-ui/colors";
import Image from "next/image";

export function BoardsFeature({ featureStyles }: any) {
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
            background: `${greenDark["green11"]}`,
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
            color: `${greenDark["green5"]}!important`,
          }}
        >
          Plan visually
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${greenDark["green7"]}!important`,
          }}
        >
          with Boards
        </Typography>
      </Box>
      <Typography
        sx={{ ...featureStyles.featureDescription, color: greenDark["green8"] }}
      >
        Organize anything, from shopping lists, to business plans in a
        streamlined way. Share boards with your friends and family.
      </Typography>

      <Box sx={{ p: 4, px: 8, mt: 4 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: "cloud",
              name: "Sync with your Canvas assignments",
              description:
                "Automatically import assignments from your Canvas courses",
            },
            {
              icon: "push_pin",
              name: "Pin frequently used boards",
              description:
                "Create a shared, pinned board for everyone in your group",
            },
            {
              icon: "visibility_off",
              name: "Create secret boards",
              description: "Keep your personal boards hidden from others",
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
                  ...featureStyles.card,
                  borderColor: greenDark["green12"],
                }}
              >
                <Box
                  sx={{
                    background: `${greenDark["green12"]}`,
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
