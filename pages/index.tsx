import { Box, Button, Collapse, Grid, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Twitter, Instagram, Github } from "feather-icons-react";
import { Header } from "../components/homepage/Header";
import { Stats } from "../components/homepage/Stats";

function Security() {
  return (
    <Box className="my-18 relative text-gray-900">
      <Box
        sx={{
          p: 10,
        }}
      >
        <Typography variant="h4" className="text-center font-[700]">
          Secure by <span className="text-green-600 underline">design</span>
        </Typography>
        <Typography className="text-center text-gray-500 mt-2 mb-5">
          refined to perfection
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              transparency by default
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              zero-access encryption
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              Invite-only access
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="security-card">
            <Typography className="security-title">
              multi-factor authentication
            </Typography>
            <Typography className="hover:underline cursor-pointer inline-block">
              Learn more &rarr;
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function Footer() {
  return (
    <Box
      sx={{ background: "#332B2B", color: "#C2ACAC" }}
      className="p-10 relative"
    >
      <Box sx={{ zIndex: 1 }}>
        <Typography variant="h4" className="font-[700] mb-2">
          Carbon
        </Typography>
        <Typography className={"font-[700] my-5 mb-3"}>Quick links</Typography>

        <Link href="/" className="footer-btn">
          Terms of service &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          Privacy policy &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          My dashboard &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          Availability &rarr;
        </Link>

        <Typography className={"font-[700] my-5 mb-3"}>Sponsors</Typography>
        <Link
          href="https://vercel.com/?utm_source=smartlist&utm_campaign=oss"
          className="footer-btn"
        >
          <img
            src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
            alt="Powered by Vercel"
          />
        </Link>

        <Typography className={"font-[700] my-5 mb-3"}>Social</Typography>
        <Link
          href="https://twitter.com/getsmartlist"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Twitter />
        </Link>
        <Link
          href="https://instagram.com/getsmartlist"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="https://github.com/Smartlist-App"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Github />
        </Link>
      </Box>
      <picture>
        <img
          src="/footer.svg"
          alt="logo"
          className="h-[90%] absolute bottom-0 right-0 rounded-tl-3xl"
        />
      </picture>
    </Box>
  );
}

function FAQ() {
  const questions = [
    {
      question: "What is Carbon?",
      answer:
        "Carbon is a personal productivity platform that helps you organize your life and get things done.",
    },
    {
      question: "Is Carbon free?",
      answer: "Yes, Carbon is free to use.",
    },
    {
      question: "Can I use Carbon for my dorm or apartment?",
      answer:
        "Yes, Carbon is perfect for dorms and apartments. Carbon has specific features for dorms and apartments.",
    },
    {
      question: "Can I use Carbon for just myself, without a group?",
      answer:
        "Yes, Carbon lets you customize your experience to fit your needs.",
    },
    {
      question: "Does Cabon take my credit card information?",
      answer:
        "No, Carbon does not take your credit card information. Carbon is free to use.",
    },
  ];

  const section = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <button
          onClick={() => setOpen(!open)}
          className="border-b w-full text-left p-2 px-2 border-gray-200 flex"
        >
          {question}
          <Icon className="ml-auto">
            {open ? "expand_less" : "expand_more"}
          </Icon>
        </button>
        <Collapse in={open}>
          <Typography className="p-2 bg-gray-100 my-2 rounded-xl px-3">
            {answer}
          </Typography>
        </Collapse>
      </Box>
    );
  };
  return (
    <Box className="my-18 relative text-gray-900" sx={{ p: 10 }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className="font-[700]">
            Frequently asked questions
          </Typography>
          <Typography className="text-gray-500 mt-2 mb-5 underline">
            Visit our support center &rarr;
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {questions.map((e) => section(e))}
        </Grid>
      </Grid>
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
    <Box className="my-16">
      <Typography variant="h4" className="text-center font-[700]">
        Say hello to <span className="text-green-600 underline">Carbon.</span>
      </Typography>
      <Typography className="text-center text-gray-500 mt-2" sx={{ my: 2 }}>
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
                fontWeight: "600!important",
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
              <Typography className="feature-title">
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
                <span className="feature-sub">
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
              <Typography className="feature-title">
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
              <Typography className="feature-title">
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
              <Typography className="feature-title">
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
    <Box>
      <Header />
      <Features />
      <Stats />
      <Security />
      <FAQ />
      <Footer />
    </Box>
  );
}
