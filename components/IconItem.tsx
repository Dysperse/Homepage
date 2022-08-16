import React from "react";

export function IconItem({ icon, inline }: { icon: string; inline?: boolean }) {
  return (
    <div className="icon-item">
      <span className="material-symbols-rounded text-gray-600 select-none">
        {icon}
      </span>
    </div>
  );
}
