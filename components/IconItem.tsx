import React from "react";

export function IconItem({ icon, inline }: { icon: string; inline?: boolean }) {
  return (
    <div className="icon-item">
      <span className="material-symbols-outlined text-gray-600 select-none text-4xl">
        {icon}
      </span>
    </div>
  );
}
