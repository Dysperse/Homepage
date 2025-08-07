import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";

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

const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-300px)] p-10 relative">
      <div className="max-w-5xl px-5 xl:px-0 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-5xl mt-10 font-black" style={bricolage.style}>
            Download the apps
          </h1>
          <h2 className="text-xl mt-3">
            Download Dysperse on all of your devices
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
            {[
              { icon: "globe", href: "https://go.dysperse.com", label: "Web" },
              {
                icon: "grid_view",
                href: "https://click.dysperse.com/ms",
                label: "Windows",
              },
              {
                icon: "desktop_mac",
                href: "https://click.dysperse.com/mac",
                label: "Mac",
              },
              {
                icon: "android",
                href: "https://click.dysperse.com/android",
                label: "Android",
              },
              {
                icon: "ios",
                href: "https://click.dysperse.com/ios",
                label: "iPhone & iPad",
              },
            ].map((link) => (
              <Button
                key={link.label}
                slot="a"
                // @ts-ignore
                href={link.comingSoon ? undefined : link.href}
                target={link.comingSoon ? undefined : "_blank"}
                className={
                  "download-card" +
                  (link.comingSoon ? " opacity-50 pointer-events-none" : "")
                }
                disabled={link.comingSoon}
              >
                <span
                  className="material-symbols-rounded"
                  style={{
                    fontSize: 30,
                    fontVariationSettings:
                      link.icon === "desktop_mac" ? undefined : "'FILL' 1",
                  }}
                >
                  {link.icon}
                </span>
                {link.label}
                {link.comingSoon && (
                  <span className="text-sm text-red-500 mt-1">Coming soon</span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-xl mt-12">
          <h2 className="text-4xl font-black" style={bricolage.style}>
            Get the browser extensions
          </h2>
          <h3 className="text-xl mt-3">
            Quickly save websites, articles, and more as tasks
          </h3>

          <div className="grid grid-cols-3 gap-2 mt-5">
            <Button
              slot="a"
              //   @ts-ignore
              href="https://click.dysperse.com/chrome-extension"
              target="_blank"
              className="download-card"
            >
              Chrome
            </Button>
            <Button
              slot="a"
              //   @ts-ignore
              href="https://click.dysperse.com/firefox-add-on"
              target="_blank"
              className="download-card"
            >
              Edge
            </Button>
            <Button
              slot="a"
              //   @ts-ignore
              href="https://click.dysperse.com/edge-extension"
              target="_blank"
              className="download-card"
            >
              Firefox
            </Button>
          </div>
        </div>

        <div
          style={{ aspectRatio: "1661/1843" }}
          className="absolute bottom-0 right-0 hidden lg:flex xl:h-full -mb-10 max-w-md md:max-w-lg xl:w-[unset] xl:max-w-[unset] w-full"
        >
          <Image alt="Download" src="/download.png" fill />
        </div>
      </div>
    </main>
  );
}

