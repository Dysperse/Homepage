import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "500", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="grid sm:grid-cols-2 bg-black mt-10 text-white px-5 sm:px-16 py-10 sm:py-12">
      <div>
        <h3 className="text-2xl font-black" style={bricolage.style}>
          #dysperse
        </h3>
        <div className="flex gap-5 mt-2">
          <Link
            href="https://instagram.com/dysperse"
            target="_blank"
            className="text-lg font-semibold"
          >
            instagram
          </Link>
          <Link
            href="https://github.com/dysperse"
            target="_blank"
            className="text-lg font-semibold"
          >
            open source
          </Link>
          <Link
            href="https://status.dysperse.com"
            target="_blank"
            className="text-lg font-semibold"
          >
            status
          </Link>
          <Link
            href="https://blog.dysperse.com/privacy-policy"
            target="_blank"
            className="text-lg font-semibold"
          >
            privacy
          </Link>
          <Link
            href="https://blog.dysperse.com/terms-of-service"
            target="_blank"
            className="text-lg font-semibold"
          >
            terms
          </Link>
        </div>
        <p className="mt-2 opacity-50">
          © {new Date().getFullYear()}{" "}
          <span className="ml-2">Proudly made in the US</span>. A project by{" "}
          <Link
            className="text-blue-500 font-bold"
            href="https://bymanu.me?utm_source=dysperse.com"
          >
            Manu
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center opacity-50 mt-3">
          Dysperse couldn't be free without the help of our amazing sponsors
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <Link
            href="https://neon.tech?utm_source=dysperse.com"
            target="_blank"
          >
            <Image
              src="/sponsors/neon.svg"
              alt="neon.tech logo"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://cloudflare.com?utm_source=dysperse.com"
            target="_blank"
          >
            <Image
              src="/sponsors/cloudflare.svg"
              alt="neon.tech logo"
              width={180}
              height={60}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
