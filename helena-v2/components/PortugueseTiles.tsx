"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PortugueseTilesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
      <div className="absolute left-0 top-0 h-full w-1/2">
        <Image
          src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6555387620ef0b32a7f490c3_portuguese-tiles-horizontal.webp"
          alt=""
          fill
          className="object-cover object-left-top"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <Image
          src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6555387690d4525478274e11_portuguese-tiles-vertical.webp"
          alt=""
          fill
          className="object-cover object-right-top"
        />
      </div>
    </div>
  );
}

export function GradientOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none fixed inset-0 z-0"
    >
      <Image
        src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6555334154f9d39858083c05_Landscape-Portugal-D%C3%A9grad%C3%A9.webp"
        alt=""
        fill
        className="object-cover opacity-5"
        priority
      />
    </motion.div>
  );
}
