"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Work() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);

  const workExperience = [
    {
      id: "pennant-se",
      logo: "/pennant-logo.png",
      ...t("workItems.pennant_se")
    },
    {
      id: "pennant-intern",
      logo: "/pennant-logo.png",
      ...t("workItems.pennant_intern")
    },
  ];

  return (
    <section id="work" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
            {t("work.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("work.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left list - Job Selection */}
          <motion.nav
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            aria-label="Work list"
            className="space-y-4"
          >
            {workExperience.map((job, idx) => {
              const active = idx === selected;
              return (
                <motion.button
                  key={job.id}
                  onClick={() => setSelected(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(idx);
                    }
                  }}
                  whileHover={{ y: -4 }}
                  aria-pressed={active}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 shadow-xl shadow-indigo-500/30"
                        : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl"
                    }`}
                >
                  <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center p-1.5 ${active ? "bg-white/20" : "bg-gray-100 dark:bg-gray-700"}`}>
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>

                  <div className="flex-1">
                    <div className={`font-semibold ${active ? "text-white" : "text-gray-800 dark:text-white"}`}>
                      {job.role}
                    </div>
                    <div className={`text-sm ${active ? "text-white/90" : "text-indigo-600 dark:text-indigo-400"}`}>
                      {job.company}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Right details panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={workExperience[selected].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl min-h-[400px]"
              >
                {/* Gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-teal-500/5 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {workExperience[selected].role}
                      </h3>
                      <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {workExperience[selected].company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {workExperience[selected].duration} • {workExperience[selected].location}
                      </p>
                    </div>

                    <div className="hidden md:block relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-700 p-3 shadow-md">
                      <Image
                        src={workExperience[selected].logo}
                        alt={`${workExperience[selected].company} logo`}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </div>

                  {/* Details list */}
                  <div className="space-y-3">
                    {workExperience[selected].details.map((detail: string, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 mt-2" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 rounded-bl-full blur-2xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
