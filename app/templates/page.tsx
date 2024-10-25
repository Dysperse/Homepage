import { Masonry } from "@mui/lab";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Emoji } from "../Emoji";
import { mintDark } from "../themes";
import { Background } from "./Background";
import { collectionCategories, collectionViews } from "./categories";
import { ProfilePicture } from "./ProfilePicture";
import { SearchField } from "./SearchField";

const Filter = require("bad-words");
export const revalidate = 60; // 1 hour

export async function generateMetadata({
  searchParams,
}: any): Promise<Metadata> {
  const defaultView = searchParams.defaultView;
  const category = searchParams.category;

  const title = defaultView
    ? `Explore ${defaultView} templates • Dysperse`
    : category
    ? `Browse ${category} templates • Dysperse`
    : "Explore the #dysverse • Dysperse";
  return {
    title,
    description:
      "Browse templates curated by the community to inspire your next big idea.",
    keywords: ["Dysperse", "Dysverse", "templates"],
    openGraph: {
      images: ["/meta/dysverse.png"],
      title,
      description:
        "Browse templates curated by the community to inspire your next big idea.",
    },
  };
}

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
      <Box
        sx={{
          position: "relative",
          justifyContent: "center",
          height: hasFilters ? "50vh" : "100vh",
          minHeight: 400,
          borderBottom: `2px solid hsl(0, 0%, 20%)`,
          pt: 10,
          pb: 5,
          ...(searchParams.category ||
            (searchParams.defaultView && {
              height: "auto",
            })),
        }}
      >
        <Background />
        <Container
          style={{
            height: "100%",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: hasFilters ? undefined : "center",
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
                sx={{ mt: 0.5, mb: 2, fontFamily: "Agrandir", zIndex: 99 }}
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
                sx={{ mt: 1, fontFamily: "Agrandir", zIndex: 1 }}
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
        </Container>
      </Box>

      {!hasFilters && <Categories />}
      {!hasFilters && <Views />}
      <Recent hasFilters={hasFilters} searchParams={searchParams} />

      {!hasFilters && (
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
              mb: 8,
              fontWeight: 700,
              opacity: 0.7,
            }}
          >
            Can&apos;t find what you&apos;re looking for? Join #dysperse to
            build what you need.
          </Box>
        </Container>
      )}
    </Box>
  );
}

async function Recent({ searchParams, hasFilters }: any) {
  const templates = await getTemplates(searchParams);

  return (
    <Container sx={{ mt: hasFilters ? -8 : 8 }}>
      {!hasFilters && (
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Recently added
        </Typography>
      )}
      {templates.length === 0 && (
        <Typography
          fontWeight={900}
          sx={{
            mt: 2,
            mb: 10,
            fontSize: 20,
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          No templates found. Try clearing filters or searching for something
          else.
        </Typography>
      )}
      <Masonry
        sx={{ mt: hasFilters ? 20 : 2 }}
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
              <Image
                alt={`Preview of ${template.name}`}
                src={`https://og.dysperse.com/${template.id}?hideHeader=true`}
                width={1200}
                height={630}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1200/630",
                  borderRadius: 20,
                }}
              />
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
    <Container sx={{ mt: 5 }}>
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
