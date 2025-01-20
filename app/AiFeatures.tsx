"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Generate subtasks",
    description:
      "Break down tasks into smaller, manageable subtasks effortlessly.",
  },
  {
    title: "Sort tasks",
    description:
      "Don't want to categorize tasks manually? Let AI do it for you.",
  },
  {
    title: "Ask your to-do list questions",
    description:
      "Interact with your to-do list using natural language queries.",
  },
  {
    title: "Create collection templates",
    description: "Generate board templates based on what you're working on",
  },
  {
    title: "Taskify your emails",
    description: "Automatically convert your emails into actionable tasks.",
  },
];

export default function AiFeatures() {
  const [openFeature, setOpenFeature] = useState<number>(0);
  const [resetKey, setResetKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [resetKey]);

  const handleFeatureClick = (index: number) => {
    setOpenFeature(index);
    setResetKey((prev) => prev + 1); // Reset the interval
  };

  return (
    <div className="p-[2px] rounded-3xl mt-5 bg-gradient-to-br from-orange-400 to-pink-700">
      <section className="p-16 rounded-[22.5px] bg-white flex">
        <div className="flex-[5]">
          <h6 className="text-sm uppercase mb-1 font-bold opacity-60">
            Arriving 2025
          </h6>
          <h2 className="text-5xl leading-tight tracking-tight font-extrabold">
            Let{" "}
            <span className="inline-flex -mt-3 text-nowrap whitespace-nowrap gap-2 bg-gradient-to-br text-white from-orange-400 to-pink-600 px-3 py-0.5 -mb-0.5 select-none cursor-default rounded-xl items-center align-middle">
              <span
                style={{ fontSize: "inherit" }}
                className="material-symbols-rounded"
              >
                raven
              </span>
              Sidekick
            </span>{" "}
            take <br />
            the heavy lifting out of <br />
            your day.
          </h2>
          <h3 className="text-2xl mt-4 mb-4 font-thin opacity-50">
            Connect your preferred AI assistant <br />
            for no extra cost.
          </h3>

          {features.map((feature, index) => (
            <details
              key={index}
              open={index === openFeature}
              className="relative max-w-sm ai-collapsible rounded-2xl -ml-3"
              onClick={(e) => {
                e.preventDefault();
                handleFeatureClick(index);
              }}
            >
              <div
                className={`absolute bottom-0 left-0 h-full rounded-2xl bg-gray-200 ${
                  index === openFeature ? "progress-bar" : ""
                }`}
              ></div>
              <summary className="ai-summary relative z-10 cursor-pointer">
                <h4 className="z-10">{feature.title}</h4>
              </summary>
              <div className="ai-details max-w-md z-10 relative bg-transparent">
                <p className="z-10 text-lg text-gray-700">
                  {feature.description}
                </p>
              </div>
            </details>
          ))}
        </div>
        <div className="flex-[2.7]">
          <div className="relative aspect-[965/1920]">
            <Image src={`/ai/${openFeature + 1}.png`} fill alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
