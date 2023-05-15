import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <Box
        sx={{
          borderTop: isDark ? "1px solid #303030" : "1px solid #ddd",
          pt: 4,
          mt: 10,
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="font-serif"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Quick links
              </Typography>
              {[
                {
                  name: "Dashboard",
                  icon: "dashboard",
                  href: "//my.dysperse.com",
                },
                {
                  name: "Availability",
                  icon: "today",
                  href: "//availability.dysperse.com",
                },
                {
                  name: "Blog",
                  icon: "link",
                  href: "//blog.dysperse.com",
                },
                {
                  name: "Server status",
                  icon: "link",
                  href: "//status.dysperse.com",
                },
                {
                  name: "Terms of service",
                  icon: "link",
                  href: "https://blog.dysperse.com/terms-of-service",
                },
                {
                  name: "Privacy policy",
                  icon: "link",
                  href: "https://blog.dysperse.com/privacy-policy",
                },
                {
                  name: "Fair usage limits",
                  icon: "link",
                  href: "https://blog.dysperse.com/about-your-storage-limits",
                },
              ].map((link) => (
                <Box key={link.href}>
                  <Button href={link.href} size="small">
                    <Icon>{link.icon}</Icon>
                    {link.name}
                  </Button>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="font-serif"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Sponsors
              </Typography>
              {[
                {
                  name: "cloudflare",
                  href: "https://cloudflare.com/?utm_source=dysperse.com",
                },
                {
                  name: "vercel",
                  href: "https://vercel.com/?utm_source=smartlist&utm_campaign=oss",
                },
                {
                  name: "neon",
                  href: "https://neon.tech/?utm_source=dysperse.com",
                },
                {
                  name: "emailjs",
                  href: "https://emailjs.com/?utm_source=dysperse.com",
                },
              ].map((sponsor) => (
                <Box key={sponsor.name}>
                  <Button
                    href={sponsor.href}
                    disableRipple={false}
                    target="_blank"
                  >
                    <Image
                      style={{
                        ...(isDark && {
                          border: "1px solid #303030",
                          borderRadius: "10px",
                        }),
                      }}
                      src={`/sponsors/${sponsor.name}.${
                        sponsor.name == "vercel" ? "svg" : "png"
                      }`}
                      width={212}
                      height={44}
                      alt={sponsor.name}
                    />
                  </Button>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
        <Image
          src={`/footer${isDark ? "-dark" : ""}.svg`}
          width={1920}
          height={480}
          alt="Dysperse logo"
          style={{
            width: "calc(100% - 50px)",
            maxWidth: "500px",
            height: "auto",
            marginTop: "40px",
            float: "right",
          }}
        />
      </Box>
    </motion.div>
  );
}
