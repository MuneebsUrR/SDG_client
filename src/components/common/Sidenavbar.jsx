"use client";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CloseButton = ({ onClick }) => (
  <div className="absolute top-4 right-4 lg:top-8 lg:right-24 z-10">
    <Button
      size="lg"
      className="bg-transparent text-red-400"
      isIconOnly
      onClick={onClick}
    >
      <X size={40} />
    </Button>
  </div>
);

const Sidebar = ({ onSelect, selectedItem }) => {
  const items = [
    { label: "About", value: "about" },
    { label: "Study", value: "study" },
    { label: "Research", value: "research" },
    { label: "Faculty", value: "faculty" },
  ];

  return (
    <div className="lg:menu-triangle relative w-screen lg:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-700 shadow-lg overflow-hidden">
      <div className="flex flex-col h-auto w-40 lg:w-auto lg:h-screen p-4 lg:p-20 items-left gap-3 lg:items-start lg:justify-center">
        {items.map((item, index) => (
          <motion.h5
            key={item.value}
            className={`lg:text-5xl text-xl cursor-pointer transition-transform duration-300 ease-in-out transform ${
              selectedItem === item.value
                ? "font-bold underline"
                : "font-normal hover:underline"
            }`}
            onClick={() => onSelect(item.value)}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            {item.label}
          </motion.h5>
        ))}
      </div>
    </div>
  );
};

const LinksBox = ({ onClick, sectionList }) => (
  <div className="h-full p-6 space-y-10 bg-transparent">
    <div className="space-y-2">
      {sectionList.links.map((section, index) => (
        <motion.div
          key={index}
          className="space-y-4 w-[400px]"
          initial={{ scale: "50%", opacity: 0 }}
          animate={{ scale: "100%", opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Link
            className="text-5xl font-bold"
            href={section.href}
            onClick={onClick}
          >
            {section.text}
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

module.exports = {
  Sidebar,
  CloseButton,
  LinksBox,
};
