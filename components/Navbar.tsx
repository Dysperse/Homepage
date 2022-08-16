/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CashIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { Twitter, MessageSquare } from "react-feather";
import { ChevronDownIcon } from "@heroicons/react/solid";
/* This example requires Tailwind CSS v2.0+ */

const solutions = [
  {
    name: "Smartlist",
    description: "Next-gen home inventory and personal finances",
    href: "#",
    icon: CashIcon,
  },
  {
    name: "Smartlist Availability",
    description:
      "The modern way of finding the best time for your group to get together",
    href: "#",
    icon: CalendarIcon,
  },
];
const callsToAction = [
  { name: "Help", href: "#", icon: PlayIcon },
  { name: <>Official&nbsp;twitter</>, href: "#", icon: Twitter },
  { name: "Discord", href: "#", icon: MessageSquare },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="bg-white">
      <div className="flex justify-between items-center fixed z-[999999] w-full backdrop-blur-lg border-b top-0 left-0 bg-[rgba(255,255,255,.9)] py-5 md:justify-start md:space-x-10 px-10 h-20">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="flex items-center gap-5">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://cdn.jsdelivr.net/gh/Smartlist-App/Assets@master/v2/rounded.png"
                alt=""
              />
            </a>
          </Link>
        </div>
        <Popover.Group as="nav" className="flex space-x-5 md:space-x-10">
          <Link href="/privacy">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Privacy
            </a>
          </Link>
          <Link href="/support">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Support
            </a>
          </Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  )}
                >
                  <span>Apps</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-900"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 fixed right-0 -mr-10 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-2xl hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 mt-1 text-teal-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        {callsToAction.map((item, key) => (
                          <div key={key.toString()} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-xl text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">{item.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://login.smartlist.tech/oauth/eccbc87e4b5ce2fe28308fd9f2a7baf3"
            className="whitespace-nowrap hover:underline focus:ring-2 ring-black text-base font-medium text-gray-500 hover:text-gray-900"
          >
            My account
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://login.smartlist.tech/signup/eccbc87e4b5ce2fe28308fd9f2a7baf3"
            className="focus:ring ring-offset-2 ring-black ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-gradient-to-br hover:bg-gradient-to-tl from-gray-700 to-gray-900"
          >
            Get started
          </a>
        </div>
      </div>
    </Popover>
  );
}
