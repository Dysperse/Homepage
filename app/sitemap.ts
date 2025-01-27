import { MetadataRoute } from "next";
import { getTemplates } from "./templates/getTemplates";

const subtractDays = (date: Date, num: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - num);
  return newDate;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await getTemplates({ all: "true" });

  return [
    {
      url: "https://dysperse.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://dysperse.com/download",
      lastModified: subtractDays(new Date(), 1),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dysperse.com/templates",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...templates.map((template: any) => {
      return {
        url: `https://dysperse.com/templates/${template.id}`,
        images: [`https://og.dysperse.com/${template.id}`],
        changeFrequency: "weekly",
        lastModified: new Date(template.createdBy.profile.lastActive),
        priority: 0.5,
      } as MetadataRoute.Sitemap[0];
    }),
  ];
}
