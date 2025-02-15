"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beams = beamsRef.current;
    if (!beams) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      beams.style.setProperty("--x", `${x}px`);
      beams.style.setProperty("--y", `${y}px`);
    };

    beams.addEventListener("mousemove", handleMouseMove);
    return () => beams.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden [--x:0px] [--y:0px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-sky-500 opacity-0" />
      <div className="absolute inset-0 bg-sky-500 opacity-50 blur-[100px] transition-opacity duration-1000 hover:opacity-100" />
      <div
        className="absolute left-[--x] top-[--y] h-56 w-56 -translate-x-1/2 -translate-y-1/2 opacity-50 blur-[80px] transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(14,165,233,0.8) 0%, rgba(14,165,233,0) 80%)",
        }}
      />
    </div>
  );
}; 