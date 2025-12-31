"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import HelenaSignatureOverlay from "@/components/HelenaSignatureOverlay";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function MenuTabs({
  tabs,
  initialTabId,
  pageTitle,
}: {
  tabs: Tab[];
  initialTabId?: string;
  pageTitle?: string;
}) {
  const defaultId = useMemo(() => {
    if (initialTabId && tabs.some((t) => t.id === initialTabId)) return initialTabId;
    return tabs[0]?.id ?? "";
  }, [initialTabId, tabs]);

  const [activeId, setActiveId] = useState(defaultId);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!pageTitle) return;

    const tabLabel = active?.label?.trim();
    document.title = tabLabel
      ? `${pageTitle} - ${tabLabel} | Restaurant Helena`
      : `${pageTitle} | Restaurant Helena`;
  }, [active?.label, pageTitle]);

  return (
    <div className="mt-10">
      <HelenaSignatureOverlay triggerKey={activeId} />

      <div className="flex flex-wrap items-end gap-x-8 gap-y-3 border-b border-black/10 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "relative -mb-3 pb-3 text-sm font-semibold tracking-wide transition",
              tab.id === activeId
                ? "text-stone-950"
                : "text-stone-600 hover:text-stone-950",
            )}
            aria-pressed={tab.id === activeId}
          >
            {tab.label}
            <span
              className={cn(
                "pointer-events-none absolute inset-x-0 -bottom-px h-[2px] bg-yellow-500 transition-opacity",
                tab.id === activeId ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      <div className="mt-8">{active ? active.content : null}</div>
    </div>
  );
}
