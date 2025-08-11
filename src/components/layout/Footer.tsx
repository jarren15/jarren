"use client";
import React from "react";
import Link from "next/link";
import { links } from "@/temp-data.json";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { transition } from "@/global-variables";

export default function Footer() {
  const emailDetails = {
    email: "john.arren.novilla@ibm.com",
    subject: encodeURIComponent("Portfolio Inquiry"),
  };
  const linkElements = links.map((link) => {
    return (
      <li className="py-2" key={link.id}>
        <Link className="custom-text-link" href={link.href}>{link.text}</Link>
      </li>
    );
  });
  const socialLinkVariant = {
    initial: { bottom: 0, height: 0, left: 0, right: 0 },
    hover: { bottom: 0, height: "100%", left: 0, right: 0 },
  };

  return (
    <footer className="bg-[#dde1e6] text-[#21272a] dark:bg-[#21272a] dark:text-[#dde1e6] ml-[88px]">
      <div className="px-[6%] pt-16">
        <div data-upper="" className="flex gap-8 text-sm">
          <div data-first="" className="flex-1">
            <h6 className="font-medium mb-6 uppercase">about me</h6>
            <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem quas saepe numquam fugiat obcaecati maiores molestiae eaque doloribus laborum?</p>
            <img src="https://placehold.co/100x44" alt="Logo" className="h-11" />
          </div>
          <div data-second="" className="flex-1">
            <h6 className="font-medium mb-6 uppercase">navigations</h6>
            <ul>{linkElements}</ul>
          </div>
          <div data-third="" className="flex-1">
            <h6 className="font-medium mb-6 uppercase">contacts</h6>
            <ul>
              <li className="flex gap-2 items-center py-2">
                <MapPin className="w-[16px]" />
                <span>Quezon City, Philippines</span>
              </li>
              <li className="flex gap-2 items-center hover:underline py-2">
                <Mail className="w-[16px]" />
                <Link className="custom-text-link" href={`mailto:${emailDetails.email}?subject=${emailDetails.subject}`}>{emailDetails.email}</Link>
              </li>
            </ul>
          </div>
          <div data-fourth="" className="flex-1">
            <h6 className="font-medium mb-6 uppercase">follow me here</h6>
            <div className="flex flex-wrap gap-2">
              <Link className="aspect-square block shadow-border w-10" href="#" target="_blank">
                <motion.div className="flex items-center justify-center h-full relative w-full" whileHover="hover" initial="initial">
                  <motion.div variants={socialLinkVariant} className="absolute bg-accent-reverse" transition={transition}></motion.div>
                  <Linkedin className="relative w-[16px]" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
        <div data-lower="" className="border-t border-t-color border-t-solid flex items-center justify-between mt-10 py-10 text-xs">
          <div>
            <Link className="custom-text-link-highlight" href="/">
              John Arren "Jarren" Novilla
            </Link>
            <span> | Copyright &copy; 2025</span>
          </div>
          <div>
            <span>Connect on </span>
            <Link className="custom-text-link-highlight" href="#" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
