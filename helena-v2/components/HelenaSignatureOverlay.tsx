"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  triggerKey: string;
};

const DOT_LOTTIE_SRC = "/legacy/signature.lottie";

export default function HelenaSignatureOverlay({ triggerKey }: Props) {
  const first = useRef(true);
  const [visible, setVisible] = useState(false);
  const [instanceKey, setInstanceKey] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);

  const playerKey = useMemo(() => `${triggerKey}:${instanceKey}`, [triggerKey, instanceKey]);

  useEffect(() => {
    let cancelled = false;
    if (typeof window === "undefined") return;

    const fallback = window.setTimeout(() => {
      if (!cancelled) setPlayerReady(true);
    }, 800);

    const define = async () => {
      if (!customElements?.whenDefined) {
        setPlayerReady(true);
        return;
      }

      try {
        await customElements.whenDefined("dotlottie-player");
        if (!cancelled) setPlayerReady(true);
      } catch {
        if (!cancelled) setPlayerReady(true);
      }
    };

    define();
    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    setInstanceKey((k) => k + 1);
    setVisible(true);
  }, [triggerKey]);

  useEffect(() => {
    if (!visible) return;
    if (!playerReady) return;

    const t = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(t);
  }, [visible, playerReady]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#6da0cd]"
      aria-hidden="true"
    >
      {/* dotlottie web component loaded globally in app/layout.tsx */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <dotlottie-player
        key={playerKey}
        src={DOT_LOTTIE_SRC}
        autoplay
        loop={false}
        background="transparent"
        renderer="svg"
        speed="1"
        style={{ width: "320px", height: "320px" }}
      />
    </motion.div>
  );
}
