import { cn } from "../../lib/utils";
import React from "react";

export function GridBackgroundDemo({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Grid lines - stays behind content but above bg-black */}
      <div
        className={cn(
          "absolute inset-0 z-0", // 👈 changed from -z-10 → z-0
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_0.5px)]"
        )}
      />

      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Children always above */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


