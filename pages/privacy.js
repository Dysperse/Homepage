import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
export default function Render() {
  return (
    <Box sx={{ px: { xs: 5, sm: 17 }, pb: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4, mt: 8 }}>
        <span style={{ color: green[700] }}>Security</span>
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
          mb: 2,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Argon2 security algorithm
          </Typography>
          <Typography gutterBottom>
            Argon2 is a memory-hard hashing algorithm that is designed to be as fast and secure as possible.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgba(200,200,200,.3)",
          p: 1,
          borderRadius: 5,
          mb: 2,
          boxShadow: 0
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            2-factor authentication available
          </Typography>
          <Typography gutterBottom>
            You can now turn on 2-factor authentication to verify your identity before logging in
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
