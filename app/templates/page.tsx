import { Masonry } from "@mui/lab";
import { Box, Card, Chip, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Emoji } from "../Emoji";

const collectionCategories = [
  { text: "Home", icon: "home" },
  { text: "Business", icon: "business" },
  { text: "Education", icon: "school" },
  { text: "Movies & TV", icon: "theaters" },
  { text: "Food & Drink", icon: "lunch_dining" },
  { text: "Sports & Fitness", icon: "exercise" },
  { text: "Meet-ups", icon: "celebration" },
  { text: "Travel", icon: "flight" },
  { text: "Holidays", icon: "celebration" },
];

const collectionViews: any = {
  planner: "transition_slide",
  kanban: "view_kanban",
  stream: "whatshot",
  grid: "view_cozy",
  workload: "exercise",
  list: "view_agenda",
  matrix: "target",
  calendar: "calendar_today",
};

export default async function Page() {
  return (
    <>
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
    </>
  );
}

async function Recent() {
  const templates = await getTemplates();
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        Recently added
      </Typography>
      <Masonry sx={{ mt: 2 }} spacing={2} columns={3}>
        {templates.map((template) => (
          <Card
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              borderRadius: 5,
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              {template.defaultView}
            </Typography>
            <Typography sx={{ fontSize: 30 }}>{template.name}</Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 1,
                flexWrap: "wrap",
              }}
            >
              {template.labels.map((tag: any) => (
                <Chip
                  size="small"
                  label={tag.name}
                  icon={<Emoji emoji={tag.emoji} />}
                />
              ))}
            </Box>
          </Card>
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
          <Grid xs={2} sm={4}>
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
  const data = await fetch("https://api.dysperse.com/dysverse").then((res) =>
    res.json()
  );
  return data;
};

