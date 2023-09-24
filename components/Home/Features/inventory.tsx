import {
  Box,
  Card,
  CardContent,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { limeDark, purpleDark } from "@radix-ui/colors";
import Image from "next/image";

export function InventoryFeature({ featureStyles }: any) {
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
            color: `${purpleDark[isDark ? "purple10" : "purple7"]}!important`,
          }}
        >
          <Icon
            sx={{
              fontSize: "inherit!important",
            }}
          >
            inventory_2
          </Icon>
          Inventory
        </Typography>
        <Typography
          sx={{
            ...featureStyles.featupurpleescription,
            color: purpleDark[isDark ? "purple9" : "purple8"],
          }}
        >
          View your to-do list and schedule tasks by time, so you can stay on
          track and make the most of your day.
        </Typography>
      </Box>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: limeDark[isDark ? "lime1" : "lime12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: limeDark[isDark ? "lime11" : "lime4"],
                    }}
                    gutterBottom
                  >
                    Scan. Create. Share.
                  </Typography>
                  <Typography
                    sx={{ color: limeDark[isDark ? "lime10" : "lime7"] }}
                  >
                    Quickly build your inventory by hovering your camera over
                    your item.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/inventory/createItem.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    limeDark[isDark ? "lime1" : "lime12"]
                  }`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: limeDark[isDark ? "lime1" : "lime12"],
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: limeDark[isDark ? "lime11" : "lime4"],
                    }}
                    gutterBottom
                  >
                    Know what you have
                  </Typography>
                  <Typography
                    sx={{ color: limeDark[isDark ? "lime10" : "lime7"] }}
                  >
                    Always have your inventory on hand so you&apos;ll never
                    forget what you have.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/inventory/list${isDark ? "-dark" : ""}.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${
                    limeDark[isDark ? "lime1" : "lime12"]
                  }`,
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
                  borderColor: limeDark[isDark ? "lime1" : "lime12"],
                }}
              >
                <Box
                  sx={{
                    background: `${limeDark[isDark ? "lime1" : "lime12"]}`,
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
