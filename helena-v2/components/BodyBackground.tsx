"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const isChef = pathname === "/chef-helena" || pathname === "/en/chef-helena";

    if (isChef) {
      document.body.style.backgroundColor = "var(--helena-cream)";
      return;
    }

    document.body.style.backgroundColor = "";
  }, [pathname]);

  return null;
}
