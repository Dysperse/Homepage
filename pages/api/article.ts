// pages/api/article

export async function getData(path: string, host: string) {
  const response = await fetch(
    (host.includes("127.0.0.1") ? "http://" : "https://") +
      host +
      "/supportArticles/" +
      path +
      ".md"
  );
  const txt = await response.text();
  return txt;
}

export default async function handler(req, res) {
  const txt = await getData(req.query.path, req.headers.host);
  res.status(200).json(txt);
}
