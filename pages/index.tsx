import { Box, Button, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";

function Header() {
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

function Features() {
  const features = [
    "home inventory",
    "kanban boards",
    "memo organization",
    "goal-setting",
  ];

  const [tab, setTab] = useState(0);

  const options = { delay: 5000 }; // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      WheelGesturesPlugin(),
      AutoHeight({
        destroyHeight: "auto",
      }),
      autoplay,
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setTab(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(tab);
    }
  }, [tab]);

  return (
    <Box className="my-16">
      <Typography variant="h4" className="text-center font-[700]">
        Say hello to <span className="text-green-600 underline">Carbon.</span>
      </Typography>
      <Typography className="text-center text-gray-500 mt-2 mb-5">
        Meet your new all-in-one personal organizer.
      </Typography>
      <Box className="flex flex-col md:flex-row justify-center mx-auto embla max-w-3xl w-full">
        {features.map((feature) => (
          <Box
            className="flex flex-col gap-2 items-center border-b-2 p-2 hover:bg-gray-200 hover:text-gray-900 text-gray-600 text-lg px-4 rounded-t-sm hover:border-gray-300 cursor-pointer select-none active:bg-gray-300 active:text-black active:border-gray-400"
            onClick={() => {
              setTab(features.indexOf(feature));
            }}
            sx={{
              ...(tab === features.indexOf(feature) && {
                color: "black!important",
                borderColor: "black!important",
              }),
            }}
          >
            {feature}
          </Box>
        ))}
      </Box>
      <div ref={emblaRef} className="mx-auto mt-10 embla max-w-5xl">
        <div className="embla__container">
          <div className="embla__slide flex items-center w-full">
            <Box className="w-full ">
              <Typography className="text-4xl mb-5 font-[700]">
                Track your belongings.
              </Typography>
              {[
                "Sync your home inventory with your phone.",
                "Organize items into rooms",
                "Add notes and photos to each item",
                "Scan items to quickly build up your inventory",
                "Categorize items by type",
                "Quickly find items by searching/filtering for them",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="ml-auto">
              <picture>
                <img
                  src="https://i.ibb.co/6WzTXMY/image.png"
                  alt="image"
                  className="max-w-[300px]"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide flex items-center">
            <Box className="w-full flex-grow">
              <Typography className="text-4xl mb-5 font-[700]">
                Master your tasks
              </Typography>
              {[
                "Create kanban boards to organize your tasks",
                "Customize columns with emojis & colors",
                "Attach notes & photos to tasks",
                "Set due dates to tasks",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box>
              <picture>
                <img
                  src="https://i.ibb.co/6WzTXMY/image.png"
                  alt="image"
                  className="max-w-[300px]"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide flex items-center">
            <Box className="w-full flex-grow">
              <Typography className="text-4xl mb-5 font-[700]">
                Never lose important notes again
              </Typography>
              {[
                "Store notes, files, and photos in one place",
                "Allow for easy searching and filtering",
                "Let everyone in your group see your notes, or, create private notes",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box>
              <picture>
                <img
                  src="https://i.ibb.co/6WzTXMY/image.png"
                  alt="image"
                  className="max-w-[300px]"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide flex items-center">
            <Box className="w-full flex-grow">
              <Typography className="text-4xl mb-5 font-[700]">
                Acheive the impossible
              </Typography>
              {[
                "Create goals and track your progress",
                "Prepare for exams, interviews, and more",
                "Break down your goals into smaller tasks",
                "Get rid of bad habits and create new ones",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box>
              <picture>
                <img
                  src="https://i.ibb.co/6WzTXMY/image.png"
                  alt="image"
                  className="max-w-[300px]"
                />
              </picture>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Features />
    </>
  );
}
