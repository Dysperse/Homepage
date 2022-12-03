import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Head from "next/head";
export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

import { Announcement } from "../components/Announcement";
import { FrequentlyAskedQuestions } from "../components/FrequentlyAskedQuestions";
import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { CallToAction } from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Carbon &bull; The only productivity app you&apos;ll ever need!
        </title>
        <meta
          name="title"
          content="Carbon &bull; The only productivity app you'll ever need!"
        />
        <meta
          name="description"
          content="Ever stuck at the grocery store wondering what to buy? Having trouble managing your tasks in a single place? Want to set goals in life but don't know where to start? Carbon is an all-in-one productivity app which will help you manage your life."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/" />
        <meta
          property="og:title"
          content="Carbon &bull; The only productivity app you'll ever need!"
        />
        <meta
          property="og:description"
          content="Ever stuck at the grocery store wondering what to buy? Having trouble managing your tasks in a single place? Want to set goals in life but don't know where to start? Carbon is an all-in-one productivity app which will help you manage your life."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/HdSgxVC/The-only-productivity-app-you-ll-ever-need.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartlist.tech/" />
        <meta
          property="twitter:title"
          content="Carbon &bull; The only productivity app you'll ever need!"
        />
        <meta
          property="twitter:description"
          content="Ever stuck at the grocery store wondering what to buy? Having trouble managing your tasks in a single place? Want to set goals in life but don't know where to start? Carbon is an all-in-one productivity app which will help you manage your life."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/HdSgxVC/The-only-productivity-app-you-ll-ever-need.png"
        />
      </Head>
      <Announcement />
      <Header />
      <div className="fade" />
      <Features />
      <FrequentlyAskedQuestions />
      <CallToAction />
    </>
  );
}
