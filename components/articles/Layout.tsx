import Link from "next/link";
import { Box } from "@mui/material";

export function Layout({ title, children }) {
  return (
    <>
      <div
        className="w-full flex items-center justify-center flex-col gap-4 pt-[60px] absolute top-0 left-0 px-10 text-center"
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
      <Box
        sx={{
          "& img": {
            borderRadius: 5,
          },
        }}
      >
        <div
          style={{
            marginTop: "550px",
            marginBottom: "50px",
          }}
          className="prose mx-auto px-5"
        >
          {children}
        </div>
      </Box>
    </>
  );
}
