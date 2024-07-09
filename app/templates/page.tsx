import { Masonry } from "@mui/lab";
import { Box, Card, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { Emoji } from "../Emoji";
import { SYMBOL_PREVIEW_DATA } from "next/dist/server/api-utils";
import { Preview } from "./Preview";
import { ProfilePicture } from "./ProfilePicture";
import { collectionCategories, collectionViews } from "./categories";

const Filter = require("bad-words");

export default async function Page() {
  return (
    <Box
      sx={{
        "& .MuiCard-root": {
          bgcolor: "hsl(0, 0%, 13%)",
          "&:hover": {
            filter: "brightness(1.1)",
          },
          "&:active": {
            filter: "brightness(0.8)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography
          fontWeight={900}
          variant="h2"
          sx={{ mt: 1, fontFamily: "Agrandir" }}
        >
          the #dysverse
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, fontSize: 20, opacity: 0.7, fontWeight: 700, mb: 2 }}
        >
          Browse templates curated by the community to inspire your next big
          idea.
        </Typography>
      </Box>
      <Categories />
      <Views />
      <Recent />
    </Box>
  );
}

async function Recent() {
  const templates = await getTemplates();
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        Recently added
      </Typography>
      <Masonry sx={{ mt: 2 }} spacing={2} columns={{ xs: 1, sm: 3 }}>
        {templates.map((template: any) => (
          <Link key={template.id} href={`/templates/${template.id}`} passHref>
            <Card
              key={template.id}
              variant="outlined"
              sx={{
                borderRadius: 5,
                cursor: "pointer",
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 1.5,
                  py: 1,
                }}
              >
                <Emoji emoji={template.emoji} size={24} />
                <Box sx={{ mt: -1 }}>
                  <Typography sx={{ fontSize: 24 }} fontWeight={900}>
                    {template.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      textTransform: "uppercase",
                      opacity: 0.7,
                      mt: 0.3,
                      ml: 0.2,
                      fontSize: 12,
                    }}
                  >
                    {template.defaultView}
                  </Typography>
                </Box>
              </Box>
              <Preview view={template.defaultView} labels={template.labels} />
              <ProfilePicture template={template} />
            </Card>
          </Link>
        ))}
      </Masonry>
    </Container>
  );
}

function Views() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        Explore by perspective
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {Object.keys(collectionViews).map((view) => (
          <Card
            key={view}
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              flex: 1,
              borderRadius: 5,
              p: 3,
            }}
          >
            <span style={{ fontSize: 30 }} className="material-symbols-rounded">
              {collectionViews[view]}
            </span>
            <Typography sx={{ textTransform: "capitalize" }}>{view}</Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

function Categories() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        Popular categories
      </Typography>
      <Grid container sx={{ mt: 2 }} spacing={2}>
        {collectionCategories.map((category) => (
          <Grid xs={2} sm={3} key={category.text}>
            <Card
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                borderRadius: 5,
                p: 3,
              }}
            >
              <span
                style={{ fontSize: 30 }}
                className="material-symbols-rounded"
              >
                {category.icon}
              </span>
              <Typography>{category.text}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const getTemplates = async () => {
  const filter = new Filter();
  filter.addWords("drugs", "cocaine", "meth", "weed", "heroin", "crack", "lsd");

  const data = await fetch("https://api.dysperse.com/dysverse").then((res) =>
    res.json()
  );
  return data.filter((template: any) => {
    if (JSON.stringify(template) !== filter.clean(JSON.stringify(template))) {
      return false;
    }
    return true;
  });
};
