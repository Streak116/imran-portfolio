"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { User, MapPin, Briefcase } from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const tAbout = t("about");

  const highlights = [
    { icon: Briefcase, text: tAbout.highlight1 },
    { icon: User, text: tAbout.highlight2 },
    { icon: MapPin, text: tAbout.highlight3 },
  ];

  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800/60">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Left: About Me heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent mb-4">
              {tAbout.heading}
            </h2>
            {/* Highlight chips */}
            <div className="flex flex-col gap-3 mt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Icon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>{h.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Summary paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              {tAbout.summary}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
