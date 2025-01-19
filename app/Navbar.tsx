"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-20 px-16 flex items-center w-full max-w-6xl mx-auto mt-4 mb-7">
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
        className={`-mr-20 navbar-link ${
          pathname === "/templates" ? "!bg-gray-200" : ""
        }`}
      >
        templates
      </Link>
      <Button
        slot="a"
        // @ts-ignore
        target="_blank"
        href="https://app.dysperse.com"
        variant="outline"
        className="ml-auto text-lg h-12 rounded-full px-6 pr-5 border-black border-2"
      >
        launch
        <span className="material-symbols-rounded">north_east</span>
      </Button>
    </nav>
  );
}
