"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  "About",
  "Education",
  "Work",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleClick("About")}
          >
            Imran
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            <ul className="flex gap-8 items-center">
              {sections.map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ y: -2 }}
                  onClick={() => handleClick(section)}
                  className="relative cursor-pointer group"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      active === section
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {section}
                  </span>

                  {/* Active indicator - gradient underline */}
                  {active === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover indicator */}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-700 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="mt-4 space-y-2 pb-4">
                {sections.map((section, index) => (
                  <motion.li
                    key={section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleClick(section)}
                    className={`px-4 py-3 rounded-xl cursor-pointer transition-all ${
                      active === section
                        ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        active === section
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {section}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Mobile Theme Toggle */}
              {/* <div className="px-4 pb-4">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                  <ThemeToggle />
                </div>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
