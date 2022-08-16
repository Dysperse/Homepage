import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-center mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
        Privacy
        <br />
        &nbsp;
      </h1>{" "}
      <p className="mt-4 text-center text-lg text-gray-500 -mt-10">
        Your data is <b>yours.</b>
      </p>
    </div>
  );
}
