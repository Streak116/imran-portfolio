"use client";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adjust offset as needed
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
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Imran</h1>
        <ul className="flex gap-6">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => handleClick(section)}
              className={`cursor-pointer hover:text-blue-500 ${
                active === section ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
