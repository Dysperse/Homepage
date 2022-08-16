import React from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

function IconItem({ icon, inline }: { icon: string; inline?: boolean }) {
  return (
    <div className="icon-item">
      <span className="material-symbols-rounded text-gray-600 select-none">
        {icon}
      </span>
    </div>
  );
}

function Announcement() {
  return (
    <div className="max-w-[100vw] text-ellipsis overflow-hidden bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center max-w-[100%]">
            <span className="flex p-2 rounded-lg bg-gray-800">
              <SpeakerphoneIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate text-ellipsis max-w-[100%] overflow-hidden font-medium text-white">
              Smartlist just got more secure! All user data is now stored
              securely with AES-256 bit encryption!
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function Header() {
  const [iconList, setIconList] = React.useState(
    JSON.stringify([
      "blender",
      "kitchen",
      "fireplace",
      "remote_gen",
      "tv",
      "dishwasher_gen",
      "roller_skating",
      "phone_iphone",
      "computer",
      "router",
      "chair",
      "coffee",
      "home",
      "shower",
      "wall_lamp",
      "tools_pliers_wire_stripper",
      "sports_soccer",
      "inventory_2",
      "shower",
      "directions_car",
      "eco",
      "potted_plant",
      "liquor",
      "payments",
      "icecream",
      "egg",
      "local_pizza",
      "scene",
      "cable",
      "sim_card",
      "local_cafe",
      "wine_bar",
      "ramen_dining",
      "coffee_maker",
      "brunch_dining",
      "aod_tablet",
      "live_tv",
      "headset_mic",
      "savings",
      "directions_bike",
      "event",
      "home_speaker",
      "nest_thermostat_gen_3",
      "egg_alt",
      "theaters",
      "sports_tennis",
      "piano",
      "toys",
      "camping",
      "kettle",
      "rowing",
      "cake",
      "bed",
      "mop",
      "sports_basketball",
      "highlight",
      "local_laundry_service",
      "iron",
      "umbrella",
      "floor_lamp",
      "camping",
      "speaker",
    ])
  );
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIconList(JSON.stringify(shuffle(JSON.parse(iconList))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pb-80 sm:pb-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
              Next-gen home inventory and personal finances
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Ever been stuck at the grocery store wondering what you need?
              Smartlist helps you organize your home&apos;inventory, expenses,
              task, and more.
            </p>
            <a
              href="#"
              className="mt-5 inline-block text-center bg-gradient-to-br from-orange-400 to-orange-900 rounded-2xl py-3 px-8 font-medium text-white hover:bg-green-700 outline-none mr-4 focus:ring ring-green-500 focus:ring-green-500 teal"
            >
              Get started
            </a>
            <a
              href="#"
              className="mt-5 inline-block text-center bg-gradient-to-br from-indigo-400 to-indigo-900 rounded-2xl py-3 px-8 font-medium text-white hover:bg-indigo-700 outline-none focus:ring ring-indigo-500 focus:ring-indigo-500 teal"
            >
              Tell me more!
            </a>
          </div>
          <div>
            <div className="mt-[50px] -ml-[170px] md:-ml-0">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-4">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[0]} />
                      <IconItem icon={JSON.parse(iconList)[1]} />
                      <IconItem icon={JSON.parse(iconList)[2]} />
                      <IconItem icon={JSON.parse(iconList)[3]} />
                      <IconItem icon={JSON.parse(iconList)[4]} />
                      <IconItem icon={JSON.parse(iconList)[5]} />
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[6]} />
                      <IconItem icon={JSON.parse(iconList)[7]} />
                      <IconItem icon={JSON.parse(iconList)[8]} />
                      <IconItem icon={JSON.parse(iconList)[9]} />
                      <IconItem icon={JSON.parse(iconList)[10]} />
                      <IconItem icon={JSON.parse(iconList)[11]} />
                    </div>
                    <div className="hide-on-mobile flex flex-shrink-0 grid gap-y-6 lg:gap-y-4">
                      <div className="w-80 h-52 rounded-[35px] bg-gray-200 items-center flex px-9 overflow-hidden sm:opacity-0 lg:opacity-100 text-gray-900">
                        <div className="w-full">
                          <h4 className="text-lg mb-2 text-gray-500">
                            This month
                          </h4>
                          <p className="text-sm text-gray-400">Groceries</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-gray-400">
                            <div className="w-[72%] h-[6px] bg-gray-600 rounded-xl"></div>
                          </div>

                          <p className="text-sm text-gray-400">Gym</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-red-300">
                            <div className="w-[90%] h-[6px] bg-red-600 rounded-xl"></div>
                          </div>

                          <p className="text-sm text-gray-400">Taxi</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-gray-400">
                            <div className="w-[12%] h-[6px] bg-gray-600 rounded-xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[12]} />
                        <IconItem icon={JSON.parse(iconList)[13]} />
                        <IconItem icon={JSON.parse(iconList)[14]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[15]} />
                        <IconItem icon={JSON.parse(iconList)[16]} />
                        <IconItem icon={JSON.parse(iconList)[17]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[18]} />
                        <IconItem icon={JSON.parse(iconList)[19]} />
                        <IconItem icon={JSON.parse(iconList)[20]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[21]} />
                        <IconItem icon={JSON.parse(iconList)[22]} />
                        <IconItem icon={JSON.parse(iconList)[23]} />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[41]} />
                      <IconItem icon={JSON.parse(iconList)[42]} />
                      <IconItem icon={JSON.parse(iconList)[43]} />
                      <IconItem icon={JSON.parse(iconList)[44]} />
                      <IconItem icon={JSON.parse(iconList)[45]} />
                      <IconItem icon={JSON.parse(iconList)[46]} />
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[24]} />
                      <IconItem icon={JSON.parse(iconList)[25]} />
                      <IconItem icon={JSON.parse(iconList)[26]} />
                      <IconItem icon={JSON.parse(iconList)[27]} />
                      <IconItem icon={JSON.parse(iconList)[28]} />
                      <IconItem icon={JSON.parse(iconList)[29]} />
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[30]} />
                      <IconItem icon={JSON.parse(iconList)[31]} />
                      <IconItem icon={JSON.parse(iconList)[32]} />
                      <IconItem icon={JSON.parse(iconList)[33]} />
                      <IconItem icon={JSON.parse(iconList)[34]} />
                      <IconItem icon={JSON.parse(iconList)[35]} />
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[35]} />
                      <IconItem icon={JSON.parse(iconList)[36]} />
                      <IconItem icon={JSON.parse(iconList)[37]} />
                      <IconItem icon={JSON.parse(iconList)[38]} />
                      <IconItem icon={JSON.parse(iconList)[39]} />
                      <IconItem icon={JSON.parse(iconList)[40]} />
                    </div>
                    <div className="sm:hidden flex-shrink-0 grid gap-y-6 lg:gap-y-4">
                      <div className="w-80 h-52 rounded-[35px] bg-gray-200 items-center flex px-9 overflow-hidden sm:opacity-0 lg:opacity-100 text-gray-900">
                        <div className="w-full">
                          <h4 className="text-lg mb-2 text-gray-500">
                            This month
                          </h4>
                          <p className="text-sm text-gray-400">Groceries</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-gray-400">
                            <div className="w-[72%] h-[6px] bg-gray-600 rounded-xl"></div>
                          </div>

                          <p className="text-sm text-gray-400">Gym</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-red-300">
                            <div className="w-[90%] h-[6px] bg-red-600 rounded-xl"></div>
                          </div>

                          <p className="text-sm text-gray-400">Taxi</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-gray-400">
                            <div className="w-[12%] h-[6px] bg-gray-600 rounded-xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[12]} />
                        <IconItem icon={JSON.parse(iconList)[13]} />
                        <IconItem icon={JSON.parse(iconList)[14]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[15]} />
                        <IconItem icon={JSON.parse(iconList)[16]} />
                        <IconItem icon={JSON.parse(iconList)[17]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[18]} />
                        <IconItem icon={JSON.parse(iconList)[19]} />
                        <IconItem icon={JSON.parse(iconList)[20]} />
                      </div>
                      <div className="flex gap-4">
                        <IconItem icon={JSON.parse(iconList)[21]} />
                        <IconItem icon={JSON.parse(iconList)[22]} />
                        <IconItem icon={JSON.parse(iconList)[23]} />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[24]} />
                      <IconItem icon={JSON.parse(iconList)[25]} />
                      <IconItem icon={JSON.parse(iconList)[26]} />
                      <IconItem icon={JSON.parse(iconList)[27]} />
                      <IconItem icon={JSON.parse(iconList)[28]} />
                      <IconItem icon={JSON.parse(iconList)[29]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Track & review your expenses",
    description: "Set financial goals and budgets by tracking your expenses.",
    icon: GlobeAltIcon,
  },
  {
    name: "Organize your items",
    description:
      "Build up your inventory by creating rooms and organizing your items",
    icon: ScaleIcon,
  },
  {
    name: "Search your home",
    description:
      "Quickly find items in your home by searching for them by name or category",
    icon: LightningBoltIcon,
  },
  {
    name: "Sync your inventory",
    description:
      "Invite your family to share your inventory and lists with them",
    icon: AnnotationIcon,
  },
  {
    name: "Access on any device",
    description:
      "Access your home from your phone, tablet, computer, or with our web app",
    icon: AnnotationIcon,
  },
];

function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-green-600 font-semibold">
            In a nutshell
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Smartlist helps you...
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
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

export default function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <div className="fade" />
      <Features />
      <CallToAction />
    </>
  );
}
