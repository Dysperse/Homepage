import { Metadata } from "next";
import { Home } from "./home";

export const metadata: Metadata = {
  openGraph: {
    images: ["/meta/home.png"],
  },
};

export default function Page() {
  return <Home />;
}
