"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingSardine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      <Image
        src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65554c6f6c6ccbbd2b52cb51_sardine.webp"
        alt=""
        width={867}
        height={600}
        className="h-auto w-full"
      />
    </motion.div>
  );
}

export function FloatingOctopus({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 5 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      <Image
        src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65554c6f2b90bfcd292f9839_octopus.webp"
        alt=""
        width={1227}
        height={900}
        className="h-auto w-full"
      />
    </motion.div>
  );
}

export function FloatingShell({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1.05 }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      <Image
        src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65554e7310554d5c243026ed_shell.webp"
        alt=""
        width={676}
        height={600}
        className="h-auto w-full"
      />
    </motion.div>
  );
}

export function SardineDots({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 10 }, (_, i) => i);
  
  return (
    <div className={`flex gap-2 ${className}`}>
      {dots.map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="h-2 w-2 rounded-full bg-yellow-500"
        />
      ))}
    </div>
  );
}
