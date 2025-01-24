"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Navbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="px-2 fixed top-0 left-[50%] w-full z-50"
        style={{ transform: "translateX(-50%)" }}
      >
        <nav
          className={
            "h-20 px-4 flex items-center w-full max-w-md sm:max-w-2xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-[78vw] mx-auto mt-7 mb-7 backdrop-blur-lg z-50 rounded-full border-2 border-transparent " +
            (hasScrolled && " shadow-lg sm:!max-w-xl xl:!max-w-2xl")
          }
          style={{
            transition: "border 0.4s, box-shadow 0.4s, max-width 0.4s",
            ...(hasScrolled && {
              backgroundColor: "rgba(255,255,255,0.9)",
              borderColor: "black",
            }),
          }}
        >
          <Link
            href="/"
            className="mr-auto active:scale-95 transition-transform inline-block duration-75"
          >
            <Image alt="Logo" src="/logo.svg" width={50} height={50} />
          </Link>

          <Link
            href="/download"
            className={`hidden sm:inline-flex navbar-link ${
              pathname === "/download" ? "!bg-gray-200" : ""
            }`}
          >
            download
          </Link>
          <Link
            href="https://blog.dysperse.com"
            target="_blank"
            className="hidden sm:inline-flex navbar-link"
          >
            blog
          </Link>
          <Link
            href="/templates"
            className={`hidden sm:inline-flex navbar-link ${
              hasScrolled ? "" : "-mr-14"
            } ${pathname === "/templates" ? "!bg-gray-200" : ""}`}
            style={{ transition: "all 0.2s, margin-right 0.4s" }}
          >
            templates
          </Link>
          <Button
            slot="a"
            // @ts-ignore
            target="_blank"
            href="https://app.dysperse.com"
            variant="outline"
            className={
              "hidden sm:inline-flex ml-auto text-lg h-12 rounded-full px-6 pr-5 border-black border-2" +
              (hasScrolled ? " !bg-black !text-white" : "")
            }
            style={{
              transition: "background-color 0.4s, color 0.4s, transform 0.4s",
            }}
          >
            launch
            <span className="material-symbols-rounded">north_east</span>
          </Button>

          <Drawer>
            <DrawerTrigger>
              <Button
                size="icon"
                variant="ghost"
                className="!text-black mr-2 sm:hidden"
              >
                <span className="material-symbols-rounded">menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerDescription className="flex flex-col">
                  <DrawerClose asChild>
                    <Link
                      href="/"
                      className="active:scale-95 mb-2 ml-2 transition-transform inline-flex mr-auto"
                    >
                      <Image
                        alt="Logo"
                        src="/logo.svg"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <Link
                      href="/download"
                      className="navbar-link text-left !bg-transparent inline-flex mr-auto"
                    >
                      download
                    </Link>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <Link
                      href="https://blog.dysperse.com"
                      target="_blank"
                      className="navbar-link text-left !bg-transparent inline-flex mr-auto"
                    >
                      blog
                    </Link>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <Link
                      href="/templates"
                      className="navbar-link text-left !bg-transparent inline-flex mr-auto"
                    >
                      templates
                    </Link>
                  </DrawerClose>

                  <DrawerClose asChild>
                    <Button
                      slot="a"
                      // @ts-ignore
                      target="_blank"
                      href="https://app.dysperse.com"
                      variant="outline"
                      className="text-lg mx-3 mt-3 h-12 rounded-full px-6 pr-5 border-black border-2"
                    >
                      launch
                      <span className="material-symbols-rounded">
                        north_east
                      </span>
                    </Button>
                  </DrawerClose>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
      <div className="h-32 xl:h-26" />
    </>
  );
}
