import { Filter } from "bad-words";

export const getTemplates = async (searchParams: any) => {
  const filter = new Filter();
  const url = `https://api.dysperse.com/dysverse?${new URLSearchParams(
    JSON.parse(JSON.stringify(searchParams))
  )}`;
  console.log(url);
  const data = await fetch(url, { cache: "no-cache" }).then((res) =>
    res.json()
  );

  return data.filter((template: any) => !filter.isProfane(template.title));
};
