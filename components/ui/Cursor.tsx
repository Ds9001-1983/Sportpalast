"use client";

import { useEffect, useRef } from "react";
import { useCursor } from "@/components/providers/CursorProvider";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const { state } = useCursor();

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0,
      y = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand md:block"
      />
      <div
        ref={ringRef}
        aria-hidden
        data-state={state}
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-[width,height,border-color] duration-300 ease-out md:block data-[state=hover]:h-16 data-[state=hover]:w-16 data-[state=hover]:border-brand data-[state=hidden]:opacity-0"
        style={{ marginLeft: "-1.125rem", marginTop: "-1.125rem" }}
      />
    </>
  );
}
