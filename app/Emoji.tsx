"use client";
import Image from "next/image";

export function Emoji({
  size = 24,
  emoji,
  style = {},
}: {
  size?: number;
  emoji: string;
  style?: any;
}) {
  return (
    <img
      style={{
        width: size,
        height: size,
      }}
      width={size}
      height={size}
      alt="Emoji"
      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji?.toLowerCase()}.png`}
    />
  );
}
