"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      <nav
        className={
          "h-20 px-4 flex items-center w-full max-w-6xl mx-auto mt-5 mb-7 fixed top-0 left-[50%] backdrop-blur-lg z-50 rounded-full border-2 border-transparent " +
          (hasScrolled && " shadow-lg max-w-xl")
        }
        style={{
          transform: "translateX(-50%)",
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
          className={`navbar-link ${
            pathname === "/download" ? "!bg-gray-200" : ""
          }`}
        >
          download
        </Link>
        <Link
          href="https://blog.dysperse.com"
          target="_blank"
          className="navbar-link"
        >
          blog
        </Link>
        <Link
          href="/templates"
          className={` navbar-link ${
            pathname === "/templates" ? "!bg-gray-200" : ""
          }${hasScrolled ? "" : "-mr-12"}`}
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
            "ml-auto text-lg h-12 rounded-full px-6 pr-5 border-black border-2" +
            (hasScrolled ? " !bg-black text-white" : "")
          }
          style={{
            transition: "background-color 0.4s, color 0.4s",
          }}
        >
          launch
          <span className="material-symbols-rounded">north_east</span>
        </Button>
      </nav>
      <div className="h-20" />
    </>
  );
}
