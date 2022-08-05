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
    <Grid item xs={12} sm={3} style={{ display: "flex" }}>
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
            Ever found yourself at the grocery store and not knowing what you needed to buy? Smartlist is an app which helps you know what's in your home, remind you for tasks, and help you budget.
          </Typography>
          <Button
            href="https://coming-soon.smartlist.tech/wait/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
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
            Our apps
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
              title="Create rooms and track your home inventory"
              image="https://ouch-cdn2.icons8.com/IsrJQjIDV9U9oCmoJ3iRD77geBzIWa4CpdqAByJWm3w/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg0/L2I0ZjRiNzQxLTdh/MjEtNDQwZi1iY2Rh/LTZiYzZjMzQ0OTM2/Ni5wbmc.png"
            />
            <FeatureCard
              title="Invite up to 5 members to your home"
              image="https://ouch-cdn2.icons8.com/lVmAsy797H6bYyTGAciPhSY4sd4bNJpYrKv3qneWApQ/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODcx/LzlhMTEwMjgyLTVh/MTUtNDZjNy05NzA5/LWE5NWM3ZmQwNDA0/OC5wbmc.png"
            />
            <FeatureCard
              title="Create budgets and set financial goals"
              image="https://ouch-cdn2.icons8.com/u7Lkm5yK_ab_FzD9GBl8hXGj9Nyz1X74ahjAN3-Ehug/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDc2/LzQ5N2QzMDI0LTQ3/OTMtNDUxYy04MGM5/LTUxYWQ2NWQ4NmRj/MC5wbmc.png"
            />
            <FeatureCard
              title="Create shopping lists, todo-lists, and more"
              image="https://ouch-cdn2.icons8.com/5MUeT0n2wT_4LTg-ymWS-i6dQ5_k01HXQc9e_WC8sRo/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjE1/L2M0MThkMmZjLTE3/MzAtNDcwYi1hOGJm/LTQxMzc5OTYyNTUx/NS5wbmc.png"
            />
            <FeatureCard
              title="Know where your money's going"
              image="https://ouch-cdn2.icons8.com/sXyYBkxQ9w22Qb1w5mOxkta113cSwX4QAPJvgqq1PYA/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQz/LzA1MjhhODQxLTgz/NWEtNGVlOC1iMTY4/LWYzZjQ5MzRhOGJm/Ni5wbmc.png"
            />
            <FeatureCard
              title="Secure your account with 2-factor authentication"
              image="https://ouch-cdn2.icons8.com/QqX_HLrYBlLFs2hRJqgmgcUs19szRGzU6T5FHlv3Jzo/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjA4/L2YzNzllYTI0LTE2/NWEtNGQxMi04Nzc2/LTNmZWU5OWJhZjMx/Mi5wbmc.png"
            />
            <FeatureCard
              title="Access your inventory on any device"
              image="https://ouch-cdn2.icons8.com/el9fRFXgSnnX2mKvHEJo21StwCFOzVHNCMoqK_0x2SE/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjIy/L2RiZTdiMjBjLTU2/YTgtNGQ0YS04MmFk/LTdkYzNlNTkxNDcw/NS5wbmc.png"
            />
            <FeatureCard
              title="Dorm mode for students, and apartment mode"
              image="https://ouch-cdn2.icons8.com/n3e5YhPlWTiYMNzv_aK0yRpyYuVgXvWh5YU9Q2MywJ8/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ3/L2MyOTgzNWJmLWNm/NjQtNDZhMy1iMDIz/LTM0NzgzZjg1YmQ4/Yi5wbmc.png"
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
                href="https://coming-soon.smartlist.tech/wait/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
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
