import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const jost = Jost({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dysperse",
  description: "Master your momentum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative overflow-x-hidden">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${jost.className} antialiased overflow-x-hidden flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

