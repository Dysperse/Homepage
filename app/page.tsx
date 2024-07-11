import { Metadata } from "next";
import { Home } from "./home";

export const metadata: Metadata = {
  description: "Productivity is personal. Let #dysperse be the catalyst.",
  title: "Dysperse • Productivity for Humans",
  keywords: ["Dysperse", "Productivity", "Personal", "Organization", "To-do"],
  openGraph: {
    images: ["/meta/home.png"],
    description: "Productivity is personal. Let #dysperse be the catalyst.",
    title: "Dysperse • Productivity for Humans",
  },
};

export default function Page() {
  return <Home />;
}
