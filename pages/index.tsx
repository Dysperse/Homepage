import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Masonry from "@mui/lab/Masonry";

function Header() {
  return (
    <Box
      sx={{
        px: { xs: 3, sm: 10 },
        color: "#fff",
        textAlign: { sm: "center" },
        py: 20,
      }}
    >
      <Typography
        className="gradientText"
        variant="h1"
        sx={{
          mb: 8,
          fontWeight: "800",
          fontSize: { xs: "65px", sm: "140px" },
          color: "#c4b5b5",
        }}
      >
        <u>Organize</u>, <u>budget</u> &amp; <u>save</u>.
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "400", mb: 5, fontSize: { xs: "20px", sm: "35px" } }}
      >
        Track your home or dorm&apos;s inventory, expenses and tasks for free
      </Typography>
      <Button
        disableElevation
        variant="contained"
        sx={{
          mt: 2,
          textTransform: "none",
          borderRadius: "50px",
          border: "2px solid #fff!important",
          backgroundColor: "#fff!important",
          color: "#000!important",
          transition: "transform .2s",
          "&:active": {
            transform: "scale(.98)",
            transition: "none",
          },
        }}
        size="large"
      >
        <b>Create&nbsp;my&nbsp;account</b>
        &nbsp;&#8212;&nbsp;it&apos;s&nbsp;free!
      </Button>
      <Button
        disableElevation
        variant="outlined"
        sx={{
          borderWidth: "2px!important",
          ml: { sm: 1 },
          mt: 2,
          textTransform: "none",
          transition: "transform .2s",
          borderRadius: "50px",
          borderColor: "#fff!important",
          color: "#fff!important",
          "&:hover": {
            background: "rgba(255,255,255,.1)",
          },
          "&:active": {
            transform: "scale(.98)",
            transition: "none",
          },
        }}
        size="large"
      >
        Tell me more
      </Button>
    </Box>
  );
}

function Feature({ text, icon }: { text: string; icon: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        p: 2,
        px: 3,
        background: "rgba(255,255,255,.1)",
        borderRadius: 5,
      }}
    >
      <span className="material-symbols-rounded">{icon}</span>
      {text}
    </Box>
  );
}

function FeatureList() {
  return (
    <Box sx={{ px: 10, color: "#fff", textAlign: "left" }}>
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Features you&apos;ll love...
      </Typography>

      <Masonry columns={{ xs: 1, sm: 3 }} sx={{ mt: 3 }} spacing={2}>
        <Feature icon="task_alt" text="To-do, shopping, and custom lists" />
        <Feature
          icon="home"
          text="Compatible with single-family homes, apartments, and student dorms"
        />
        <Feature
          icon="pin_drop"
          text="Build up your inventory by creating rooms and items"
        />
        <Feature
          icon="productivity"
          text="Invite up to 5 people to your home"
        />
        <Feature icon="cloud" text="Access your inventory from any device" />
        <Feature icon="sticky_note_2" text="Add, edit, star & note items" />
        <Feature icon="payments" text="Review your expenses and payments" />
        <Feature
          icon="eco"
          text="Get eco-friendly suggestions to make a positive impact on the planet"
        />
        <Feature icon="palette" text="Customize your dashboard's appearance" />
      </Masonry>
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ mb: 5 }}>
      <Header />
      <FeatureList />
    </Box>
  );
}
