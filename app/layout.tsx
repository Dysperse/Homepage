import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { slate } from "@radix-ui/colors";
import { createContext } from "react";
import { ClientLayout } from "./client-layout";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
