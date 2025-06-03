import { Emoji } from "../../Emoji";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { collectionCategories } from "../categories";
import { ProfilePicture } from "../ProfilePicture";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { Filter } from "bad-words";
import { Button } from "@/components/ui/button";

export const dynamicParams = true; // or false, to 404 on unknown paths
export const revalidate = 60; // 1 hour

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const template = await getTemplate(id);

  if (template)
    return {
      title: `${template.name} • Dysperse templates`,
      description:
        template.description ||
        "Browse templates curated by the community to inspire your next big idea.",
      authors: {
        name: template.createdBy.profile?.name,
      },
      keywords: [
        "Dysperse",
        "Dysverse",
        "templates",
        ...template.labels.map((label: any) => label.name),
      ],
      category: template.category,
      publisher: "#dysverse • by Dysperse",
      openGraph: {
        images: [`https://og.dysperse.com/${id}`],
        title: `${template.name} • Dysperse templates`,
        description:
          template.description ||
          "Browse templates curated by the community to inspire your next big idea.",
      },
    };
  else {
    return {};
  }
}

function Back() {
  return (
    <Link legacyBehavior href="/templates">
      <Button className="m-[-4px] py-1 px-2 rounded" slot="a" variant="outline">
        <span className="material-symbols-rounded">west</span> Back to templates
      </Button>
    </Link>
  );
}

export default async function Page({ params: { id } }: any) {
  const template = await getTemplate(id);

  if (!template)
    return (
      <div className="pt-20">
        <Back />
        <h1 className="text-4xl font-extrabold mt-2 mb-1">404</h1>
        <h2 className="text-2xl font-extrabold">Template not found</h2>
      </div>
    );

  if (template.offensive)
    return (
      <div className="pt-20">
        <Back />
        <h1 className="text-3xl font-extrabold">
          We&apos;ve hidden this template for containing offensive content.
        </h1>
      </div>
    );

  return (
    <main className="pt-20 max-w-5xl mx-auto px-5 xl:px-0 w-full">
      <Back />
      <div>
        {template.category && (
          <div className="flex items-center mt-3 px-2 py-1.5 border border-gray-300 rounded-full">
            <span className="material-symbols-rounded pr-2">
              {collectionCategories.find((c) => c.text === template.category)
                ?.icon || "help"}
            </span>
            {template.category}
          </div>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            {template?.name}
          </h1>
          <Button
            asChild
            className="h-auto uppercase rounded-full py-3 px-7 font-black ml-auto mt-5"
          >
            <a href={`https://go.dysperse.com/template/${id}`}>
              Get&nbsp;template
            </a>
          </Button>
        </div>
        <ProfilePicture template={template} />
        <h2 className="text-xl font-extrabold mb-1 mt-5">
          {template.labels.length} label
          {template.labels.length !== 1 ? "s" : ""}
        </h2>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {template.labels.map((label: any) => (
            <div
              key={label.name}
              className="flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-gray-300 gap-2"
            >
              <Emoji emoji={label.emoji} size={24} />
              {label.name}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-extrabold mb-1 mt-5">Description</h2>
        <Markdown remarkPlugins={[remarkGfm]}>
          {template.description || "No description provided"}
        </Markdown>
        <h2 className="text-xl font-extrabold mb-1 mt-5">Preview</h2>
        <div className="bg-gray-800 rounded aspect-[1200/630]">
          <div className="flex gap-1.5 p-2 border-b border-gray-700">
            {["#f73443", "#f7ae00", "#00c900"].map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <img
            alt={`Preview of ${template.name}`}
            src={`https://og.dysperse.com/${id}`}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}

const getTemplate = async (id: string) => {
  const filter = new Filter();
  const data = await fetch(
    "https://api.dysperse.com/dysverse?id=" + encodeURIComponent(id)
  ).then((res) => res.json());

  if (!data?.[0]) return null;
  //   no drugs allowed
  filter.addWords("drugs", "cocaine", "meth", "weed", "heroin", "crack", "lsd");

  // check if the data contains bad words
  if (JSON.stringify(data) !== filter.clean(JSON.stringify(data))) {
    return { offensive: true };
  }

  return data?.[0];
};

