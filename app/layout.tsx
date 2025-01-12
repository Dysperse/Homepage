import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"
        />
      </head>
      <body
        className={`${jost.className} antialiased overflow-x-hidden flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

