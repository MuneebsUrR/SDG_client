"use client";
import { useSidebarStore } from "./useSidebarStore";
import Circles from ".//Circles";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@nextui-org/button";
import { X } from "lucide-react";
import { useEffect } from "react";

const SideMenu = () => {
  const isSideNavbarOpen = useSidebarStore((state) => state.isSideNavbarOpen);
  const closeSideNavbar = useSidebarStore((state) => state.closeSideNavbar);

  useEffect(() => {
    if (isSideNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSideNavbarOpen]);

  return (
    <AnimatePresence mode="wait">
      {isSideNavbarOpen && (
        <motion.div
          className="fixed inset-0 z-50 pt-16 bg-white h-screen flex flex-col justify-start items-center dark:bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-cyan-300 dark:bg-cyan-950 p-20 rounded-lg">
            {Sections.map((s, k) => (
              <motion.div
                key={k}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, delay: k * 0.1 }}
              >
                <a
                  href={s.href}
                  className="font-extrabold text-2xl md:text-6xl"
                >
                  {s.text}
                </a>
              </motion.div>
            ))}
            <Button
              size="lg"
              radius="full"
              color="primary"
              className="fixed bottom-10 left-1/2"
              isIconOnly
              onClick={closeSideNavbar}
            >
              <X size={40} />
            </Button>
          </div>

          <div className="absolute top-1/2 right-80 -z-3">
            <Circles options={[0, 1, 1]} />
          </div>
          <div className="absolute top-20 left-0 -z-3">
            <Circles options={[1, 0, 1]} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;

const Sections = [
  { href: "/about", text: "About Campus" },
  { href: "/faculty", text: "Our Faculty" },
  { href: "/research-labs", text: "Resesarch Labs" },
  { href: "/campus-life", text: "Campus Life" },
  { href: "/events", text: "Campus Events" },
  { href: "/news", text: "Campus News" },
];
