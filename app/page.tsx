import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Nutshell from "./Nutshell";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "500", "700"],
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function Hero() {
  return (
    <section className="h-[calc(100vh-100px)] xl:h-screen">
      <div className="items-center flex h-full -mt-5 select-none">
        <div className="-mt-36">
          <h1
            style={{
              ...bricolage.style,
              fontSize: 100,
              fontWeight: 500,
              lineHeight: 1,
            }}
            className="cursor-default"
          >
            <AuroraText>Master</AuroraText> your <br />
            momentum
          </h1>
          <h2 className="text-3xl leading-snug max-w-2xl mb-7 mt-5 cursor-default">
            Meet the sleek, intuitive, and uncomplicated productivity app that
            you've been waiting for.
          </h2>
          <Button
            slot="a"
            // @ts-ignore
            href="https://app.dysperse.com/auth/sign-up"
            target="_blank"
            className="text-2xl p-1 h-16 rounded-full px-12 border-2 border-black"
          >
            <span className="-ml-3 mr-1">I'm intrigued</span>
            <div className="ml-3 w-12 h-12 text-black flex items-center justify-center bg-white rounded-full -mr-10">
              <span className="material-symbols-rounded">north_east</span>
            </div>
          </Button>
          <Button
            slot="a"
            // @ts-ignore
            href="https://app.dysperse.com/auth/sign-up"
            target="_blank"
            className="text-2xl h-16 rounded-full px-12 border-black border-2 ml-3"
            variant="outline"
          >
            Play the demo
            <span className="material-symbols-rounded">joystick</span>
          </Button>
        </div>
        <div
          className="flex-1 overflow-hidden relative"
          style={{
            marginRight: -390,
            position: "relative",
            width: "auto",
            aspectRatio: "2234 / 1981",
          }}
        >
          <Image
            src="/hero.png"
            quality={100}
            loading="lazy"
            fill
            style={{
              aspectRatio: "2234 / 1981",
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            alt="A person holding the Dysperse app in their hand"
          />
        </div>
      </div>

      <div className="absolute top-[100vh] left-0 bg-gray-100 border-y-2 w-full rotate-[-0.5deg] -mt-32 xl:-mt-8">
        <VelocityScroll
          numRows={1}
          className="select-none"
          text={[
            "100% free",
            "Focus widgets",
            "32+ themes",
            "Ad free",
            "Cross platform",
            "Emojis for everything",
            "",
          ]}
        />
      </div>
    </section>
  );
}

function Number({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">
      {children}
    </span>
  );
}

function Footer() {
  return (
    <footer className="grid sm:grid-cols-2 bg-black mt-10 text-white px-5 sm:px-16 py-10 sm:py-12">
      <div>
        <h3 className="text-2xl font-black" style={bricolage.style}>
          #dysperse
        </h3>
        <div className="flex gap-5 mt-2">
          <Link href="/download" className="text-lg font-semibold">
            instagram
          </Link>
          <Link href="/download" className="text-lg font-semibold">
            open source
          </Link>
          <Link href="/status" className="text-lg font-semibold">
            status
          </Link>
          <Link href="/privacy" className="text-lg font-semibold">
            privacy
          </Link>
          <Link href="/terms" className="text-lg font-semibold">
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

function Navbar() {
  return (
    <nav className="h-20 px-16 flex items-center w-full max-w-6xl mx-auto mt-4 mb-7">
      <Image
        alt="Logo"
        className="mr-auto"
        src="/logo.svg"
        width={50}
        height={50}
      />
      <Link
        href="/download"
        className="text-lg font-bold px-4 py-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
      >
        download
      </Link>
      <Link
        href="/faq"
        className="text-lg font-bold px-4 py-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
      >
        faq
      </Link>
      <Link
        href="/download"
        className="-mr-20 text-lg font-bold px-4 py-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
      >
        templates
      </Link>
      <Button
        slot="a"
        // @ts-ignore
        target="_blank"
        href="https://app.dysperse.com"
        variant="outline"
        className="ml-auto text-lg h-12 rounded-full px-6 pr-5 border-black border-2"
      >
        launch
        <span className="material-symbols-rounded">north_east</span>
      </Button>
    </nav>
  );
}

function AiFeatures() {
  return (
    <section className="p-10 border-2 rounded-3xl mt-5">
      <h6 className="text-sm uppercase mb-1 font-bold opacity-60">
        And now, with AI
      </h6>
      <h2 className="text-4xl leading-snug tracking-tight font-extrabold">
        Let Sidekick take the heavy lifting out of your day.
      </h2>
      <h3 className="text-lg font-thin mb-2 opacity-50">
        Connect your preferred AI assistant to Dysperse for no extra cost.
      </h3>
      <div>
        <details>
          <summary className="trigger inline-flex items-center px-3 py-1 mt-2 gap-2 hover:bg-gray-100 active:bg-gray-200 rounded-xl -ml-2 opacity-50 cursor-pointer select-none">
            Taskify emails
          </summary>
        </details>
        <details>
          <summary className="trigger inline-flex items-center px-3 py-1 mt-2 gap-2 hover:bg-gray-100 active:bg-gray-200 rounded-xl -ml-2 opacity-50 cursor-pointer select-none">
            Create collection templates
          </summary>
        </details>
        <details>
          <summary className="trigger inline-flex items-center px-3 py-1 mt-2 gap-2 hover:bg-gray-100 active:bg-gray-200 rounded-xl -ml-2 opacity-50 cursor-pointer select-none">
            Organize tasks
          </summary>
        </details>
      </div>
    </section>
  );
}

function FamiliarUI() {
  return (
    <section className="p-10 border-2 rounded-3xl mt-5 overflow-hidden">
      <div className="flex">
        <div className="flex-[3] -mb-10 mr-10 -ml-32">
          <Image
            src="/tabs.png"
            alt="Person holding Dysperse on an iPad"
            width={3375 / 5}
            height={2256 / 5}
            className="mt-auto"
          />
        </div>
        <div className="flex-[2] flex justify-center flex-col">
          <h6 className="text-sm uppercase mb-1 font-bold opacity-60">
            Intuitive by design
          </h6>
          <h2 className="text-5xl leading-tight tracking-tight font-extrabold">
            Navigate with our browser-inspired design that feels like second
            nature
          </h2>
          <Button className="text-lg mr-auto h-12 rounded-full px-6 pr-5 border-black border-2 mt-5">
            Learn more
            <span className="material-symbols-rounded">north_east</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Poll() {
  return (
    <section className="p-10 border-2 rounded-3xl mt-5 bg-gradient-to-b from-gray-50 to-gray-200">
      <h6 className="text-sm uppercase mb-1 font-bold opacity-60">
        Stay on top w/ dysperse
      </h6>
      <h2 className="text-3xl leading-tight tracking-tight font-extrabold">
        If you had an extra hour in a day, how would you spend it?
      </h2>
      <div className="grid grid-cols-2 gap-2 mt-5">
        {[
          { emoji: "1F4D6", name: "Reading" },
          { emoji: "1F3CB", name: "Exercising" },
          { emoji: "1F4DA", name: "Learning" },
          { emoji: "1F634", name: "Sleeping" },
          { emoji: "1F4BC", name: "Working" },
          { emoji: "1F91D", name: "Socializing" },
        ].map(({ emoji, name }) => (
          <Button
            key={name}
            className="text-lg h-12 rounded-full px-6 border-2 justify-start items-center"
            variant="secondary"
          >
            <img
              src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji?.toLowerCase()}.png`}
              alt={emoji}
              className="w-6 h-6 mr-2"
            />
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={jost.style}>
        <div className="max-w-5xl mx-auto w-full">
          <Hero />
          <Nutshell />
          <FamiliarUI />
          <AiFeatures />
          <Poll />
        </div>
        <Footer />
      </main>
    </>
  );
}

