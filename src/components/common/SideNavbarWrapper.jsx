"use client";
import { Sidebar, CloseButton, LinksBox } from "./Sidenavbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebarStore } from "./useSidebarStore";

export default function SideNavbarWrapper() {
  const [selectedContent, setSelectedContent] = useState("about");
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
    <AnimatePresence>
      {isSideNavbarOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white dark:bg-black overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative min-h-screen w-screen flex flex-col lg:flex-row">
            <CloseButton onClick={closeSideNavbar} />
            <div className="flex justify-between items-center flex-col lg:flex-row overflow-hidden">
              <Sidebar
                onSelect={setSelectedContent}
                selectedItem={selectedContent}
              />
              <div className="p-20">
                {selectedContent === "study" && (
                  <LinksBox
                    onClick={closeSideNavbar}
                    sectionList={Sections[0]}
                  />
                )}
                {selectedContent === "research" && (
                  <LinksBox
                    onClick={closeSideNavbar}
                    sectionList={Sections[1]}
                  />
                )}
                {selectedContent === "faculty" && (
                  <LinksBox
                    onClick={closeSideNavbar}
                    sectionList={Sections[2]}
                  />
                )}
                {selectedContent === "about" && (
                  <LinksBox
                    onClick={closeSideNavbar}
                    sectionList={Sections[3]}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Sections = [
  {
    links: [
      { href: "/graduate-school", text: "Graduate School" },
      { href: "/scholarships", text: "Scholarships" },
      { href: "/find-supervisor", text: "Find a supervisor" },
      { href: "/how-to-apply", text: "How to apply" },
    ],
  },
  {
    links: [
      { href: "/research-labs", text: "Resesarch Labs" },
      { href: "/scholarships", text: "Scholarships" },
      { href: "/find-supervisor", text: "Find a supervisor" },
      { href: "/how-to-apply", text: "How to apply" },
    ],
  },
  {
    links: [
      { href: "/faculty", text: "Our Faculty" },
      { href: "/student-exchanges", text: "Student Exchanges" },
      { href: "/career-services", text: "Career Services" },
      { href: "/alumni-stories", text: "Alumni Stories" },
    ],
  },
  {
    links: [
      { href: "/about", text: "About Campus" },
      { href: "/our-history", text: "Our History" },
      { href: "/mission-and-vision", text: "Mission and Vision" },
      { href: "/campus-life", text: "Campus Life" },
    ],
  },
];
