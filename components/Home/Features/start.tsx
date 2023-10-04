import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { red, redDark } from "@radix-ui/colors";
import Image from "next/image";

export function StartFeature({ featureStyles }: any) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const colors = isDark ? redDark : red;

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
            background: `linear-gradient(${colors.red8}, ${colors.red11})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Icon
            sx={{
              fontSize: "inherit!important",
            }}
          >
            change_history
          </Icon>
          Start
        </Typography>
      </Box>

      <Box sx={{ mt: 4, mb: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.red2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.red11,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                    gutterBottom
                  >
                    Availability{" "}
                    <Chip
                      size="small"
                      sx={{
                        background: `linear-gradient(#00ff87, #60efff)`,
                        color: "#000!important",
                      }}
                      label="BETA"
                    />
                  </Typography>
                  <Typography sx={{ color: colors.red11, opacity: 0.8 }}>
                    Find the best time to meet in under three clicks.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Availability.png`}
                alt="features"
                style={{
                  position: "sticky",
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${colors.red1}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.red2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.red11,
                    }}
                    gutterBottom
                  >
                    Update your status
                  </Typography>
                  <Typography sx={{ color: colors.red11, opacity: 0.8 }}>
                    Let everyone know what you&apos;re up to.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Status.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${colors.red1}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.red2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.red11,
                    }}
                    gutterBottom
                  >
                    Never miss a birthday
                  </Typography>
                  <Typography sx={{ color: colors.red11, opacity: 0.8 }}>
                    Get notified when it&apos;s someone&apos;s birthday. Works
                    seamlessly with Tasks.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Birthday.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${colors.red1}`,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                ...featureStyles.card,
                borderColor: colors.red2,
              }}
            >
              <CardContent>
                <Box sx={{ position: "relative", zIndex: 99 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: colors.red11,
                    }}
                    gutterBottom
                  >
                    Complete your productivity profile
                  </Typography>
                  <Typography sx={{ color: colors.red11, opacity: 0.8 }}>
                    Display useful information about yourself, such as working
                    hours.
                  </Typography>
                </Box>
              </CardContent>
              <Image
                width={400}
                height={300}
                src={`/features/Profile.png`}
                alt="features"
                style={{
                  ...(featureStyles.cardImage as any),
                  boxShadow: `-20px -20px 100px ${colors.red1}`,
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
