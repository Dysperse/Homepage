import React from "react";
import useSWR from "swr";
import Link from "next/link";

function Support({ data }: any) {
  const [filteredItems, setFilteredItems] = React.useState(data);
  const originalItems = data;

  return (
    <label className="block">
      <input
        type="text"
        autoFocus={true}
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
      {filteredItems.map((article, key) => {
        return (
          <div className="max-w-2xl mx-auto my-1">
            <Link
              href={"/support/articles/" + article.slug}
              key={key.toString()}
            >
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
  const { data, error } = useSWR("/supportArticles/articles.json", () =>
    fetch("/supportArticles/articles.json").then((r) => r.json())
  );
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-center mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
        Support
        <br />
        &nbsp;
      </h1>{" "}
      {data ? <Support data={data} /> : "Loading..."}
      {error && <>An error occured. Please try again later</>}
    </div>
  );
}
