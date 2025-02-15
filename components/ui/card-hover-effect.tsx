"use client";

import { useMotionValue } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HoverEffect({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
  }[];
  className?: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4 ${className}`}
      onMouseMove={onMouseMove}
    >
      {items.map((item) => (
        <Link href={item.link} key={item.title}>
          <motion.div
            className="group relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-gray-900/50 px-8 py-12 transition-colors hover:border-white/20 hover:bg-gray-900/60"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {item.image && (
              <div className="relative h-40 w-40 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
} 