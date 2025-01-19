"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Poll() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  // -1: not voted, 0-5: voted
  const [loading, setLoading] = useState(-1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const poll = localStorage.getItem("poll");
    if (poll) {
      setData(JSON.parse(poll));
    }
  }, []);

  const handleClick = async (index: number) => {
    try {
      setError(false);
      const response = await fetch("/api/poll", {
        method: "POST",
        body: JSON.stringify({ index }),
      });
      const json = await response.json();
      setData(json);
      localStorage.setItem("poll", JSON.stringify(json));
    } catch (e) {
      setError(true);
    }
  };

  return (
    <section className="p-10 border-2 rounded-3xl mt-5 bg-gradient-to-b from-gray-50 to-gray-200">
      <h6 className="text-sm uppercase mb-1 font-bold opacity-60">
        Stay on top w/ dysperse
      </h6>
      <h2 className="text-3xl leading-tight tracking-tight font-extrabold">
        If you had an extra hour in a day, how would you spend it?
      </h2>
      {error && (
        <div className="p-2 border-2 border-red-500 rounded-full flex items-center gap-2">
          <span className="material-symbols-rounded text-red-500">error</span>
          <span className="text-red-500">
            Something went wrong, please try again later
          </span>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 mt-5">
        {[
          { key: 0, text: "Spend time with my family", icon: "1F60C" },
          { key: 1, text: "Have some me-time", icon: "1F60C" },
          { key: 2, text: "Work on my side project", icon: "1f468-200d-1f4bb" },
          { key: 3, text: "Sleep in", icon: "1F634" },
          { key: 4, text: "Go to the gym", icon: "1F4AA" },
          { key: 5, text: "Watch a movie", icon: "1F3AC" },
        ].map(({ key, text, icon }) => (
          <Button
            key={text}
            className="text-lg h-12 rounded-full px-6 border-2 justify-start items-center"
            variant="secondary"
            onClick={() => {
              if (loading === -1 && !data) {
                setLoading(key);
                handleClick(key);
              }
            }}
            disabled={loading !== -1 || !!data}
          >
            {data && (
              <div
                className="absolute top-0 left-0 h-full bg-gray-400 -z-10"
                style={{
                  width: `${
                    (data[key] /
                      (Object as any)
                        .values(data)
                        .reduce((acc: number, curr: number) => acc + curr, 0)) *
                    100
                  }%`,
                }}
              />
            )}
            <img
              src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${icon?.toLowerCase()}.png`}
              alt={icon}
              className="w-6 h-6 mr-2 z-10"
            />
            <span className="z-10">{text}</span>
            {loading === key && !data && (
              <span className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2400 2400"
                  width="24"
                  height="24"
                >
                  <g
                    strokeWidth="200"
                    strokeLinecap="round"
                    stroke="#000"
                    fill="none"
                  >
                    <path d="M1200 600V100" />
                    <path opacity=".5" d="M1200 2300v-500" />
                    <path opacity=".917" d="M900 680.4l-250-433" />
                    <path opacity=".417" d="M1750 2152.6l-250-433" />
                    <path opacity=".833" d="M680.4 900l-433-250" />
                    <path opacity=".333" d="M2152.6 1750l-433-250" />
                    <path opacity=".75" d="M600 1200H100" />
                    <path opacity=".25" d="M2300 1200h-500" />
                    <path opacity=".667" d="M680.4 1500l-433 250" />
                    <path opacity=".167" d="M2152.6 650l-433 250" />
                    <path opacity=".583" d="M900 1719.6l-250 433" />
                    <path opacity=".083" d="M1750 247.4l-250 433" />
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      keyTimes="0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667"
                      values="0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199"
                      dur="0.83333s"
                      begin="0s"
                      repeatCount="indefinite"
                      calcMode="discrete"
                    />
                  </g>
                </svg>
              </span>
            )}
            {data && (
              <div className="ml-auto opacity-50 w-full h-full z-10">
                <span>
                  {data[key]} {data[key] === 1 ? "vote" : "votes"}
                </span>
              </div>
            )}
          </Button>
        ))}
      </div>
      {data && (
        <div className="mt-3">
          <Button
            //   @ts-ignore
            href="https://app.dysperse.com/auth/sign-up"
            target="_blank"
            className="w-full text-lg h-12 rounded-full px-6 border-2 border-black bg-black text-white"
          >
            Induct myself
            <span className="material-symbols-rounded">east</span>
          </Button>
        </div>
      )}
    </section>
  );
}
