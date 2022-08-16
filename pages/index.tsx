import React from "react";
import { XIcon } from "@heroicons/react/outline";

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
      <Announcement />
      <Header />
      <div className="fade" />
      <Features />
      <FrequentlyAskedQuestions />
      <CallToAction />
    </>
  );
}
