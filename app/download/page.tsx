import { Metadata } from "next";
import { Download } from "./client";

export const metadata: Metadata = {
  title: "Get the apps • Dysperse",
  description: "Download #dysperse on all your devices.",
  keywords: ["Dysperse", "Download", "Apps"],
  openGraph: {
    images: ["/meta/download.png"],
    title: "Get the apps • Dysperse",
    description: "Download #dysperse on all your devices.",
  },
};

export default function Page() {
  return <Download />;
}
