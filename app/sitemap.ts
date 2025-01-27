import { MetadataRoute } from "next";
import { getTemplates } from "./templates/getTemplates";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await getTemplates({ all: "true" });

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
        images: [`https://og.dysperse.com/${template.id}`],
        changeFrequency: "weekly",
        lastModified: new Date(template.createdBy.profile.lastActive),
        priority: 1,
      } as MetadataRoute.Sitemap[0];
    }),
  ];
}
