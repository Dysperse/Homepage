import React from "react";

export function CallToAction(): JSX.Element {
  return (
    <div className="p-5 max-w-[95rem] mx-auto hidden md:block">
      <div className="relative bg-gray-900 border-4 border-gray-900 rounded-3xl py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl tracking-tight text-gray-100 sm:text-4xl sm:tracking-tight">
            <span className="block font-bold">Ready to dive in?</span>
            <span className="block text-green-600 text-2xl mt-2">
              Create your free account today!
            </span>
          </h2>
          <div className="mt-20 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <img
                src="https://i.ibb.co/LPjC8Kd/image.png"
                className="w-full -mb-2 -mr-20 max-w-2xl xl:max-w-3xl rounded-tl-3xl right-0 absolute bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
