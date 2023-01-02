import { Box, Icon, Typography } from "@mui/material";
import Link from "next/link";

export function Header({ useCase = false }: any) {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0." +
          (useCase === "study groups" || useCase === "students" ? "8" : "5") +
          "), rgba(0, 0, 0, 0." +
          (useCase === "study groups" || useCase === "students" ? "8" : "5") +
          ")), url(" +
          (useCase === "study groups" || useCase === "students"
            ? "/education.jpg"
            : "/image.jpg") +
          ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        mb: 5,
        p: { xs: 2, sm: 5 },
        flexDirection: "column",
      }}
    >
      <Box
        className="mb-auto mt-14 rounded-xl backdrop-blur-lg p-3 hidden-on-mobile text-white bg-[rgba(255,255,255,.1)] flex items-center relative overflow-hidden"
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
        <h1 className="text-5xl sm:text-7xl text-heading text-gray-100  rounded-3xl p-2 px-4">
          {useCase ? (
            <>Carbon for </>
          ) : (
            <>
              It&apos;s <i>your</i> productivity{" "}
            </>
          )}
          <span className="inline-flex sm:inline border-2 border-orange-400 text-orange-400 px-2 rounded-2xl">
            {useCase ? useCase : "boosted"}
          </span>
        </h1>
        <Typography className="mt-0 inline-flex text-gray-100 rounded-xl p-2 px-4 max-w-3xl font-[700]">
          Meet Carbon: The all-in-one personal productivity platform trusted and
          loved by thousands of students, families, seniors, and entrepreneurs.
        </Typography>
        <Box className="mt-3 flex gap-4 ml-5">
          <button
            className="header-btn"
            onClick={() => window.open("https://my.smartlist.tech/signup")}
          >
            Get started
            <Icon className="text-yellow-300">arrow_forward</Icon>
          </button>
          <button className="header-btn">Watch the video</button>
          <button
            className="flex items-center header-btn ml-auto hidden-on-mobile w-20 h-20 bg-transparent absolute bottom-5 right-5 p-0 hover:bg-transparent"
            onClick={() => {
              const id = "features";
              const yOffset = -100;
              const element = document.getElementById(id);
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            <picture
              className="read-more"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <img src="/curved.png" draggable="false" />
            </picture>
            <Box
              sx={{
                position: "absolute",
                color: "#fff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Icon
                className="animate-bounce"
                sx={{
                  mt: 1,
                }}
              >
                south
              </Icon>
            </Box>
          </button>
        </Box>
      </Box>
    </Box>
  );
}
