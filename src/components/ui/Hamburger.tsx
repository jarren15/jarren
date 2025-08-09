"use client";
import React, { useContext } from "react";
import classNames from "classnames";
import { motion } from "motion/react";
import type { Transition, TargetAndTransition } from "motion/react";
import { sideNavContext } from "@/providers/SideNavContext";

export default function Hamburger({ transition }: Readonly<{ transition: Transition }>) {
  const sideNavContextObj = useContext(sideNavContext);

  if (!sideNavContextObj) throw new Error("Hamburger component must be used within a SideNavContextProvider");

  const { isSideNavOpen, setIsSideNavOpen } = sideNavContextObj;
  const hamburgerWrapperClassNames = classNames("absolute", "aspect-square", "flex", "cursor-pointer", "flex-col", "inset-0", "items-center", "justify-center", "p-5", "w-full");
  const hamburgerLinesClassNames = classNames("bg-black", "h-[2px]", "my-[2px]", "w-5");
  const hamburgerLine1Animation: TargetAndTransition = { rotateZ: isSideNavOpen ? 45 : 0, y: isSideNavOpen ? 6 : 0 };
  const hamburgerLine2Animation: TargetAndTransition = { opacity: isSideNavOpen ? 0 : 1, ...(isSideNavOpen && { width: 0 }) };
  const hamburgerLine3Animation: TargetAndTransition = { rotateZ: isSideNavOpen ? -45 : 0, y: isSideNavOpen ? -6 : 0 };
  const toggleHamburger = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="w-full aspect-square relative bg-white">
      <input className="hidden" id="hamburgerCheckbox" type="checkbox" onChange={toggleHamburger}></input>
      <label className={hamburgerWrapperClassNames} htmlFor="hamburgerCheckbox">
        <motion.div animate={hamburgerLine1Animation} className={`transform-3d ${hamburgerLinesClassNames}`} transition={transition} />
        <motion.div animate={hamburgerLine2Animation} className={`${hamburgerLinesClassNames}`} transition={transition} />
        <motion.div animate={hamburgerLine3Animation} className={`transform-3d ${hamburgerLinesClassNames}`} transition={transition} />
      </label>
    </div>
  );
}