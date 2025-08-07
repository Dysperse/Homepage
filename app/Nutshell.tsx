"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import SpeechPreview from "./SpeechPreview";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "700"],
});

function TaskPreview() {
  return (
    <div className="w-full h-full min-h-60 bg-gray-100 px-5 py-5 rounded-3xl flex flex-col gap-3 col-span-2">
      <div className="flex">
        <div className="cursor-pointer border -ml-1 inline-flex items-center gap-2 py-2 px-4 rounded-full">
          <span
            style={{ fontSize: 20 }}
            className="material-symbols-rounded cursor-pointer"
          >
            label
          </span>
          <span className="text-sm cursor-pointer">Personal</span>
        </div>
      </div>
      <textarea
        placeholder="What's on your mind?"
        className="resize-none text-2xl sm:text-3xl font-thin bg-transparent w-full h-full outline-none"
        style={bricolage.style}
      />
      <div className="flex gap-1 mt-auto">
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 ml-auto shadow-none active:bg-gray-300 focus:bg-gray-300 hover:bg-gray-300"
          style={{ transition: "background-color 0.2s, transform 0.3s" }}
        >
          <span className="material-symbols-rounded">mic</span>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 shadow-none active:bg-gray-300 focus:bg-gray-300 hover:bg-gray-300"
          style={{ transition: "background-color 0.2s, transform 0.3s" }}
        >
          <span className="material-symbols-rounded">new_label</span>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 shadow-none active:bg-gray-300 focus:bg-gray-300 hover:bg-gray-300"
          style={{ transition: "background-color 0.2s, transform 0.3s" }}
        >
          <span className="material-symbols-rounded">calendar_today</span>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 shadow-none active:bg-gray-300 focus:bg-gray-300 hover:bg-gray-300"
          style={{ transition: "background-color 0.2s, transform 0.3s" }}
        >
          <span className="material-symbols-rounded">push_pin</span>
        </Button>
        <Button
          size="icon"
          className="h-10 w-10 sm:w-12 sm:h-12 rounded-full shadow-none active:bg-gray-950 focus:bg-gray-950 hover:bg-gray-950"
        >
          <span className="material-symbols-rounded">north</span>
        </Button>
      </div>
    </div>
  );
}

function MailPreview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex-1 bg-gray-100 px-5 rounded-3xl h-1/2 flex flex-col cursor-pointer select-none">
          <div className="flex w-full items-center gap-3 mt-3">
            <span className="text-sm font-bold text-left truncate ">
              Fwd: Your appointment is con...
            </span>
            <div className="ml-auto w-5 h-5 bg-black shrink-0 text-white rounded-full flex items-center justify-center">
              <span
                className="material-symbols-rounded"
                style={{ fontSize: 14 }}
              >
                north
              </span>
            </div>
          </div>

          <div className="flex border-b w-full border-gray-300 text-xs gap-2 py-0.5">
            <span className="opacity-50">To:</span>
            <span className="">tasks@dysperse.com</span>
          </div>
          <div className="flex border-b w-full border-gray-300 text-xs text-left truncate gap-2 py-0.5">
            <span className="opacity-50">
              Cc/Bcc, From: Tim Cook &lt;timcook@apple.com&gt;
            </span>
          </div>
          <div className="flex border-b w-full text-left truncate border-gray-300 text-xs gap-2 py-0.5">
            <span className="opacity-50">Subject: </span>
            <span>Fwd: Your appointment is confirmed</span>
          </div>
          <div className="text-xs max-h-[22px] leading-none pt-1 overflow-hidden mt-auto text-left">
            Your appointment with Dr. Smith is confirmed for 2:30 PM on
            Thursday, 12th August 2025. Please let us know if you have any
            questions or need to
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>
            Taskify your emails by forwarding them to <b>tasks@dysperse.com</b>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export const Nutshell = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (videoTop < windowHeight - 250 && videoBottom > 250) {
      video.play();
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  return (
    <section className="w-full p-4 mt-8 2xl:mt-16">
      <h5
        className="mb-8 text-2xl sm:text-3xl items-center gap-3 text-neutral-700 dark:text-neutral-50"
        style={bricolage.style}
      >
        <Button
          className="rounded-lg px-2 pr-1 gap-1 inline-flex shadow-none border-2 text-2xl sm:text-3xl h-12 font-medium"
          variant="outline"
          onClick={() => new Audio("/pronunciation.mp3").play()}
        >
          Dysperse
          <span style={{ fontSize: 30 }} className="material-symbols-rounded">
            volume_up
          </span>
        </Button>
        <span className="font-medium ml-3">in a nutshell</span>
      </h5>
      <StaticStep
        step={1}
        title="Dump it"
        subtitle="Whatever's on your mind—big or small—Dysperse helps you turn it into an
        organized task."
      >
        <div className="sm:grid grid-cols-3 gap-3">
          <TaskPreview />
          <div className="mt-3 h-60 sm:h-[unset] sm:mt-0 flex-1 flex flex-col gap-3">
            <SpeechPreview />
            <MailPreview />
          </div>
        </div>
      </StaticStep>
      <StaticStep
        step={2}
        title="Organize it"
        subtitle={
          <>
            Keep it all organized—group <b>tasks</b> with <b>labels</b>, and{" "}
            <b>labels </b>
            with <b>collections</b>
          </>
        }
      >
        <div className="flex gap-3">
          <div
            className="flex-1 bg-gray-100 rounded-3xl relative"
            style={{ aspectRatio: "1920/900" }}
          >
            <video
              className="pointer-events-none rounded-3xl"
              muted
              ref={videoRef}
            >
              <source src="/label-diagram.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </StaticStep>
      <StaticStep
        step={3}
        title="Visualize it"
        subtitle={
          <>
            We've created <b>nine</b> beautiful ways to
            <span className="sm:hidden">
              <br />
            </span>{" "}
            view collections
          </>
        }
      >
        <div className="flex">
          <div className="shrink-0 w-10 bg-gradient-to-r h-60 from-white to-transparent z-10 -ml-10 px-5 py-5 -mr-10"></div>
          <div className="snap-mandatory flex gap-2 overflow-x-auto px-10 pr-20 sm:pr-10 pb-4 -mb-4 snap-x">
            {[
              {
                title: "List",
                icon: "view_agenda",
                description:
                  "The good old trusty to-do list. Perfect for simple task management and keeping track of your daily activities.",
              },
              {
                title: "Kanban",
                icon: "view_kanban",
                description:
                  "Organize tasks by category. Ideal for project management and visualizing your workflow.",
              },
              {
                title: "Grid",
                icon: "view_cozy",
                description:
                  "Organize tasks in a grid by category. Great for a more structured and compartmentalized view of your tasks.",
              },
              {
                title: "Planner",
                icon: "transition_slide",
                description:
                  "View tasks day by day. Excellent for daily planning and ensuring you stay on top of your schedule.",
              },
              {
                title: "Skyline",
                icon: "blur_linear",
                description:
                  "Vision tasks in flexible time frames. Useful for long-term planning and seeing the bigger picture.",
              },
              {
                title: "Stream",
                icon: "whatshot",
                description:
                  "See missed, upcoming, and completed tasks. Helps you track your progress and stay motivated.",
              },
              {
                title: "Workload",
                icon: "exercise",
                description:
                  "Sort tasks by an estimated difficulty. Useful for balancing your workload and avoiding burnout.",
              },
              {
                title: "Matrix",
                icon: "target",
                description:
                  "Prioritize tasks by urgency and importance. Helps you focus on what matters most and manage your time effectively.",
              },
              {
                title: "Calendar",
                icon: "calendar_today",
                description:
                  "The good old traditional calendar view. Perfect for scheduling and keeping track of important dates and deadlines.",
              },
            ].map((_, i) => (
              <Dialog
                key={i}
                onOpenChange={(t) => {
                  if (t)
                    document.documentElement.classList.add("scrollbar-hidden");
                  else
                    document.documentElement.classList.remove(
                      "scrollbar-hidden"
                    );
                }}
              >
                <DialogTrigger className="snap-center">
                  <div className="cursor-pointer active:scale-95 duration-[400] transition-transform shrink-0 w-40 h-60 px-5 py-5 rounded-3xl relative bg-gray-100 overflow-hidden">
                    <Image
                      className="rounded-3xl overflow-hidden"
                      alt={`View ${i + 1}`}
                      src={`/views/${i + 1}.png`}
                      fill
                    />

                    <div
                      className="absolute cursor-pointer inset-0 bg-gradient-to-b flex items-end font-medium p-3 text-2xl text-white from-neutral-100/5 to-neutral-900/50"
                      style={bricolage.style}
                    >
                      <h3>{_.title} </h3>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl grid grid-cols-2 p-0 overflow-hidden border-none">
                  <div
                    className="relative"
                    style={{ aspectRatio: "160/240", maxHeight: "60vh" }}
                  >
                    <Image
                      alt={`View ${i + 1}`}
                      src={`/views/${i + 1}.png`}
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-3 py-5 pt-10">
                    <span
                      className="material-symbols-rounded mt-4"
                      style={{ fontSize: 40 }}
                    >
                      {_.icon}
                    </span>
                    <DialogTitle className="text-4xl mt-2 font-bold text-neutral-700 dark:text-neutral-50">
                      {_.title}
                    </DialogTitle>
                    <p className="text-xl font-thin pr-10 text-pretty">
                      {_.description}
                    </p>
                    <div className="flex mt-auto flex-col pr-12">
                      <Button
                        className="h-12 rounded-3xl text-lg"
                        slot="a"
                        // @ts-ignore
                        href={`/templates?defaultView=${_.title.toLowerCase()}`}
                      >
                        Find {_.title.toLowerCase()} templates
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <div className="shrink-0 w-10 bg-gradient-to-l h-60 from-white to-transparent z-10 -ml-10 px-5 py-5"></div>
        </div>
      </StaticStep>
    </section>
  );
};

const StaticStep = ({
  step,
  title,
  children,
  subtitle,
}: {
  step: number;
  title: string;
  children?: ReactNode;
  subtitle?: string | ReactNode;
}) => {
  return (
    <div className="flex gap-2 sm:gap-6 w-full mt-4">
      <div className="flex flex-col items-center">
        <p className="flex size-8 sm:size-10 flex-none select-none items-center justify-center rounded-full border-[2px] border-neutral-400/20 bg-neutral-50 font-bold text-neutral-700 text-lg dark:border-neutral-400/10 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80">
          {step}
        </p>
        <div className="relative my-2 h-full w-[2px] rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="mb-4 w-full">
        <h2 className="mb-2 ml-1 font-bold text-2xl sm:text-3xl text-neutral-700 tracking-tight dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <h3 className="mb-4 ml-1 text-md sm:text-lg text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </h3>
        )}
        <div className="sm:pl-1">{children}</div>
      </div>
    </div>
  );
};

export default Nutshell;

