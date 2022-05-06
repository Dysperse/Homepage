import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
export default function Render() {
  return (
    <Box sx={{ px: { xs: 5, sm: 17 }, pb: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4, mt: 8 }}>
        Secure <span style={{ color: green[700] }}>like Fort Knox</span>
      </Typography>
      <Typography sx={{ textAlign: "center", mb: 4 }}>
        At Smartlist, we protect your data like it's our own. We're constantuly
        updating our code to ensure that your data isn't leaked anywhere.
      </Typography>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Argon2 flavored password security + MFA
          </Typography>
          <Typography gutterBottom>
            Argon2 is the strongest password hashing technique (as of 2022). You
            can turn on multi factor auth to keep the bad guys out
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            HTTPS/HSTS
          </Typography>
          <Typography gutterBottom>
            Smartlist uses HSTS to take the site down in case HTTPS is
            unavailable
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            DDoS guard
          </Typography>
          <Typography gutterBottom>
            Smartlist's servers are guarded with a DDoS protection service which
            will block any malicious IP addresses.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Captcha verification
          </Typography>
          <Typography gutterBottom>
            Smartlist will require you to enter a captcha on login
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            AES-256 bit encryption
          </Typography>
          <Typography gutterBottom>
            With AES-256, your whole account's stored in our database with
            zero-access encryption.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 1,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            End-to-end encrypted with Cloudflare
          </Typography>
          <Typography gutterBottom>
            Cloudflare proxies our requests and helps us accelarate our site
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
