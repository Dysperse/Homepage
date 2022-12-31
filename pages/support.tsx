import { Box } from "@mui/material";

export default function Support() {
  return (
    <div
      className="relative flex items-center pt-[60px] h-[400px] text-white justify-center flex-col"
      style={{ background: "#5D4444" }}
    >
      <h1 className="text-4xl font-[700]">Support</h1>
      <h1 className="text-xl mt-2 opacity-80 font-[400]">
        What can we help you with today?
      </h1>
      <input
        className="mt-4 px-4 py-2 rounded-lg w-[400px] bg-[rgba(255,255,255,0.1)] focus:ring-2 ring-white ring-inset text-white placeholder-[rgba(255,255,255,.7)]"
        placeholder="Search for help articles, videos, or contact us"
      />
    </div>
  );
}
