import { ClientLayout } from "./client-layout";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="favicon" href="/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ClientLayout>{props.children}</ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
