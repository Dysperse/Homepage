import Link from "next/link";
import MarkdownView from "react-showdown";
import { getData } from "../../api/article";

export default function Home({ id, data }) {
  const title =
    id.replaceAll("-", " ").charAt(0).toUpperCase() +
    id.replaceAll("-", " ").slice(1);
  return (
    <div className="max-w-7xl mx-auto p-5 pb-20">
      <div className="text-blue-900 mt-[100px] md:mt-[200px] text-sm">
        <Link href="/support">
          <a>&larr;&nbsp; Back to articles</a>
        </Link>
        <h1 className="mt-6 text-left font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
          {title}
          <br />
          &nbsp;
        </h1>{" "}
      </div>
      <article
        className="prose lg:prose-lg -mt-7 max-w-[100vw] sm:max-w-3xl"
        dangerouslySetInnerHTML={{ __html: data }}
      ></article>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await getData(context.params.id, context.req.headers.host);

  return {
    props: { id: context.params.id, data: data },
  };
}
