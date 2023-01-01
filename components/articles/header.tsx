import Link from "next/link";

export default function Header({ title }) {
  return (
    <>
      <div
        className="w-full bg-gray-900 flex items-center justify-center flex-col gap-5 pt-[60px] absolute top-0 left-0"
        style={{
          height: "400px",
        }}
      >
        <h1 className="text-4xl font-[700] text-gray-50">{title}</h1>
        <Link href="/support" className="hover:underline text-gray-200">
          &larr; back to all articles
        </Link>
      </div>
      <div
        style={{
          marginBottom: "450px",
        }}
      />
    </>
  );
}
