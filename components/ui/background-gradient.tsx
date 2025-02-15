"use client";

import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
    </div>
  );
}; 