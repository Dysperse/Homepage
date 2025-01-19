import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "500", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="bg-black mt-10 text-white px-5 ">
      <div className=" max-w-xl mx-auto sm:px-16 py-10 sm:py-12">
        <div>
          <h3
            className="text-5xl font-black cursor-default -my-5 -mb-2"
            style={bricolage.style}
          >
            <TextHoverEffect text="#dysperse" />
          </h3>
          <div className="flex gap-5 justify-center mb-3">
            <Link
              href="https://instagram.com/dysperse"
              target="_blank"
              className="text-xl font-medium text-center opacity-50"
            >
              instagram
            </Link>
            <Link
              href="https://github.com/dysperse"
              target="_blank"
              className="text-xl font-medium text-center opacity-50"
            >
              open source
            </Link>
            <Link
              href="https://status.dysperse.com"
              target="_blank"
              className="text-xl font-medium text-center opacity-50"
            >
              status
            </Link>
            <Link
              href="https://blog.dysperse.com/privacy-policy"
              target="_blank"
              className="text-xl font-medium text-center opacity-50"
            >
              privacy
            </Link>
            <Link
              href="https://blog.dysperse.com/terms-of-service"
              target="_blank"
              className="text-xl font-medium text-center opacity-50"
            >
              terms
            </Link>
          </div>
          <p className="mt-2 opacity-50 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="ml-2">Proudly made in the USA</span> by{" "}
            <Link
              className="text-blue-500 font-bold"
              href="https://bymanu.me?utm_source=dysperse.com"
            >
              Manu
            </Link>
          </p>

          <div className="flex justify-center gap-5 mt-5">
            <p className="opacity-50">Sponsored by</p>
            <Link
              href="https://neon.tech?utm_source=dysperse.com"
              target="_blank"
            >
              <Image
                src="/sponsors/neon.svg"
                alt="neon.tech logo"
                width={30}
                height={30}
                className="hover:grayscale-0 grayscale"
              />
            </Link>
            <Link
              href="https://cloudflare.com?utm_source=dysperse.com"
              target="_blank"
            >
              <Image
                src="/sponsors/cloudflare.svg"
                alt="neon.tech logo"
                width={100}
                height={40}
                className="hover:grayscale-0 grayscale"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
