import React from "react";
import Link from "next/link";
import Hamburger from "@/components/ui/Hamburger";

function Sidebar() {
  const linksData = [
    {
      id: "test-1",
      text: "test",
    },
    {
      id: "test-2",
      text: "test",
    },
    {
      id: "test-3",
      text: "test",
    },
    {
      id: "test-4",
      text: "test",
    },
  ];

  const linksComponents = linksData.map((link) => {
    return (
      <Link key={link.id} href={link.id}>
        {link.text}
      </Link>
    );
  });

  return (
    <nav className="fixed h-screen w-[88px]">
      <Hamburger />
      <ul>{linksComponents}</ul>
    </nav>
  );
}

export default Sidebar;
