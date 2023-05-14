import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import { limeDark } from "@radix-ui/colors";
import Image from "next/image";

export function InventoryFeature({ featureStyles }: any) {
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
            background: `${limeDark["lime11"]}`,
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
            color: `${limeDark["lime5"]}!important`,
          }}
        >
          Scan and track
        </Typography>
        <Typography
          variant="h3"
          className="font-serif"
          sx={{
            ...featureStyles.featureSubTitle,
            color: `${limeDark["lime7"]}!important`,
          }}
        >
          with Inventory
        </Typography>
      </Box>
      <Typography
        sx={{ ...featureStyles.featureDescription, color: limeDark["lime8"] }}
      >
        Keep track of your personal belongings with shareable lists. Easily sync
        with boards so you&apos;ll never forget to buy something again.
      </Typography>

      <Box sx={{ p: 4, px: 8, mt: 4 }}>
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: limeDark["lime12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: limeDark["lime4"] }}
                    gutterBottom
                  >
                    Scan. Create. Share.
                  </Typography>
                  <Typography sx={{ color: limeDark["lime7"] }}>
                    Quickly build your inventory by hovering your camera over
                    your item.
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
                  boxShadow: `-20px -20px 100px ${limeDark["lime12"]}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ ...featureStyles.card, borderColor: limeDark["lime12"] }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: limeDark["lime4"] }}
                    gutterBottom
                  >
                    Know what you have
                  </Typography>
                  <Typography sx={{ color: limeDark["lime7"] }}>
                    Always have your inventory on hand so you&apos;ll never
                    forget what you have.
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
                  boxShadow: `-20px -20px 100px ${limeDark["lime12"]}`,
                }}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {[
            {
              icon: "sticky_note_2",
              name: "Add notes to your items",
              description:
                "Store important information about your items, like serial numbers, dimensions, and more.",
            },
            {
              icon: "lock",
              name: "Keep your inventory private",
              description:
                "Create a private inventory list that only you can see. Keep them public to collaborate with invited members.",
            },
          ].map((feature) => (
            <Grid item xs={12} md={6} key={feature.name}>
              <Card
                sx={{
                  height: "100%",
                  ...featureStyles.card,
                  borderColor: limeDark["lime12"],
                }}
              >
                <Box
                  sx={{
                    background: `${limeDark["lime12"]}`,
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
