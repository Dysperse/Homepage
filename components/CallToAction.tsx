import React from "react";

export function CallToAction(): JSX.Element {
  return (
    <div className="p-5 max-w-[95rem] mx-auto hidden md:block">
      <div className="relative bg-gray-900 shadow-lg rounded-3xl py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl tracking-tight text-gray-100 sm:text-4xl sm:tracking-tight">
            <span className="block font-bold text-4xl">Ready to dive in?</span>
            <span className="block text-green-600 text-xl mt-2">
              Create your free account today!
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://login.smartlist.tech/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
              className="focus:ring-2 ring-offset-2 ring-white ring-offset-gray-900 mt-3 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 rounded-2xl shadow-sm text-base font-medium text-black bg-gradient-to-br hover:bg-gradient-to-tl from-gray-200 to-gray-400"
            >
              Get started
            </a>
          </h2>
          <div className="mt-20 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <picture>
                <img
                  src="https://i.ibb.co/LPjC8Kd/image.png"
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
