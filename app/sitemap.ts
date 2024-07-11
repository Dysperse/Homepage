import { MetadataRoute } from "next";
const Filter = require("bad-words");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await getTemplates();
  return [
    {
      url: "https://dysperse.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://dysperse.com/download",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://dysperse.com/templates",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...templates.map((template: any) => {
      return {
        url: `https://dysperse.com/templates/${template.id}`,
        changeFrequency: "weekly",
        priority: 0.8,
      } as MetadataRoute.Sitemap[0];
    }),
  ];
}

const getTemplates = async () => {
  const filter = new Filter();
  filter.addWords("drugs", "cocaine", "meth", "weed", "heroin", "crack", "lsd");

  const data = await fetch("https://api.dysperse.com/dysverse?all=true", {
    cache: "no-cache",
  }).then((res) => res.json());

  return data.filter((template: any) => {
    if (JSON.stringify(template) !== filter.clean(JSON.stringify(template))) {
      return false;
    }
    return true;
  });
};