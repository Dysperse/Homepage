import { Metadata } from "next";
import { Download } from "./client";

export const metadata: Metadata = {
  openGraph: {
    images: ["/meta/download.png"],
  },
};

export default function Page() {
  return <Download />;
}
