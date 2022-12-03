import React from "react";
import { IconItem } from "../components/IconItem";
import { shuffle } from "../pages/index";

export function Header() {
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
            <h1
              className="mt-[100px] md:mt-[120px] font text-transparent text-6xl mb-2 tracking-tight sm:tracking-tight sm:text-7xl dm-serif"
              style={{
                color: "hsl(240,11%,10%)",
              }}
            >
              The only productivity app you&apos;ll ever need.
            </h1>
            <p className="mt-7 text-lg text-neutral-900">
              Ever stuck at the grocery store wondering what to buy? Having
              trouble managing your tasks in a single place? Want to set goals
              in life but don&apos;t know where to start?{" "}
              <b>
                Carbon is an all-in-one productivity app which will help you
                manage your life.
              </b>
            </p>
            <a
              rel="noreferrer"
              href="https://my.smartlist.tech/signup"
              target="_blank"
              className="mt-5 inline-block text-center bg-gradient-to-br from-gray-400 to-gray-900 rounded-3xl py-3 px-8 font-medium text-white outline-none mr-4 focus:ring ring-offset-2 ring-gray-500"
            >
              Get started
            </a>
            <a
              href="#/features"
              className="mt-5 inline-block text-center bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl py-3 px-8 font-medium text-gray-900 hover:bg-gray-100 outline-none focus:ring ring-offset-2 ring-gray-500"
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
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[12]} />
                      <IconItem icon={JSON.parse(iconList)[13]} />
                      <IconItem icon={JSON.parse(iconList)[14]} />
                      <IconItem icon={JSON.parse(iconList)[15]} />
                      <IconItem icon={JSON.parse(iconList)[16]} />
                      <IconItem icon={JSON.parse(iconList)[17]} />
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <IconItem icon={JSON.parse(iconList)[18]} />
                      <IconItem icon={JSON.parse(iconList)[19]} />
                      <IconItem icon={JSON.parse(iconList)[20]} />
                      <IconItem icon={JSON.parse(iconList)[21]} />
                      <IconItem icon={JSON.parse(iconList)[22]} />
                      <IconItem icon={JSON.parse(iconList)[23]} />
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
                            <div className="w-[72%] h-[6px] bg-gray-600 rounded-xl" />
                          </div>

                          <p className="text-sm text-gray-400">Gym</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-red-300">
                            <div className="w-[90%] h-[6px] bg-red-600 rounded-xl" />
                          </div>

                          <p className="text-sm text-gray-400">Taxi</p>
                          <div className="w-full h-[6px] mt-1 mb-3 rounded-xl bg-gray-400">
                            <div className="w-[12%] h-[6px] bg-gray-600 rounded-xl" />
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
