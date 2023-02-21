import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Twitter, Instagram, Github } from "feather-icons-react";
import { scroll } from "motion";
import { useEffect, useState } from "react";

export function Footer() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const statsContainer = document.getElementById("footer");
    const scrollOptions: any = {
      target: statsContainer,
      offset: ["start end", "400px end"],
    };
    scroll(({ y }) => {
      setScrollPosition(y.progress);
    }, scrollOptions);
  }, []);
  return (
    <Box
      id="footer"
      sx={{ background: "#332B2B", color: "#C2ACAC" }}
      className="p-10 relative"
    >
      <Box sx={{ zIndex: 1 }}>
        <h2 className="font-[700] mb-2 text-4xl">Dysperse</h2>
        <h4 className={"font-[700] my-5 mb-3"}>Quick links</h4>

        <Link href="/articles/terms-of-service" className="footer-btn">
          Terms of service &rarr;
        </Link>
        <Link href="/articles/privacy-policy" className="footer-btn">
          Privacy policy &rarr;
        </Link>
        <Link
          href="https://my.dysperse.com"
          className="footer-btn"
          target="_blank"
        >
          My dashboard &rarr;
        </Link>
        <Link
          href="https://availability.dysperse.com"
          target="_blank"
          className="footer-btn"
        >
          Availability &rarr;
        </Link>

        <h4 className={"font-[700] my-5 mb-3"}>Sponsors</h4>
        <Link
          href="https://vercel.com/?utm_source=smartlist&utm_campaign=oss"
          className="footer-btn w-md"
        >
          <img
            src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
            alt="Powered by Vercel"
          />
        </Link>
        
         <Link
          href="https://neon.tech"
          className="footer-btn w-md"
        >
          <img
            src="/neon.png"
            alt="Neon"
          />
        </Link>

        <h4 className={"font-[700] my-5 mb-3"}>Social</h4>
        <Link
          href="https://twitter.com/getsmartlist"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Twitter />
        </Link>
        <Link
          href="https://instagram.com/getsmartlist"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="https://github.com/Dysperse"
          className="footer-btn inline-flex mr-4"
          target="_blank"
        >
          <Github />
        </Link>
      </Box>
      <picture>
        <img
          src="/footer.svg"
          alt="logo"
          style={{
            // opacity: scrollPosition,
            marginRight: -100 + scrollPosition * 100,
          }}
          className="h-[90%] absolute bottom-0 right-0 hidden-on-mobile"
        />
      </picture>
    </Box>
  );
}
