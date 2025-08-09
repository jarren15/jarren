"use client";
import React, { createContext, useState } from "react";
import type { SetStateAction, Dispatch } from "react";

type SideNavContextType = {
  isSideNavOpen: boolean;
  setIsSideNavOpen: Dispatch<SetStateAction<boolean>>;
} | null;

export const sideNavContext = createContext<SideNavContextType>(null);

export default function SideNavContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return <sideNavContext.Provider value={{ isSideNavOpen, setIsSideNavOpen }}>{children}</sideNavContext.Provider>;
}