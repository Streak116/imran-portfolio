"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    school: "Maharaja Vijayaram Gajapathi Raj College of Engineering",
    year: "2020 – 2023",
    location: "Visakhapatnam, India",
    logo: "/mvgr-logo.jpg",
  },
  {
    degree: "Diploma, Computer Engineering",
    school: "Sankethika Polytechnic College",
    year: "2017 – 2020",
    location: "India",
    logo: "/sankethika.webp",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey in computer science and engineering
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row items-center"
              >
                {/* Icon on center line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Card with glassmorphism */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md w-full mt-12 lg:mt-0
                ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-12"
                    : "lg:ml-auto lg:pl-12"
                }`}
                >
                  {/* Gradient glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />

                  {/* Arrow pointing toward timeline */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent
                  ${
                    index % 2 === 0
                      ? "right-[-24px] border-l-[24px] border-l-white/80 dark:border-l-gray-800/80"
                      : "left-[-24px] border-r-[24px] border-r-white/80 dark:border-r-gray-800/80"
                  }`}
                  ></div>

                  <div className="relative z-10">
                    {/* Logo + Degree */}
                    <div className="flex items-start gap-4 mb-4">
                      {item.logo && (
                        <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 p-2 shadow-md">
                          <Image
                            src={item.logo}
                            alt={item.school}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 dark:text-white leading-tight">
                          {item.degree}
                        </h3>
                      </div>
                    </div>

                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {item.school}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.year} • {item.location}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
