import { Box, Chip, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Chip label="Coming soon" />
      <Typography variant="h2" sx={{ mt: 1, fontFamily: "Agrandir" }}>
        the #dysverse
      </Typography>
      <Typography sx={{ fontSize: 20, opacity: 0.6, mt: 1 }} fontWeight={600}>
        Organize your thoughts with hundreds of templates
      </Typography>
    </Box>
  );
}
