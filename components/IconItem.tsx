import React from "react";

export function IconItem({ icon, inline }: { icon: string; inline?: boolean }) {
  return (
    <div className="icon-item">
      <span
        className="material-symbols-outlined text-gray-600 select-none dark:text-gray-100"
        style={{
          fontSize: "30px",
        }}
      >
        {icon}
      </span>
    </div>
  );
}
