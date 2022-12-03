import React from "react";

export function CallToAction(): JSX.Element {
  return (
    <div className="p-5 max-w-[95rem] mx-auto hidden md:block">
      <div className="relative bg-neutral-900 shadow-lg rounded-3xl dark:bg-neutral-200 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl tracking-tight text-neutral-100 sm:text-4xl sm:tracking-tight dark:text-neutral-900">
            <span className="block font-bold text-4xl">Ready to dive in?</span>
            <span className="block text-neutral-400 dark:text-neutral-700 text-xl mt-2">
              Create your free account today!
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://my.smartlist.tech/signup"
              className="focus:ring-2 ring-offset-2 ring-white ring-offset-neutral-900 mt-3 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 rounded-3xl shadow-sm text-base font-medium text-black bg-gradient-to-br hover:bg-gradient-to-tl from-neutral-200 to-neutral-400 dark:from-neutral-900 dark:to-neutral-700 dark:text-white dark:ring-white dark:hover:from-neutral-700 dark:hover:to-neutral-900"
            >
              Get started
            </a>
          </h2>
          <div className="mt-20 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <picture>
                <img
                  src="https://i.ibb.co/kJx03m8/Untitled-3840-2160-px-1.png"
                  className="w-full -mb-2 -mr-20 max-w-2xl xl:max-w-3xl rounded-tl-3xl right-0 absolute bottom-0"
                  alt="dashboard"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
