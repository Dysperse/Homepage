import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import MarkdownView from "react-showdown";
import NoSSR from "react-no-ssr";

function Render() {
  const url =
    "/supportArticles/" +
    window.location.pathname.split("/support/articles/")[1] +
    ".md";
  const { data, error } = useSWR(url, () => fetch(url).then((r) => r.text()));
  const title =
    window.location.pathname
      .split("/support/articles/")[1]
      .toString()
      .replaceAll("-", " ")
      .charAt(0)
      .toUpperCase() +
    window.location.pathname
      .split("/support/articles/")[1]
      .toString()
      .replaceAll("-", " ")
      .slice(1);
  return (
    <div className="max-w-7xl mx-auto p-5 pb-20">
      <div className="text-blue-900 mt-[100px] md:mt-[200px] text-sm">
        <Link href="/support">
          <a>&larr;&nbsp; Back to articles</a>
        </Link>
        <h1 className="mt-4 text-left font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
          {title}
          <br />
          &nbsp;
        </h1>{" "}
      </div>
      {data && !error ? (
        <article className="prose lg:prose-lg -mt-14">
          <MarkdownView
            markdown={data}
            options={{ tables: true, emoji: true }}
          />
        </article>
      ) : (
        <div className="text-center">Loading...</div>
      )}
      {error && <>An error occured while trying to fetch this article</>}
    </div>
  );
}

export default function Home() {
  return (
    <NoSSR>
      <Render />
    </NoSSR>
  );
}