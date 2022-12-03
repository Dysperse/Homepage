import Link from "next/link";
import Head from "next/head";
import { getData } from "../../api/article";

export default function Home({ title, meta, data }) {
  return (
    <div className="max-w-7xl mx-auto p-5 pb-20">
      <Head>
        <meta
          name="description"
          content={
            meta
              .replace(/(\r\n|\n|\r)/gm, "")
              .substring(0, 150)
              .trim() + "..."
          }
        />
        <meta
          name="og:description"
          content={
            meta
              .replace(/(\r\n|\n|\r)/gm, "")
              .substring(0, 150)
              .trim() + "..."
          }
        />
        <meta
          name="twitter:description"
          content={
            meta
              .replace(/(\r\n|\n|\r)/gm, "")
              .substring(0, 150)
              .trim() + "..."
          }
        />
        <title>{title}</title>
      </Head>
      <div className="text-blue-900 mt-[100px] md:mt-[200px] text-sm">
        <Link href="/support">
          <a>&larr;&nbsp; Back to articles</a>
        </Link>
        <h1 className="mt-6 text-left font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-neutral-500 to-neutral-900 tracking-tight sm:tracking-tight sm:text-6xl dm-serif">
          {title}
          <br />
          &nbsp;
        </h1>{" "}
      </div>
      <article
        className="prose lg:prose-lg -mt-7 max-w-[100vw] sm:max-w-3xl"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await getData(context.params.id, context.req.headers.host);

  const tmp = data
    .replace(/<style[^>]*>.*<\/style>/gm, "")
    .replace(/<script[^>]*>.*<\/script>/gm, "")
    .replace(/<[^>]+>/gm, "")
    .replace(/([\r\n]+ +)+/gm, "");

  const title =
    context.params.id.replaceAll("-", " ").charAt(0).toUpperCase() +
    context.params.id.replaceAll("-", " ").slice(1);

  return {
    props: {
      slug: context.params.id,
      title: title,
      data: data,
      meta: tmp,
    },
  };
}
