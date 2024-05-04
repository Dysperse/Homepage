import { Metadata } from "next";
import { Download } from "./client";

export const metadata: Metadata = {
  openGraph: {
    images: ["https://dysperse.com/meta/home.png"],
  },
};

export default function Page() {
  return <Download />;
}
