import { Masonry } from "@mui/lab";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { Emoji } from "../Emoji";
import { mintDark } from "../themes";
import { Preview } from "./Preview";
import { ProfilePicture } from "./ProfilePicture";
import { collectionCategories, collectionViews } from "./categories";
import { SearchField } from "./SearchField";

const Filter = require("bad-words");

export default async function Page({ searchParams }: any) {
  const hasFilters = Object.keys(searchParams).length > 0;
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
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: hasFilters ? undefined : "center",
            justifyContent: "center",
            height: "70vh",
            minHeight: 400,
            pt: 15,
            ...(searchParams.category ||
              (searchParams.defaultView && {
                height: "auto",
              })),
          }}
        >
          {hasFilters ? (
            <>
              <Link href="/templates" passHref>
                <Button sx={{ color: mintDark.mint11, ml: -1 }}>
                  <span className="material-symbols-rounded">west</span> Clear
                  filters
                </Button>
              </Link>
              <Typography
                fontWeight={900}
                variant="h4"
                sx={{ mt: 0.5, mb: 2, fontFamily: "Agrandir" }}
              >
                Search results{" "}
                {searchParams.search && `for "${searchParams.search}"`}
              </Typography>
            </>
          ) : (
            <>
              <Typography
                fontWeight={900}
                variant="h2"
                sx={{ mt: 1, fontFamily: "Agrandir" }}
              >
                {(searchParams.category &&
                  `Browse ${searchParams.category} templates`) ||
                  (searchParams.defaultView &&
                    `Explore ${searchParams.defaultView} templates`) ||
                  "the #dysverse"}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  fontSize: 20,
                  opacity: 0.7,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Browse templates curated by the community to inspire your next
                big idea.
              </Typography>
            </>
          )}
          <SearchField searchParams={searchParams} hasFilters={hasFilters} />
        </Box>
        {!hasFilters && <Categories />}
        {!hasFilters && <Views />}
      </Container>
      <Recent hasFilters={hasFilters} searchParams={searchParams} />
    </Box>
  );
}

async function Recent({ searchParams, hasFilters }: any) {
  const templates = await getTemplates(searchParams);

  return (
    <Container sx={{ mt: hasFilters ? -8 : 2 }}>
      {!hasFilters && (
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Recently added
        </Typography>
      )}
      {templates.length === 0 && (
        <Typography sx={{ mt: 2, opacity: 0.7, textAlign: "center" }}>
          No templates found. Try clearing filters or searching for something
          else.
        </Typography>
      )}
      <Masonry
        sx={{ mt: hasFilters ? 0 : 2 }}
        spacing={2}
        columns={{ xs: 1, sm: 3 }}
      >
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
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        Explore by perspective
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(8, 1fr)",
          },
          gap: 2,
          mt: 2,
        }}
      >
        {Object.keys(collectionViews).map((view) => (
          <Link
            key={view}
            href={`/templates?defaultView=${view}`}
            passHref
            style={{ flex: 1, display: "flex" }}
          >
            <Card
              key={view}
              variant="outlined"
              sx={{
                cursor: "pointer",
                bgcolor: "transparent",
                flex: 1,
                borderRadius: 5,
                p: 3,
              }}
            >
              <span
                style={{ fontSize: 30 }}
                className="material-symbols-rounded"
              >
                {collectionViews[view]}
              </span>
              <Typography
                sx={{ textTransform: "capitalize", pointerEvents: "none" }}
              >
                {view}
              </Typography>
            </Card>
          </Link>
        ))}
      </Box>
    </Container>
  );
}

function Categories() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        Popular categories
      </Typography>
      <Grid container sx={{ mt: 2 }} spacing={2}>
        {collectionCategories.map((category) => (
          <Grid xs={6} sm={12 / 5} key={category.text}>
            <Link
              key={category.text}
              href={`/templates?category=${category.text}`}
              passHref
            >
              <Card
                variant="outlined"
                sx={{
                  cursor: "pointer",
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
                <Typography style={{ pointerEvents: "none" }}>
                  {category.text}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const getTemplates = async (searchParams: any) => {
  const filter = new Filter();
  filter.addWords("drugs", "cocaine", "meth", "weed", "heroin", "crack", "lsd");

  const data = await fetch(
    "https://api.dysperse.com/dysverse?" + new URLSearchParams(searchParams),
    { cache: "no-cache" }
  ).then((res) => res.json());
  return data.filter((template: any) => {
    if (JSON.stringify(template) !== filter.clean(JSON.stringify(template))) {
      return false;
    }
    return true;
  });
};
