import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-center mt-[100px] md:mt-[200px] font text-transparent text-6xl bg-clip-text bg-gradient-to-br from-green-500 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
        Support
        <br />
        &nbsp;
      </h1>{" "}
      <label className="block">
        <input
          type="text"
          autoFocus={true}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              e.target.blur();
            }
          }}
          className="-mt-5 max-w-lg mx-auto block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          placeholder="What can we help you with?"
        />
      </label>
    </div>
  );
}
