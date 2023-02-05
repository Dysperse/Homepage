import { Box, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import styles from "../../styles/features.module.scss";

export function Features({ useCase }): JSX.Element {
  const features = [
    "zen mode",
    useCase === "study groups"
      ? "personal belongings tracker"
      : useCase === "students"
      ? "dorm inventory"
      : "home inventory",
    "kanban boards",
    "goal-setting",
  ];

  const [tab, setTab] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      WheelGesturesPlugin(),
      Autoplay({ delay: 5000 }),
      AutoHeight({ destroyHeight: "auto" }),
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
    <Box className="my-16" id="features">
      <Typography variant="h4" className="text-center font-[700]">
        Meet <span className="text-green-600 underline">Dysperse.</span>
      </Typography>
      <Typography className="text-center text-gray-500 mt-2" sx={{ my: 2 }}>
        Not just <i>another</i> to-do list app...
      </Typography>
      <Box
        className="flex overflow-scroll sm:justify-center mx-auto embla max-w-3xl w-full"
        sx={{
          width: "auto!important",
          overflowX: "auto!important",
        }}
      >
        {features.map((feature) => (
          <Box
            className="flex flex-col gap-2 items-center border-b-2 p-2 hover:bg-gray-200 hover:text-gray-900 text-gray-600 text-lg px-4 rounded-t-sm hover:border-gray-300 cursor-pointer select-none active:bg-gray-300 active:text-black active:border-gray-400"
            onClick={() => {
              setTab(features.indexOf(feature));
            }}
            sx={{
              ...(tab === features.indexOf(feature) && {
                fontWeight: "600!important",
                color: "black!important",
                borderColor: "black!important",
              }),
              whiteSpace: "nowrap",
            }}
          >
            {feature}
          </Box>
        ))}
      </Box>
      <div ref={emblaRef} className="mx-auto mt-10 embla max-w-md sm:max-w-5xl">
        <div className="embla__container">
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>
                Minimalism &#8212; at its best.
              </h1>
              {[
                "Customize your theme colors",
                "Move & reorder widgets",
                "Brag about your daily streak",
                "Set daily goals & achieve them",
                "Allow for easy searching and filtering",
                "View your progress & get encouraged to finish tasks",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <picture>
                <img
                  src="/screenshots/zen.png"
                  alt="image"
                  className="feature-img"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide feature-slide">
            <Box className="w-full">
              <h1 className={styles.featureTitle}>Track your belongings.</h1>
              {[
                "Sync your " +
                  (useCase == "study groups"
                    ? "personal belongings"
                    : useCase == "students"
                    ? "dorm inventory"
                    : "home inventory") +
                  " inventory with your phone.",
                "Organize items into " +
                  (useCase == "study groups" ? "containers" : "rooms"),
                "Add notes and photos to each item",
                "Scan items to quickly build up your inventory",
                "Categorize items by type",
                "Quickly find items by searching/filtering for them",
              ].map((feature) => (
                <span className="feature-sub">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <picture>
                <img
                  src="/screenshots/inventory.png"
                  alt="image"
                  className="feature-img"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>
                {useCase == "study groups" || useCase == "students"
                  ? "Never miss an assignment again."
                  : "Master your tasks."}
              </h1>
              {[
                "Create kanban boards to organize your tasks",
                "Customize columns with emojis & colors",
                "Attach notes & photos to tasks",
                "Set due dates to tasks",
                "Sync your to-do list to Canvas LMS",
              ].map((feature) => (
                <span className="flex gap-2 mb-2 text-gray-500">
                  <Icon>east</Icon>
                  <Typography className="text-gray-800">{feature}</Typography>
                </span>
              ))}
            </Box>
            <Box className="feature-img">
              <picture>
                <img
                  src={"/screenshots/tasks.png"}
                  alt="image"
                  className="feature-img"
                />
              </picture>
            </Box>
          </div>
          <div className="embla__slide feature-slide flex items-center">
            <Box className="w-full flex-grow">
              <h1 className={styles.featureTitle}>Achieve the impossible.</h1>
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
            <Box className="feature-img">
              <picture>
                <img
                  src="/screenshots/goals.png"
                  alt="image"
                  className="feature-img"
                />
              </picture>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}
