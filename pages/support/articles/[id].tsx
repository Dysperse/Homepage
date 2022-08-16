import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-left mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
        Creating an item
        <br />
        &nbsp;
      </h1>{" "}
      <Link href="/support">
        <a className="tet-blue-900 text-sm">Back to articles</a>
      </Link>
    </div>
  );
}
