import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import { Filter } from "bad-words";
import Link from "next/link";
import { ProfilePicture } from "./ProfilePicture";
import { collectionCategories, collectionViews } from "./categories";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

const bricolage = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["500"],
  subsets: ["latin"],
});

function Views() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-black" style={jost.style}>
        Explore by perspective
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-2 mt-2">
        {Object.keys(collectionViews).map((view) => (
          <Link
            key={view}
            href={`/templates?defaultView=${view}`}
            passHref
            className="flex flex-1"
          >
            <div className="template-filter-card">
              <span className="material-symbols-rounded text-2xl">
                {collectionViews[view]}
              </span>
              <h1 className="capitalize pointer-events-none">{view}</h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-black" style={jost.style}>
        Popular categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2 mt-2">
        {collectionCategories.map((category) => (
          <Link
            key={category.text}
            href={`/templates?category=${category.text}`}
            passHref
            className="flex flex-1"
          >
            <div className="template-filter-card">
              <span className="material-symbols-rounded text-2xl">
                {category.icon}
              </span>
              <h1 className="capitalize pointer-events-none">
                {category.text}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({
  searchParams,
}: any): Promise<Metadata> {
  const hasFilters = Object.keys(searchParams).length > 0;
  const title = hasFilters
    ? capitalizeFirstLetter(
        `${searchParams.category || searchParams.defaultView || ""} templates ${
          searchParams.search ? `for "${searchParams.search}"` : ""
        }`.trim()
      )
    : "Templates • Dysperse";

  return {
    title,
    description:
      "Browse templates curated by the community to inspire your next big idea.",
    keywords: ["Dysperse", "Dysverse", "templates"],
    openGraph: {
      images: ["/meta/dysverse.png"],
      title,
      description:
        "Browse templates curated by the community to inspire your next big idea.",
    },
  };
}

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default async function Page({ searchParams }: any) {
  const hasFilters = Object.keys(searchParams).length > 0;
  const templates = await getTemplates(searchParams);

  return (
    <main className="mx-auto max-w-5xl px-5 xl:px-0 w-full">
      {hasFilters && (
        <Button
          variant="outline"
          slot="a"
          // @ts-ignore
          href="/templates"
          className="mt-10"
        >
          <span className="material-symbols-rounded">west</span>
          Clear filters
        </Button>
      )}
      <h1
        className={`text-5xl mt-10 xl:mt-20 ${
          hasFilters ? "mt-6" : "mt-10"
        } font-black`}
        style={bricolage.style}
      >
        {hasFilters
          ? capitalizeFirstLetter(
              `${
                searchParams.category || searchParams.defaultView || ""
              } templates ${
                searchParams.search ? `for "${searchParams.search}"` : ""
              }`.trim()
            )
          : "Organize anything"}
      </h1>
      <h2 className="mt-2 text-2xl font-thin">
        {hasFilters
          ? `Showing ${templates.length} results`
          : "Discover templates crafted by the community to help you get started on your next big idea"}
      </h2>
      <form className="mt-5" action="/templates" method="get">
        <Input
          name="search"
          placeholder="Find a template..."
          className="w-full !text-xl rounded-full h-auto py-3 px-5"
        />
      </form>

      {!hasFilters && <Categories />}
      {!hasFilters && <Views />}

      {!hasFilters && (
        <h3 className="mt-10 text-3xl font-black" style={jost.style}>
          Latest
        </h3>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
        {templates.map((template: any) => (
          <Link href={`/templates/${template.id}`} key={template.id}>
            <article className="bg-white rounded-3xl overflow-hidden border-2 active:scale-95 transition-transform">
              <img
                alt={`Preview of ${template.name}`}
                src={`https://og.dysperse.com/${
                  template.id
                }?${new URLSearchParams({
                  isLight: "true",
                  hideLogo: "true",
                  hideHeader: "true",
                  baseColor: "81,  80.0%",
                })}`}
                width={1200}
                height={630}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1200/630",
                }}
                className="rounded-t-lg rounded-b-none"
              />
              <div className="p-5">
                <h3 className="text-2xl font-black truncate">
                  {template.name}
                </h3>
                <h4 className="text-lg truncate">
                  <span className="capitalize">{template.defaultView}</span>
                  {template.category && <> &bull; {template.category}</>}
                </h4>
                <ProfilePicture template={template} />
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

const getTemplates = async (searchParams: any) => {
  const filter = new Filter();
  const data = await fetch(
    `https://api.dysperse.com/dysverse?${new URLSearchParams(
      JSON.parse(JSON.stringify(searchParams))
    )}`,
    { cache: "no-cache" }
  ).then((res) => res.json());

  return data.filter((template: any) => !filter.isProfane(template.title));
};
