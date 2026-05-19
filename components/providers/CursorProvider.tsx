"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CursorState = "default" | "hover" | "drag" | "hidden";

interface CursorCtx {
  state: CursorState;
  setState: (s: CursorState) => void;
}

const Ctx = createContext<CursorCtx | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CursorState>("default");
  const value = useMemo(() => ({ state, setState }), [state]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCursor = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCursor must be used inside CursorProvider");
  return ctx;
};
