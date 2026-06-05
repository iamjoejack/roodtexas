"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BuildState = {
  platform: string;
  finish: string;
  setPlatform: (v: string) => void;
  setFinish: (v: string) => void;
};

const Ctx = createContext<BuildState | null>(null);

export function BuildProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatform] = useState("AR-15 Carbine");
  const [finish, setFinish] = useState("Midnight Forge");
  return (
    <Ctx.Provider value={{ platform, finish, setPlatform, setFinish }}>{children}</Ctx.Provider>
  );
}

export function useBuild() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBuild must be used within BuildProvider");
  return ctx;
}
