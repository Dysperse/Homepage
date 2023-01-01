import Link from "next/link";

export function Layout({ title, children }) {
  return (
    <>
      <div
        className="w-full flex items-center justify-center flex-col gap-4 pt-[60px] absolute top-0 left-0"
        style={{
          height: "500px",
          background: "linear-gradient(10deg, #5D4444 0%, #382b2b 100%)",
        }}
      >
        <h1 className="text-5xl font-[700] text-gray-50">{title}</h1>
        <Link
          href="/support"
          className="hover:underline text-gray-200 focus:ring-2 px-3 py-1 rounded-xl ring-white"
        >
          &larr; back to all articles
        </Link>
      </div>
      <div
        style={{
          marginTop: "550px",
          marginBottom: "50px",
        }}
        className="prose mx-auto"
      >
        {children}
      </div>
    </>
  );
}
