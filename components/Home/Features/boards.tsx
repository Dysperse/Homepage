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
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: greenDark["green12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: greenDark["green4"] }}
                    gutterBottom
                  >
                    Tap. Create. Share.
                  </Typography>
                  <Typography sx={{ color: greenDark["green7"] }}>
                    It&apos;s that easy to create a board. Explore over 25+
                    templates to fit your needs
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
                  boxShadow: `-20px -20px 100px ${greenDark["green12"]}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: greenDark["green12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: greenDark["green4"] }}
                    gutterBottom
                  >
                    Plan literally anything
                  </Typography>
                  <Typography sx={{ color: greenDark["green7"] }}>
                    From your next vacation to your next business plan, boards
                    are a super flexible way to plan anything
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
                  boxShadow: `-20px -20px 100px ${greenDark["green12"]}`,
                }}
              />
            </Card>
          </Grid>
        </Grid>
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
                "Pin a frequently-accessed board for everybody in your group",
            },
          ].map((feature) => (
            <Grid item xs={12} md={6} key={feature.name}>
              <Card
                sx={{
                  height: "100%",
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
