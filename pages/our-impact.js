import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ImpactSection({ title, description }) {
  return (
    <Card
      sx={{
        mt: 3,
        p: 1,
        boxShadow: 0,
        background: "rgba(200,200,200,.3)",
        borderRadius: 5
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Render() {
  return (
    <Box sx={{ px: { xs: 5, sm: 17 }, pb: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4, mt: 8 }}>
        Our <span style={{ color: green[700] }}>impact.</span>
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        At Smartlist, our goal is to provide quality resources to the world.
        Read more to learn how our products attempt to help others.
      </Typography>
      <ImpactSection
        title="Smartlist"
        description="Smartlist helps people save money by keeping track of their finances, and inventory. Smartlist lets you plan meals, reminds you of home maintenance, as well as creating and sharing lists"
      />
      <ImpactSection
        title="Availability"
        description="Availability helps you find the best time for a group to get together. It's a free survey tool that is quick and easy to use"
      />
      <ImpactSection
        title="Collaborate"
        description="Collaborate helps people plan events in real-time. "
      />
      <ImpactSection
        title="Dressing"
        description="Dressing helps people find clothes fitting the right size, compatible with every store"
      />
    </Box>
  );
}
