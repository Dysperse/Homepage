import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import { ClientLayout } from "./ClientLayout";
import { mintDark } from "./themes";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dysperse",
  description: "We're building the future of productivity. Stay tuned",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={jost.className}
        style={{
          background: `url("/bg.svg"), hsl(173, 50%, 6.6%)`,
          overflowX: "hidden",
        }}
      >
        <CssBaseline />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
