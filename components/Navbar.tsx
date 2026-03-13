"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
// import ThemeToggle from "./ThemeToggle";

const sections = [
  "About",
  "Work",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
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
            className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleClick("About")}
          >
            {t("nav.logo")}
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            <ul className="flex gap-8 items-center">
              {sections.map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ y: -2 }}
                  onClick={() => handleClick(section)}
                  className="relative cursor-pointer group px-3 py-1.5"
                >
                  {/* Active background pill */}
                  {active === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200/60 dark:border-indigo-700/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Glowing dot above active item */}
                  {active === section && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      {/* Pulse ring */}
                      <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-60" />
                    </motion.div>
                  )}

                  <span
                    className={`relative z-10 text-sm font-medium transition-colors ${
                      active === section
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`}
                  >
                    {t(`nav.${section.toLowerCase()}`)}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
            
            {/* RTL Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              {language === "en" ? "ع" : "En"}
            </motion.button>
            <AnimatePresence>
              {active !== "About" && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  href={process.env.NEXT_PUBLIC_RESUME_URL || "/Imran_Full_Stack_Developer.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  {t("nav.downloadCV")}
                </motion.a>
              )}
            </AnimatePresence>
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
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {t(`nav.${section.toLowerCase()}`)}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Mobile CTA */}
              <AnimatePresence>
                {active !== "About" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4 mt-2 overflow-hidden"
                  >
                    <motion.a
                      href={process.env.NEXT_PUBLIC_RESUME_URL || "/Resume Imran.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {t("nav.downloadCV")}
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile RTL Toggle */}
              <div className="px-4 pb-4 mt-2">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("nav.layoutDir")}</span>
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {language === "en" ? t("nav.arabic") : t("nav.english")}
                  </button>
                </div>
              </div>

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
