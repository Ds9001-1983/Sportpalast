"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NAV_CTA } from "@/lib/content/navigation";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/75 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-grid flex items-center justify-between transition-[padding] duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Logo />
        <MegaMenu />
        <div className="flex items-center gap-2">
          <MagneticButton
            href={NAV_CTA.href}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            {NAV_CTA.label}
          </MagneticButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
