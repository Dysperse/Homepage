import { Box, Button, Icon, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          mb: 100,
          display: "flex",
          p: 5,
        }}
      >
        <Box className="mt-auto w-full">
          <Typography
            variant="h1"
            className="text-heading text-gray-100  rounded-3xl p-2 px-4"
          >
            Let's grow from here.
          </Typography>
          <Typography className="mt-0 inline-flex text-gray-100 rounded-xl p-2 px-4">
            Carbon&apos;s an all-in-one productivity app complete with kanban
            boards, home inventory, goal-setting, and more.
          </Typography>
          <Box className="mt-3 flex gap-4">
            <button className="header-btn">
              Get started
              <Icon className="text-yellow-300">arrow_forward</Icon>
            </button>
            <button className="header-btn">Watch the video</button>
            <button className="header-btn ml-auto px-3">
              <Icon>expand_more</Icon>
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
