"use client";
import type { ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "700",
});

export const Nutshell = () => {
  return (
    <section className="w-full p-4 -mt-10">
      <h5
        className="mb-8 text-3xl flex items-center gap-3 text-neutral-700 dark:text-neutral-50"
        style={bricolage.style}
      >
        <Button
          className="rounded-full shadow-none border-2 text-3xl h-12 font-medium"
          variant="outline"
          onClick={() => new Audio("/pronunciation.mp3").play()}
        >
          Dysperse
          <span style={{ fontSize: 30 }} className="material-symbols-rounded">
            volume_up
          </span>
        </Button>
        <span className="sr-only">Dysperse</span>
        <span className="font-medium">in a nutshell</span>
      </h5>
      <StaticStep
        step={1}
        title="Dump it"
        subtitle="Whatever's on your mind—big or small—Dysperse helps you turn it into an
        organized task."
      >
        <div className="flex gap-3">
          <div className="w-[600px] h-60 bg-gray-100 px-5 py-5 rounded-3xl"></div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-gray-100 px-5 py-5 rounded-3xl"></div>
            <div className="flex-1 bg-gray-100 px-5 py-5 rounded-3xl"></div>
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
          <div className="flex-1 h-96 bg-gray-100 px-5 py-5 rounded-3xl"></div>
        </div>
      </StaticStep>
      <StaticStep
        step={3}
        title="Visualize it"
        subtitle={
          <>
            We've created <b>nine</b> beautiful ways to view collections
          </>
        }
      >
        <div className="flex">
          <div className="shrink-0 w-10 bg-gradient-to-r h-60 from-white to-transparent z-10 -ml-10 px-5 py-5 -mr-10"></div>
          <div className="flex gap-2 overflow-x-auto px-10">
            {[
              { title: "List", icon: "list" },
              { title: "Kanban", icon: "grid" },
              { title: "Grid", icon: "calendar" },
              { title: "Planner", icon: "kanban" },
              { title: "Skyline", icon: "table" },
              { title: "Stream", icon: "timeline" },
              { title: "Workload", icon: "timeline" },
              { title: "Matrix", icon: "map" },
              { title: "Calendar", icon: "gallery" },
            ].map((_, i) => (
              <div className="shrink-0 w-40 h-60 px-5 py-5 rounded-3xl relative bg-gray-100 overflow-hidden">
                <Image alt={`View ${i + 1}`} src={`/views/${i + 1}.png`} fill />

                <div className="absolute inset-0 bg-gradient-to-b flex items-end font-black p-3 text-lg text-white from-neutral-100/5 to-neutral-900/40">
                  <h3>{_.title} </h3>
                </div>
              </div>
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
    <div className="flex gap-6 w-full mt-4">
      <div className="flex flex-col items-center">
        <p className="flex size-10 flex-none select-none items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-100 font-bold text-neutral-700 text-lg dark:border-neutral-400/10 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80">
          {step}
        </p>
        <div className="relative my-2 h-full w-px rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="mb-4 w-full">
        <h2 className="mb-2 ml-1 font-bold text-3xl text-neutral-700 tracking-tight dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <h3 className="mb-4 ml-1 text-lg text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </h3>
        )}
        <div className="pl-1">{children}</div>
      </div>
    </div>
  );
};

export default Nutshell;

