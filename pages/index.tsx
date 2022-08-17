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
        <title>Smartlist: Next-gen home inventory and personal finances</title>
        <meta
          name="title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          name="description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartlist.tech/" />
        <meta
          property="og:title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          property="og:description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartlist.tech/" />
        <meta
          property="twitter:title"
          content="Smartlist: Next-gen home inventory and personal finances"
        />
        <meta
          property="twitter:description"
          content="Ever been stuck at the grocery store wondering what you need? Smartlist helps you organize your home's inventory, expenses, tasks, and more"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/8D9qnzV/image.png"
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
