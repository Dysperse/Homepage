import { Box, Typography } from "@mui/material";

export function ProfilePicture({ template }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        alignItems: "center",
        mt: 1,
        color: "hsl(0, 0%, 50%)",
      }}
    >
      <img
        src={
          template.createdBy.profile?.picture ||
          `https://source.boringavatars.com/marble/120/${encodeURIComponent(
            template.createdBy.profile?.name
          )}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`
        }
        width={25}
        height={25}
        style={{ borderRadius: 99 }}
        alt={template.name}
      />
      <Typography sx={{ fontWeight: 900 }}>
        By {template.createdBy.profile?.name}
      </Typography>
      {template.createdBy?.email === "hello@dysperse.com" && (
        <span style={{ fontSize: 20 }} className="material-symbols-rounded">
          verified
        </span>
      )}
    </Box>
  );
}
