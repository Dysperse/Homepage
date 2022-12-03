import React from "react";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

export function Announcement() {
  return (
    <div className="max-w-[100vw] text-ellipsis overflow-hidden bg-black mt-20 dark:bg-white">
      <div className="max-w-8xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center max-w-[100%]">
            <span className="flex p-2 rounded-lg bg-neutral-900 dark:bg-neutral-300">
              <SpeakerphoneIcon
                className="h-5 w-5 text-white dark:text-neutral-900"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate text-ellipsis max-w-[100%] overflow-hidden font-medium text-white dark:text-black max-w-full">
              {" "}
              We just released Coach! Coach helps you achieve your goals,
              whether it&apos;s big or small by adding small steps to enrich
              your daily routine.
            </p>
          </div>
          <div className="order-3 mt-2 ml-auto flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://twitter.com/getsmartlist/status/1598217864036503553"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center my-1 px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:ring-2 ring-offset-2 ring-white ring-offset-gray-900 dark:text-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:ring-offset-gray-100"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
