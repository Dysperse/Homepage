import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { green } from "@mui/material/colors";
import Parallax from "parallax-js";

function FeatureCard({ title, image }) {
  return (
    <Grid item xs={12} sm={4} style={{ display: "flex" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          borderRadius: "28px",
          background: "rgba(200,200,200,.3)"
        }}
        elevation={0}
      >
        <CardContent>
          <img
            src={image}
            style={{ borderRadius: "28px", width: "100%" }}
            alt="Feature"
          />
          <Typography
            variant="h6"
            sx={{ textAlign: "left", mt: 2, ml: 1, fontWeight: "500" }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function SecuritySection({ heading, subheading, content }) {
  return (
    <Box sx={{ px: { xs: 5, sm: 14 }, py: 4 }}>
      <Typography
        gutterBottom
        variant="h4"
        sx={{ my: 1, mb: 1, fontWeight: "800" }}
      >
        {heading}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ my: 1, mb: 3 }}>
        {subheading}
      </Typography>
      <Grid container spacing={2}>
        {content}
      </Grid>
    </Box>
  );
}

function ResourceSection({ title, heading, subheading, features }) {
  return (
    <Box sx={{ px: { xs: 5, sm: 14 }, py: 4 }}>
      {/* <Chip
        label={title}
        sx={{
          px: 2,
          textTransform: "uppercase",
          fontSize: "11px",
          background: "#123456",
          mb: 1,
          color: "#fff",
          py: 0.5,
          height: "auto"
        }}
      /> */}
      <Typography variant="h4" sx={{ my: 1, mb: 1, fontWeight: "800" }}>
        {heading}
      </Typography>
      <Typography variant="h6" sx={{ my: 1, mb: 3 }}>
        {subheading}
      </Typography>
      <Grid container spacing={2}>
        {features}
      </Grid>
    </Box>
  );
}

function Header() {
  if (typeof window !== "undefined") {
    let render = false;
    setInterval(() => {
      if (!render && document.getElementById("scene")) {
        const scene = document.getElementById("scene");
        new Parallax(scene, {
          pointerEvents: true,
          relativeInput: true
        });
        render = true;
      }
    }, 200);
    window.addEventListener("load", () => {
      const scene = document.getElementById("scene");
      new Parallax(scene, {
        pointerEvents: true,
        relativeInput: true
      });
      setTimeout(() => {
        const scene = document.getElementById("scene");
        new Parallax(scene, {
          pointerEvents: true,
          relativeInput: true
        });
      }, 1000);
    });
  }
  return (
    <Grid container sx={{ width: "100%" }} id="scene">
      <Grid
        data-depth="0.2"
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          alignItems: "center",
          p: { xs: 6, sm: 15 }
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              pt: 4,
              fontSize: { xs: "50px", sm: "70px" },
              pointerEvents: "unset!important",
              cursor: "unset!important",
              fontFamily: `'DM Serif Display', serif !important`,
              textAlign: "left",
              "& *": {
                fontFamily: `'DM Serif Display', serif !important`
              }
            }}
          >
            Make more from what you&nbsp;
            <span className="disableFont" style={{ color: green[600] }}>
              earn.
            </span>
          </Typography>
          <Typography sx={{ mb: 3, pt: 4, textAlign: "left" }}>
            <span role="img" aria-label="Wave emoji">
              👋
            </span>{" "}
            Hey! We're Smartlist, a nonprofit, and we provide quality resources
            aimed at helping people saving money. Our apps are free-of-cost and
            available to everyone!
          </Typography>
          <Button
            href="https://login.smartlist.tech/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
            target="_blank"
            size="large"
            variant="contained"
            sx={{
              background: "linear-gradient(to left, #feac5e, #c779d0, #4bc0c8)",
              mr: 1,
              mb: 1,
              p: 2,
              px: 3,
              textTransform: "none",
              borderRadius: 5,
              boxShadow: 0
            }}
          >
            Create my Smartlist account
          </Button>
          <Button
            onClick={global.openProductsMenu}
            size="large"
            variant="contained"
            sx={{
              mr: 1,
              mb: 1,
              background: "linear-gradient(to left, #00c9ff, #92fe9d)",
              color: "black",
              p: 2,
              px: 3,
              textTransform: "none",
              borderRadius: 5,
              boxShadow: 0
            }}
          >
            Discover our products
          </Button>
        </Box>
      </Grid>
      <Grid
        data-depth="0.5"
        item
        xs={11.5}
        sx={{
          p: 3,
          pt: 7,
          display: {
            xs: "none",
            md: "flex"
          },
          width: "100vw!important",
          zIndex: -1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            opacity: {
              xs: 0,
              md: 1
            }
          }}
        >
          <img
            style={{
              width: "80%",
              maxWidth: "300px",
              float: "right"
            }}
            src="https://i.ibb.co/nD5N5Vp/business-3d-young-black-man-jumping.png"
            alt="Man jumping in excitement!"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
function SecurityCard({ icon = "password", title, description }) {
  return (
    <Grid item xs={12} sm={3} style={{ display: "flex" }}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          borderRadius: "28px",
          background: "rgba(200,200,200,.3)"
        }}
        elevation={0}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ textAlign: "left", ml: 1 }}
          >
            {title}
          </Typography>
          <Typography sx={{ textAlign: "left", ml: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function Render() {
  return (
    <>
      <Box
        sx={{
          background:
            "url(https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/img/beams/1-dark@1.5x.png?raw=true)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Header />
      </Box>
      <ResourceSection
        title="Smartlist"
        heading={
          <>
            Saving money. <span style={{ color: green[600] }}>Simplified.</span>
          </>
        }
        subheading="Smartlist helps you organize your daily life."
        features={
          <>
            <FeatureCard
              title="Track what's inside your home"
              image="https://i.ibb.co/cCbP3v5/abstract-list-is-empty.png"
            />
            <FeatureCard
              title="Plan what you'll cook"
              image="https://i.ibb.co/6B87qH9/abstract-1398.png"
            />
            <FeatureCard
              title="Learn finance tips and tricks"
              image="https://i.ibb.co/HXzHtj2/abstract-mobile-payment.png"
            />
            <FeatureCard
              title="Know where your money's going"
              image="https://i.ibb.co/SQJxH03/abstract-expense-tracking.png"
            />
            <FeatureCard
              title="Create and edit custom lists"
              image="https://i.ibb.co/G21GFKG/abstract-done-1.png"
            />
            <FeatureCard
              title="Get maintenance reminders"
              image="https://i.ibb.co/YbzHVFM/abstract-coffee-break.png"
            />
          </>
        }
      />
      <SecuritySection
        heading={
          <>
            Your privacy is our{" "}
            <span style={{ color: green[600] }}>first priority</span>
          </>
        }
        subheading={
          <>
            With Argon2 hasing, AES-256 bit encryption, your data ain't going
            anywhere...
          </>
        }
        content={
          <>
            <SecurityCard
              description="Your account details are hashed using the Argon2 algorithm"
              title="AES-256 end-to-end encryption"
            />
            <SecurityCard
              description="Your account's safely stored in our servers with zero-access encryption."
              title="Argon2 password hashing"
            />
            <SecurityCard
              description="Two-factor auth helps keep the bad guys from accessing your account"
              title="Two-factor authentication"
            />
            <SecurityCard
              description="We use a VPN with an end-to-end encryption with Cloudflare"
              title="Enhanced security &amp; performance"
            />
          </>
        }
      />
      <Box sx={{ px: { xs: 5, sm: 14 }, py: 4, mb: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "800" }}>
              Ready to start saving money?
            </Typography>
            <Typography gutterBottom variant="h6" sx={{ mb: 2 }}>
              Join now - It's free.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: { sm: "end" },
              alignItems: "center"
            }}
          >
            <Box>
              <Button
                size="large"
                href="https://login.smartlist.tech/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
                sx={{
                  background:
                    "linear-gradient(to left, #feac5e, #c779d0, #4bc0c8)",
                  mr: 1,
                  mb: 1,
                  p: 2,
                  px: 3,
                  textTransform: "none",
                  borderRadius: 5,
                  boxShadow: 0
                }}
                variant="contained"
              >
                Create my Smartlist account
              </Button>
              <Button
                size="large"
                onClick={global.openProductsMenu}
                sx={{
                  mr: 1,
                  mb: 1,
                  background: "linear-gradient(to left, #00c9ff, #92fe9d)",
                  color: "black",
                  p: 2,
                  px: 3,
                  textTransform: "none",
                  borderRadius: 5,
                  boxShadow: 0
                }}
                variant="contained"
              >
                Our apps
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
