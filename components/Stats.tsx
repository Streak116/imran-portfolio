"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./LanguageContext";

function CountUp({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const tStats = t("stats");

  const stats = [
    { value: 3, suffix: "+", label: tStats.yearsExp, icon: "🗓️", static: false },
    { value: 5, suffix: "+", label: tStats.enterpriseProjects, icon: "🏗️", static: false },
    { value: 2, suffix: "", label: tStats.banksServed, icon: "🏦", static: false },
    { value: 70, suffix: "%", label: tStats.setupReduction, icon: "⚡", static: false },
    { value: 0, suffix: "", display: "<1hr", label: tStats.setupVs10Days, icon: "🚀", static: true },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 py-10 overflow-hidden">
      {/* Subtle animated grain overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      {/* Animated shimmer */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="text-3xl mb-2 cursor-default"
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {stat.static
                  ? <span>{stat.display}</span>
                  : <CountUp target={stat.value} suffix={stat.suffix} />
                }
              </div>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-white/40 rounded-full my-2 group-hover:w-14 transition-all duration-300" />

              {/* Label */}
              <p className="text-white/80 text-xs md:text-sm font-medium leading-snug max-w-[100px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
