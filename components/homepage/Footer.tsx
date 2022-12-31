import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Twitter, Instagram, Github } from "feather-icons-react";

export function Footer() {
  return (
    <Box
      sx={{ background: "#332B2B", color: "#C2ACAC" }}
      className="p-10 relative"
    >
      <Box sx={{ zIndex: 1 }}>
        <Typography variant="h4" className="font-[700] mb-2">
          Carbon
        </Typography>
        <Typography className={"font-[700] my-5 mb-3"}>Quick links</Typography>

        <Link href="/" className="footer-btn">
          Terms of service &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          Privacy policy &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          My dashboard &rarr;
        </Link>
        <Link href="/" className="footer-btn">
          Availability &rarr;
        </Link>

        <Typography className={"font-[700] my-5 mb-3"}>Sponsors</Typography>
        <Link
          href="https://vercel.com/?utm_source=smartlist&utm_campaign=oss"
          className="footer-btn"
        >
          <img
            src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
            alt="Powered by Vercel"
          />
        </Link>

        <Typography className={"font-[700] my-5 mb-3"}>Social</Typography>
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
          href="https://github.com/Smartlist-App"
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
          className="h-[90%] absolute bottom-0 right-0 rounded-tl-3xl"
        />
      </picture>
    </Box>
  );
}
