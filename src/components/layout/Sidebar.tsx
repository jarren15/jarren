"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Hamburger from "@/components/ui/Hamburger";
import { motion } from "motion/react";
import { sideNavContext } from "@/providers/SideNavContext";
import type { Transition } from "motion/react";

function Sidebar() {
  const sideNavContextObj = useContext(sideNavContext);

  if (!sideNavContextObj) throw new Error("Sidebar component must be used within a SideNavContextProvider");

  const { isSideNavOpen } = sideNavContextObj;
  const transition: Transition = {
    type: "spring",
    bounce: 0,
  };
  const linksData = [
    { id: "link-1", text: "Link 1", href: "#" },
    { id: "link-2", text: "Link 2", href: "#" },
    { id: "link-3", text: "Link 3", href: "#" },
    { id: "link-4", text: "Link 4", href: "#" },
  ];
  const linkEllements = linksData.map((link) => {
    return (
      <motion.li
        className="text-4xl px-4 py-5"
        key={link.id}
        whileHover={{
          x: 8,
          transition,
        }}>
        <Link className="block" href={link.href}>{link.text}</Link>
      </motion.li>
    );
  });

  return (
    <nav className="fixed h-screen">
      <motion.div
        animate={{ ...(isSideNavOpen && { display: "block", opacity: 1 }) }}
        className="bg-white fixed inset-x-0 h-full top-0"
        initial={{ display: "none", opacity: 0 }}
        transition={transition}>
        <div className="flex flex-col h-full justify-center ml-[88px] pl-[16.66%] pr-[176px]">
          <ul>{linkEllements}</ul>
        </div>
      </motion.div>
      <div className="flex flex-col items-center fixed h-full justify-between left-0 top-0 w-[88px]">
        <img src="https://placehold.co/500x500" alt="Logo" className="aspect-square w-[48]" />
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="-rotate-90 text-center uppercase whitespace-nowrap">
            <h2>john arren "jarren" novilla</h2>
            <span>full-stack developer</span>
          </div>
        </div>
        <Hamburger transition={transition} />
      </div>
    </nav>
  );
}

export default Sidebar;
