import { Box, Icon, Typography } from "@mui/material";
import Link from "next/link";

export function Header() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        mb: 5,
        p: 5,
        flexDirection: "column",
      }}
    >
      <Box
        className="mb-auto mt-14 rounded-xl backdrop-blur-lg p-3 text-white bg-[rgba(255,255,255,.1)] flex items-center relative overflow-hidden"
        sx={{
          overflow: "hidden",
        }}
      >
        <Icon className="outlined" sx={{ mr: 1 }}>
          info
        </Icon>
        <span>
          <Link
            href="https://availability.smartlist.tech"
            target="_blank"
            className="underline focus:ring-2 ring-white p-1 rounded-md -mr-1"
          >
            Carbon Availability
          </Link>{" "}
          is now in public beta. Availability helps you find the best time to
          meet based on your guest's availability. No signup required
        </span>
        <span className="animate-announcement" />
      </Box>
      <Box className="mt-auto w-full">
        <Typography
          variant="h2"
          className="text-heading text-gray-100  rounded-3xl p-2 px-4"
        >
          It&apos;s <i>your</i> productivity{" "}
          <span className="border-2 border-orange-400 text-orange-400 px-2 rounded-2xl">
            boosted
          </span>
        </Typography>
        <Typography className="mt-0 inline-flex text-gray-100 rounded-xl p-2 px-4 max-w-3xl font-[700]">
          Meet Carbon: The all-in-one personal productivity platform trusted and
          loved by thousands of students, families, seniors, and entrepreneurs.
        </Typography>
        <Box className="mt-3 flex gap-4 ml-5">
          <button className="header-btn">
            Get started
            <Icon className="text-yellow-300">arrow_forward</Icon>
          </button>
          <button className="header-btn">Watch the video</button>
          <button className="header-btn ml-auto px-3 bg-gray-900 hover:bg-gray-900">
            <Icon>expand_more</Icon>
          </button>
        </Box>
      </Box>
    </Box>
  );
}
