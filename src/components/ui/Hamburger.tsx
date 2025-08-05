"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "motion/react";
import type { Transition, TargetAndTransition } from "motion/react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerWrapperClassNames = classNames("absolute", "aspect-square", "flex", "cursor-pointer", "flex-col", "inset-0", "items-center", "justify-center", "p-5", "w-full");
  // const hamburgerClassNames = classNames(
  //   "h-[2px]",
  //   "relative",
  //   "translate-y-[20px]",
  //   "transition-colors",
  //   "w-5",
  //   ["after:absolute", "after:bg-red-50", "after:content-['']", "after:h-[2px]", "after:transition-all,", "after:w-full"],
  //   ["before:absolute", "before:bg-red-50", "before:content-['']", "before:h-[2px]", "before:transition-all", "before:w-full", "bg-red-50"],
  //   { "bg-transparent": isOpen, "bg-red-50": !isOpen },
  //   { "after:rotate-45": isOpen },
  //   { "after:top-[15px]": !isOpen },
  //   { "before:rotate-[-45deg]": isOpen },
  //   { "before:top-[-15px]": !isOpen }
  // );

  const hamburgerLinesClassNames = classNames("bg-black", "h-[2px]", "my-[2px]", "w-5");

  const hamburgerLinesTransition: Transition = {
    type: "spring",
    bounce: 0,
  };

  const hamburgerLine1Animation: TargetAndTransition = { rotateZ: isOpen ? 45 : 0, y: isOpen ? 6 : 0 };
  const hamburgerLine2Animation: TargetAndTransition = { opacity: isOpen ? 0 : 1, ...(isOpen && { width: 0 }) };
  const hamburgerLine3Animation: TargetAndTransition = { rotateZ: isOpen ? -45 : 0, y: isOpen ? -6 : 0 };

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full aspect-square relative bg-white">
      <input className="hidden" id="hamburgerCheckbox" type="checkbox" onChange={toggleHamburger}></input>
      <label className={hamburgerWrapperClassNames} htmlFor="hamburgerCheckbox">
        <motion.div className={`transform-3d ${hamburgerLinesClassNames}`} animate={hamburgerLine1Animation} transition={hamburgerLinesTransition} />
        <motion.div className={`${hamburgerLinesClassNames}`} animate={hamburgerLine2Animation} transition={hamburgerLinesTransition} />
        <motion.div className={`transform-3d ${hamburgerLinesClassNames}`} animate={hamburgerLine3Animation} transition={hamburgerLinesTransition} />
      </label>
    </div>
  );
}

export default Hamburger;
