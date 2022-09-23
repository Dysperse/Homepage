import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { articles } from "../../components/articles";
import Head from "next/head";
function Support({ data }: any) {
  const [filteredItems, setFilteredItems] = React.useState(data);
  const originalItems = data;

  return (
    <label className="block">
      <input
        type="text"
        autoFocus
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            e.target.blur();
          }
        }}
        onKeyUp={(e: any) => {
          setFilteredItems(
            originalItems.filter(
              (article) =>
                article.title
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                article.preview
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
            )
          );
        }}
        className="-mt-5 mb-10 max-w-lg mx-auto block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        placeholder="What can we help you with?"
      />
      {filteredItems.length === 0 && (
        <div className="text-center">No articles found</div>
      )}
      {filteredItems.map((article: any, key: number) => {
        return (
          <div className="max-w-2xl mx-auto my-1" key={key.toString()}>
            <Link href={"/support/articles/" + article.slug}>
              <a className="px-5 py-3 block rounded-xl focus:bg-gray-200 my-1 hover:bg-gray-100">
                <h2 className="text-gray-900 text-lg mb-1">{article.title}</h2>
                <h5 className="text-gray-500">{article.preview}</h5>
              </a>
            </Link>
            {key !== filteredItems.length - 1 && <div className="border-b" />}
          </div>
        );
      })}
    </label>
  );
}

export default function Home() {
  return (
    <div className="max-w-7xl p-5 mx-auto pb-20">
      <Head>
        <title>Support - Smartlist</title>
        <meta name="title" content="Support - Smartlist" />
        <meta
          name="description"
          content="Welcome to the Smartlist knowledge base"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/support" />
        <meta property="og:title" content="Support - Smartlist" />
        <meta
          property="og:description"
          content="Welcome to the Smartlist knowledge base"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartlist.tech/support" />
        <meta property="twitter:title" content="Support - Smartlist" />
        <meta
          property="twitter:description"
          content="Welcome to the Smartlist knowledge base"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
        />
      </Head>
      <h1 className="text-center mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
        Support
        <br />
        &nbsp;
      </h1>{" "}
      <Support data={articles} />
    </div>
  );
}
