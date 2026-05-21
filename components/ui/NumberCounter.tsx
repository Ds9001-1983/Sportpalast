"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  format?: (v: number) => string;
}

export function NumberCounter({
  to,
  duration = 1800,
  format = (v) => Math.round(v).toLocaleString("de-DE"),
}: Props) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setV(ease(t) * to);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      run();
      obs.disconnect();
    });
    obs.observe(el);

    // Fail-safe: falls der Observer nie feuert, nach 1,2 s garantiert hochzählen
    const fallback = window.setTimeout(run, 1200);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(v)}
    </span>
  );
}
